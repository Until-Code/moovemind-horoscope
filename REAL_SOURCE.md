# Brancher une vraie source astrologique (optionnel)

Par défaut, `scripts/generate-horoscopes.mjs` génère le texte à partir de
`predictions-data.mjs` (rotation déterministe de textes rédigés à l'avance
— même logique que le générateur local déjà présent dans l'app Swift).
C'est 100% gratuit et ne dépend de personne, mais ce n'est pas calculé à
partir des positions planétaires réelles.

Si tu veux un jour du contenu vraiment "réel" (transits du jour), il y a
un seul endroit à modifier : la fonction `buildPrediction(sign, period,
date)` dans `scripts/generate-horoscopes.mjs`. Le reste du pipeline
(Action, planning, publication GitHub Pages, format de sortie, app Swift)
ne change pas.

## Option A — API tierce gratuite/freemium

Exemple avec une clé API stockée en secret GitHub (jamais exposée dans
l'app, contrairement à une clé embarquée côté client) :

1. Crée un compte sur le fournisseur choisi (ex. astrologyapi.com) et
   récupère une clé API.
2. Dans le repo GitHub : **Settings → Secrets and variables → Actions →
   New repository secret**, nom `HOROSCOPE_API_KEY`.
3. Passe-la au script dans le workflow :
   ```yaml
   - name: Générer les fichiers JSON
     env:
       HOROSCOPE_API_KEY: ${{ secrets.HOROSCOPE_API_KEY }}
     run: node scripts/generate-horoscopes.mjs
   ```
4. Dans `buildPrediction`, appelle l'API avec `process.env.HOROSCOPE_API_KEY`
   pour chaque signe/période, avec un `try/catch` qui retombe sur
   `buildDaily/buildWeekly/buildMonthly` (contenu local) en cas d'échec —
   exactement le même principe de repli que `HoroscopeService.swift` côté
   app.

Comme le script n'appelle l'API qu'une fois par jour pour les 12 signes
(24 à 36 appels/jour selon les périodes), même un plan gratuit très
limité (50 crédits/mois) tient largement, puisque ce n'est plus chaque
utilisateur de l'app qui appelle l'API, mais uniquement ce script.

## Option B — calcul d'éphémérides réel

Plus ambitieux : calculer toi-même les positions planétaires (ex. lib
`astronomy-engine` en Node, gratuite et sans clé) et écrire une logique
d'interprétation (aspects, maisons, etc.) pour en tirer un texte. Beaucoup
plus de travail, mais 100% gratuit, sans dépendance externe, et
véritablement basé sur les transits du jour.

Dans les deux cas, le format de sortie (`{ "date", "belier", ... }`) et
tout le reste du pipeline restent identiques — l'app Swift ne voit jamais
la différence.
