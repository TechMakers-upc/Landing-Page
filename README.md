# FixCore - Landing Page

This is the landing page for **FixCore**, a maintenance management platform (CMMS) built by our team, TechMakers, as part of a university project at UPC.

Live site: https://techmakers-upc.github.io/Landing-Page/

## What is FixCore?

In many small and mid-sized industrial plants, maintenance still runs on WhatsApp messages, spreadsheets and paper forms. When a machine breaks down, nobody is quite sure who reported it, which technician is on it, or whether the spare part is in stock.

FixCore puts all of that in one place. Plant managers, maintenance technicians and contractor firms can:

- keep a record of every machine, with its manuals and maintenance history
- create work orders and follow them from the first report to the final repair
- schedule preventive maintenance so problems get caught early
- check which spare parts are available
- report a fault from a phone by scanning a QR code on the machine
- look at dashboards with numbers like response time and asset availability

The landing page explains all of this to visitors and sends them to the web app when they want to try it.

## What's on the page

- **Hero** with the main message and a link to the platform
- **Features**, an interactive explorer where you click each area (assets, work orders, preventive, inventory, field reporting, analytics) to read about it
- **How it works**, the three-step flow: scan and report, assign and repair, measure and improve
- **Technology** and **Solutions**, explaining who the product is for (plant managers, contractor firms, field technicians)
- **Team**, a short introduction to each of us
- **Pricing**, three plans with a monthly/annual switch
- **FAQ** and a closing call to action
- **Privacy policy** and **Terms and conditions** pages

The site comes in English (`index.html`, the default) and Spanish (`index-es.html`). You can switch between them with the ES / EN button in the header, and the page keeps your scroll position when you do.

It's responsive. We tested it on phones (around 375px wide), tablets and desktop screens. On smaller screens the navigation moves into a hamburger menu and the grids drop to fewer columns.

## Built with

Plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies to install. Fonts (Inter and Outfit) load from Google Fonts.

## Running it locally

Clone the repository:

```bash
git clone https://github.com/TechMakers-upc/Landing-Page.git
cd Landing-Page
```

Then open `index.html` in your browser. That's really all you need.

If you prefer a local server (some browsers are picky with `file://`), any static server works. For example, with Python:

```bash
python -m http.server 8000
```

and go to http://localhost:8000.

## Project structure

```
Landing-Page/
├── index.html            # English version (default)
├── index-es.html         # Spanish version
├── privacy-en.html       # Privacy policy (EN)
├── privacidad.html       # Privacy policy (ES)
├── terms-en.html         # Terms and conditions (EN)
├── terminos.html         # Terms and conditions (ES)
├── favicon.ico
└── public/
    └── assets/
        ├── images/       # Mockups, team photos and logos
        ├── scripts/
        │   └── main.js   # Feature explorer logic
        └── styles/
            └── style.css # All the styles, including breakpoints
```

## How we work with Git

We follow **Gitflow**:

- `main` only holds released versions, tagged as `vX.Y.Z`
- `develop` is where finished work comes together
- new work goes in a `feature/<name>` branch created from `develop`, and gets merged back into `develop` when it's done
- when `develop` is ready to ship, we open a `release/<version>` branch, then merge it into `main` and `develop` and tag it

Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `style:`).

## Team - TechMakers

- Alvar Lucas Córdova
- Sunio Danilo Landa Sánchez
- Giuseppe Adrián Villanueva Rodríguez
- Diego Rances Rojas Huaranga
- Pierre Alessandro Mendoza Boluarte
