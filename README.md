# Dadou ou pas Dadou 🦴

## Mettre le jeu en ligne avec GitHub Pages (gratuit)

1. Va sur https://github.com et crée un compte si tu n'en as pas.
2. Clique sur **"New repository"** (bouton vert "New").
3. Donne-lui un nom, par exemple `dadou-game`. Laisse-le en **Public**. Ne coche rien d'autre. Clique **"Create repository"**.
4. Sur la page du repo tout neuf, clique **"uploading an existing file"** (ou l'icône d'upload).
5. Glisse-dépose les 5 fichiers de ce dossier : `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.
6. Clique **"Commit changes"** en bas.
7. Va dans l'onglet **Settings** du repo → section **Pages** (menu de gauche).
8. Dans "Branch", choisis `main` et le dossier `/ (root)`, puis **Save**.
9. Attends 1-2 minutes, GitHub te donne un lien du type :
   `https://TONPSEUDO.github.io/dadou-game/`

C'est ce lien que tu partages à tes amis — accessible à tout le monde, sans compte Claude.

## Installer comme une appli sur le téléphone (PWA)

Une fois le lien ouvert dans le navigateur du téléphone :

- **iPhone (Safari)** : bouton Partager → "Sur l'écran d'accueil"
- **Android (Chrome)** : menu ⋮ → "Ajouter à l'écran d'accueil" / "Installer l'application"

Une icône 🦴 apparaît alors sur l'écran d'accueil, et le jeu s'ouvre en plein écran comme une vraie appli.

## Mettre à jour les photos ou les points de zoom plus tard

Deux façons de faire, sans avoir besoin de moi :

1. Ouvre le jeu (sur GitHub Pages), va dans **⚙ Admin** (code `1234`).
2. Ajoute/supprime des photos, clique **🎯** sur une vignette pour recentrer son zoom, ou utilise **− / ＋** pour régler à quel point elle zoome (certaines photos ont besoin de plus de zoom que d'autres).
3. Clique **"💾 Télécharger le fichier mis à jour (index.html)"** — ça télécharge un nouveau `index.html` avec tous tes changements intégrés.
4. Va sur ton repo GitHub, glisse-dépose ce nouveau `index.html` par-dessus l'ancien (GitHub te proposera de le remplacer), **Commit changes**.
5. Le site se met à jour automatiquement en 1-2 minutes.

⚠️ Important : tant que tu n'as pas cliqué sur "Télécharger" puis ré-uploadé sur GitHub, tes changements ne restent que dans TON navigateur — tes amis ne les verront pas.

