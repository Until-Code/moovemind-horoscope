# astroo-api-self-hosted

Remplaçant gratuit et auto-hébergé de l'ancienne API `kayoo123/astroo-api`
(fermée / passée derrière un mot de passe). Génère chaque jour un JSON
horoscope FR (quotidien, hebdomadaire, mensuel) pour les 12 signes, et le
publie via GitHub Pages — gratuit, sans clé API, sans limite de requêtes,
et sous ton contrôle total.

## Ce que ça fait

Une GitHub Action tourne une fois par jour (03h20 UTC), exécute
`scripts/generate-horoscopes.mjs`, et commit les fichiers générés dans
`docs/` :

- `docs/jour.json`
- `docs/hebdomadaire.json`
- `docs/mensuel.json`

Format identique à l'ancienne API (`{ "date": "...", "belier": "...",
"taureau": "...", ... }`), donc **aucun changement de code côté Swift** en
dehors de l'URL.

Le contenu est généré à partir d'une banque de textes FR déjà utilisée dans
l'app (rotation déterministe par jour/semaine/mois + signe — donc stable
toute la journée, mais qui change chaque jour/semaine/mois). Ce n'est pas
un calcul d'éphémérides réel — voir `REAL_SOURCE.md` si tu veux brancher une
vraie source astrologique plus tard, sans changer le reste du pipeline.

## Installation (une seule fois)

1. Crée un repo GitHub public (ex. `astroo-api-perso`), pousse ce dossier
   dedans :
   ```bash
   cd astroo-api-self-hosted
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/<TON_USER>/<TON_REPO>.git
   git push -u origin main
   ```

2. Autorise les Actions à écrire dans le repo : **Settings → Actions →
   General → Workflow permissions → "Read and write permissions"**, puis
   Save. (Sans ça, le commit automatique des JSON échoue.)

3. Lance la génération une première fois pour avoir du contenu tout de
   suite : onglet **Actions → Générer les horoscopes du jour → Run
   workflow**.

4. Active GitHub Pages : **Settings → Pages → Source: Deploy from a
   branch → Branch: main, dossier: /docs → Save**.

5. Après quelques minutes, tes fichiers sont servis ici (adapte selon le
   nom de ton repo) :
   ```
   https://<TON_USER>.github.io/<TON_REPO>/jour.json
   https://<TON_USER>.github.io/<TON_REPO>/hebdomadaire.json
   https://<TON_USER>.github.io/<TON_REPO>/mensuel.json
   ```
   (Si ton repo s'appelle exactement `<TON_USER>.github.io`, retire le
   segment `/<TON_REPO>` de l'URL.)

## Côté app Swift

Dans `HoroscopeModels.swift`, remplace uniquement les URLs :

```swift
private let frenchAPIURLs: [HoroscopePeriod: String] = [
    .daily:   "https://<TON_USER>.github.io/<TON_REPO>/jour.json",
    .weekly:  "https://<TON_USER>.github.io/<TON_REPO>/hebdomadaire.json",
    .monthly: "https://<TON_USER>.github.io/<TON_REPO>/mensuel.json"
]
```

Rien d'autre à changer : `FrenchHoroscopeResponse` décode déjà ce format
exact (un `String` par signe, `StringOrArray` gère aussi bien le cas où tu
déciderais un jour de renvoyer des tableaux).

## Tester en local avant de pousser

```bash
npm run generate
cat docs/jour.json
```

## Pourquoi c'est plus robuste que l'ancien setup

- Zéro clé API, zéro quota, zéro coût — hébergement statique GitHub Pages.
- Tu es le seul mainteneur : plus de dépendance à un repo tiers qui peut
  fermer ou passer derrière un mot de passe du jour au lendemain.
- Le format de sortie ne bouge pas si tu changes la source de contenu plus
  tard (voir `REAL_SOURCE.md`) — l'app n'a jamais besoin d'être retouchée.
