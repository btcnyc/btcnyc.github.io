<p align="center">
  <img src="static/img/logo.png" alt="Bitcoin Network NYC logo" width="200" />
</p>

<h1 align="center">🗽 Bitcoin Network NYC Website</h1>

This is the official website for **Bitcoin Network NYC** — a community hosting Bitcoin workshops and events across New York City.
It’s built with [Docusaurus](https://docusaurus.io), a modern React-based static site generator.

🌐 **Live site:** [https://btcnyc.github.io](https://btcnyc.github.io)

---

## 🧭 About

The site serves as the central hub for all things BTC NYC:

* Info about our mission and community
* Links to our meetups, Telegram, and socials
* Entry point to our [Classes & Guides](https://btcnyc.github.io/classes/) site

---

## ⚙️ Tech Stack

* **Framework:** [Docusaurus 3](https://docusaurus.io/)
* **Language:** TypeScript
* **Styling:** Infima CSS (customized with Bitcoin NYC theme)
* **Hosting:** GitHub Pages (via GitHub Actions)

---

## 🚀 Local Development

Clone the repo and install dependencies:

```bash
npm install
npm run start
```

This starts a local dev server and opens the site in your browser.
Edits in `src/pages` and `src/css` reload automatically.

---

## 🏗️ Build

To generate the static site locally:

```bash
npm run build
```

The static output will be in the `build/` directory.

---

## 🌍 Deployment (GitHub Pages via Actions)

Deployment is automatic on every push to `main`.

If you want to trigger a manual build and deploy:

```bash
gh workflow run deploy-docusaurus
```

> The workflow uses `actions/upload-pages-artifact` and `actions/deploy-pages` to publish to the Pages environment — no need for a `gh-pages` branch.

---

## 🧠 Repo Structure

```plaintext
btcnyc.github.io/
├── .github/workflows/pages.yml   # CI/CD pipeline for Pages deployment
├── src/                          # React/TS pages, CSS, components
│   ├── pages/                    # index.tsx, 404.tsx, etc.
│   └── css/custom.css            # Custom Bitcoin NYC theme
├── static/img/                   # Logo, favicon, social previews
├── docusaurus.config.js          # Global site config (navbar, footer)
└── README.md
```

---

## 🤝 Contributing

We welcome contributions from developers who want to improve or extend the BTC NYC website.

### 🪜 Getting Started

1. Fork this repo and clone your fork locally.
2. Create a new branch for your feature or fix:

   ```bash
   git checkout -b feature/my-new-section
   ```
3. Run the local dev server with `npm run start`.
4. Make your changes — new pages live under `src/pages`, styles under `src/css`.
5. Commit and push your branch:

   ```bash
   git add .
   git commit -m "Add new feature section"
   git push origin feature/my-new-section
   ```
6. Open a pull request to `main`.

### 🧩 Code Style

* Use **TypeScript** for all new components and pages.
* Follow existing component structure and naming conventions.
* Keep the design minimal and consistent with the orange/black BTC NYC theme.

### ✅ Before Opening a PR

* Run `npm run build` to ensure the build succeeds.
* Verify your changes locally at [http://localhost:3000](http://localhost:3000).
* Keep commits concise and descriptive.

### 🔍 Issue Tracking

* Use **GitHub Issues** to report bugs or request features.
* Tag issues appropriately (e.g., `enhancement`, `bug`, `design`, `content`).

---

## 💡 Related Repos

* [btcnyc/classes](https://github.com/btcnyc/classes) — curriculum, guides, and workshop resources

---

## 👩‍💻 Maintainers

Community-maintained by the **Bitcoin Network NYC** dev team.
Questions or PRs welcome!

---

## ⚖️ License

[MIT License](LICENSE)
