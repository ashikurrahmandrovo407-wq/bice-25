# BICE 2024 — GitHub Pages ready package

This package is prepared for direct upload into a GitHub repository root.
To publish on GitHub Pages (as user page or project page), follow these steps:

1. Create a new repository on GitHub (e.g. `bice-25`). Do NOT initialize with README or .gitignore.
2. Upload **all files and folders from this ZIP** into the repository root using GitHub web UI (Add file → Upload files)
   - Make sure `package.json`, `public/`, `src/` are in repository root (not in a subfolder).
3. On your local machine (optional but recommended), clone the repo and run:
   ```bash
   npm install
   npm install --save-dev gh-pages
   npm run deploy
   ```
   This will build and push the `build/` folder to `gh-pages` branch used by GitHub Pages.
4. Alternatively, you can enable GitHub Pages in repository Settings → Pages → Deploy from branch → gh-pages (or main) depending on chosen workflow.
5. Your site will be available at:
   https://ashikurrahmandrovo407-wq.github.io/bice-25/

Notes:
- If you upload via GitHub web UI, ensure the files are in the repository root (not nested inside another folder).
- Replace `public/logo192.png` with your real logo image if you want.
