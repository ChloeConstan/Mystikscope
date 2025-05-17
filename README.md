# 🌌 Mystikscope

**Mystikscope** est une application web d'horoscope en Node.js ✨. Elle permet d'afficher l'horoscope du jour et de la semaine pour chaque signe du zodiaque à partir d'une API JSON, avec un design responsive.

---

## 🛠️ Technologies utilisées

* **Node.js** avec **Express.js**
* **EJS** pour les templates dynamiques
* **HTML5 / SCSS (mobile first)**
* **JavaScript vanilla** pour la logique côté client

---

## ⚙️ Installation et lancement local

1. **Cloner le projet** :

```bash
git clone https://github.com/ton-utilisateur/mystikscope.git
cd mystikscope
```

2. **Installer les dépendances** :

```bash
npm install
```

3. **Lancer le serveur** :

```bash
npm start
```

Le site sera disponible sur `http://localhost:3000`

4. **Compiler le SCSS** (si besoin) :

```bash
sass --watch public/style/scss/style.scss public/style/css/style.css
```

---

## 🚀 Déploiement sur Render

1. Crée un repo GitHub contenant ton projet (avec `app.js`, `views`, `public`, etc.)
2. Pousse ton code (`git add .`, `git commit`, `git push`)
3. Va sur [Render.com](https://render.com), connecte ton GitHub
4. Clique sur **"New Web Service"**
5. Choisis ton repo et configure :

   * **Build Command** : `npm install`
   * **Start Command** : `npm start`
   * **Node Version** (si besoin dans `render.yaml` ou `package.json`)

---

## 📁 Structure du projet

```
Mystikscope/
├── public/            # fichiers CSS, JS, images
│   └── style/
│       └── scss/
│       └── css/
├── views/             # fichiers EJS (HTML dynamiques)
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   └── index.ejs
├── app.js             # serveur Express
├── package.json       # config et dépendances
└── .gitignore         # node_modules etc.
```

---

