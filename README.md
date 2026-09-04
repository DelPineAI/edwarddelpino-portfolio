# Edward Del Pino — Portfolio

React + Vite portfolio site, recovered from the deployed production build
after the original source directory was lost.

## Running locally

```bash
npm install
npm run dev
```

## Structure

```
src/
  App.jsx                    layout: Navbar, Hero, About, Experience, Projects, Contact
  index.css                  CSS variables + font imports
  utils.js                   getImageUrl helper
  data/
    skills.json              skill grid
    history.json             experience timeline
    projects.json            project cards
  components/
    Navbar/                  responsive nav with mobile menu
    Hero/                    headline, blurb, contact button, floating portrait
    About/                   three role cards with hover gradient
    Experience/              skill grid + history list
    Projects/                project grid + ProjectCard
    Contact/                 footer with email, LinkedIn, GitHub
```

## Assets

Image assets are **not** included in this recovery. Download them from the
deployed site (or the Netlify deploy folder) and place them here:

```
src/assets/
  about/     brainIcon.png  cursorIcon.png  serverIcon.png  uiIcon.png
  contact/   emailIcon.png  githubIcon.png  linkedinIcon.png
  hero/      aboutme.png  edwardhero.png
  history/   fiu.png  gca.png  podium.png
  nav/       closeIcon.png  menuIcon.png
  projects/  7segback1.png  7segview.png  boxview.png  calc.png
             codeject.png  intelcert.png
  skills/    cpp.png  css.png  html.png  java.png  js.png  node.png
             pandas.png  plotly.png  python.png  react.png  sql.png
             tableau.png  vivado.png
```

The deployed filenames are content-hashed (e.g. `edwardhero-BVYtrGVb.png`) —
strip the hash and restore the original folder structure above.

## Note

`vite.config.js` now sets `build.sourcemap: true`. This deploys `.map` files
alongside the bundle so the original source can always be recovered from a
live deployment.
