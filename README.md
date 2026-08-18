# Portafolio - Danna Bastidas (React)

Portafolio personal construido con React + Vite, bilingue (inglés/español) con un boton para cambiar de idioma. Listo para publicar en GitHub Pages.

## Stack

- React 19
- Vite
- CSS puro (sin librerias de UI)

## Estructura

```
portafolio-danna-react/
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── content.js       # todo el texto en EN y ES vive aqui
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
└── README.md
```

## Como correrlo en local

```bash
npm install
npm run dev
```

Abre la URL que te muestra la terminal (normalmente `http://localhost:5173`).

## Pendientes por editar

Todo el contenido (ingles y espanol) esta centralizado en `src/data/content.js`. Busca las marcas `[EDIT HERE]` / `[EDITA AQUI]` para completar:

- **About**: agrega un dato personal, tu formacion o lo que buscas profesionalmente.
- **Projects**: agrega un cuarto proyecto real (o reemplaza el placeholder). Los proyectos "SB Construcciones" y "Reto MTB Villa de Leyva" quedaron sin link porque sus dominios no estan activos actualmente.
- **Contact**: reemplaza el email, LinkedIn y GitHub por los tuyos reales (estan en dos lugares: `content.js` para el texto visible y `Contact.jsx` para los `href`).

## Como publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `portafolio`.
2. En `vite.config.js`, si tu repo NO se llama `tu-usuario.github.io`, ajusta la propiedad `base` (ya viene configurada como `'./'`, que funciona para la mayoria de los casos; si tienes problemas de rutas, cambiala por `'/portafolio/'` usando el nombre exacto de tu repo).
3. Instala la herramienta de despliegue:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Agrega estos scripts a tu `package.json` (dentro de `"scripts"`):
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Sube tu codigo a GitHub:
   ```bash
   git init
   git add .
   git commit -m "Primer commit del portafolio"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```
6. Publica:
   ```bash
   npm run deploy
   ```
7. En GitHub, ve a **Settings → Pages** y verifica que la fuente sea la rama `gh-pages`. Tu sitio quedara en:
   `https://tu-usuario.github.io/tu-repositorio/`

## Build de produccion

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para subir a cualquier hosting estatico (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).
