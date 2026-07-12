// Génère docs/jour.json, docs/hebdomadaire.json, docs/mensuel.json
// à partir de la banque de contenu FR (predictions-data.mjs).
//
// Lancé une fois par jour par .github/workflows/generate-horoscopes.yml,
// puis servi gratuitement et sans limite de requêtes via GitHub Pages
// (dossier /docs). L'app Swift n'a besoin de changer que l'URL dans
// `frenchAPIURLs` (HoroscopeModels.swift) — le format JSON reste identique
// à l'ancienne API kayoo123/astroo-api (un champ "date" + un champ par signe).
//
// 🆕 Pour brancher une vraie source (transits réels, API tierce, etc.)
// au lieu du contenu rotatif ci-dessous, voir REAL_SOURCE.md — il suffit
// d'adapter `buildPrediction(sign, period, date)` sans toucher au reste.

import { mkdir, writeFile } from "node:fs/promises";
import { SIGNS, DAILY, WEEKLY, MONTHLY, seasonalInfluence, monthlyFocus } from "./predictions-data.mjs";

const OUTPUT_DIR = new URL("../docs/", import.meta.url);

// --- Utilitaires déterministes (même horoscope pour tout le monde le même jour) ---

function dayOfYear(date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
  return Math.floor(diff / 86400000) + 1;
}

// Numéro de semaine ISO-8601 (1-53), aligné sur weekOfYear utilisé côté Swift.
function isoWeek(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const firstDayNum = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNum + 3);
  return 1 + Math.round((d - firstThursday) / (7 * 86400000));
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function dateKey(date) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

// --- Construction du texte par signe/période (contenu rotatif, cf. predictions-data.mjs) ---

function buildDaily(sign, date) {
  const pool = DAILY[sign];
  const idx = dayOfYear(date) % pool.length;
  return pool[idx];
}

function buildWeekly(sign, date) {
  const pool = WEEKLY[sign];
  const count = pool.length;
  const week = isoWeek(date);
  const i0 = week % count;
  const i1 = (week + 1) % count;
  const i2 = (week + 2) % count;
  const month = date.getUTCMonth() + 1;
  return [pool[i0], pool[i1], pool[i2], seasonalInfluence(month)].join(" ");
}

function buildMonthly(sign, date) {
  const pool = MONTHLY[sign];
  const count = pool.length;
  const month = date.getUTCMonth() + 1;
  const i0 = (month - 1) % count;
  const i1 = month % count;
  return [pool[i0], pool[i1], monthlyFocus(month)].join(" ");
}

// Point d'extension : remplace ce switch par un vrai appel réseau si tu
// branches une source externe (voir REAL_SOURCE.md). Doit rester `async`.
async function buildPrediction(sign, period, date) {
  switch (period) {
    case "daily": return buildDaily(sign, date);
    case "weekly": return buildWeekly(sign, date);
    case "monthly": return buildMonthly(sign, date);
    default: throw new Error(`Période inconnue: ${period}`);
  }
}

async function generateFile(period, date) {
  const payload = { date: dateKey(date) };
  for (const sign of SIGNS) {
    payload[sign] = await buildPrediction(sign, period, date);
  }
  return payload;
}

async function main() {
  const now = new Date();

  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = {
    "jour.json": await generateFile("daily", now),
    "hebdomadaire.json": await generateFile("weekly", now),
    "mensuel.json": await generateFile("monthly", now)
  };

  for (const [filename, payload] of Object.entries(files)) {
    const path = new URL(filename, OUTPUT_DIR);
    await writeFile(path, JSON.stringify(payload, null, 2) + "\n", "utf-8");
    console.log(`✅ ${filename} généré (${Object.keys(payload).length - 1} signes)`);
  }
}

main().catch((err) => {
  console.error("❌ Échec de génération:", err);
  process.exit(1);
});
