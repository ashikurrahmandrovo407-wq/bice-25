BICE24BUP Clone Project
=======================

This zip contains:
- static-site/ : A simple multi-file static site (index.html, css/, js/, data/)
- react-tailwind/ : A React + Vite + Tailwind starter with a simple notices page and sample notices.json

How to run static-site:
1. Open static-site/index.html in your browser (or serve with a static server).

How to run react-tailwind:
1. cd react-tailwind
2. npm install
3. npm run dev
4. The Vite dev server will start (http://localhost:5173)

Dynamic Notices:
- Local JSON: both projects ship with data/notices.json (static site) or notices.json (React public).
- Google Sheets CSV: publish your sheet to the web (File → Publish to web) and use the CSV export URL:
  https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0
  Then set SHEETS_CSV_URL in the JS or in App.jsx.

Notes:
- Tailwind & Vite versions are suggestions; run `npm install` to install devDependencies.
- If you want, I can further:
  • Convert this into a deployable Netlify/Vercel template
  • Add admin UI to post notices (simple Firebase/Firestore or Google Sheets write)
  • Generate a production-ready ZIP with node_modules preinstalled


ADDITIONS: Admin UI & Deploy
1. Admin UI: React app now includes an Admin panel (src/App.jsx) that can POST notices to a Google Apps Script Web App. See google-apps-script/addNotice.gs and follow steps in that file.
2. Deploy: netlify.toml and vercel.json added to react-tailwind for one-click deploys.
3. Security: If you plan to make the Apps Script public, consider adding a secret token check and validating inputs before appending to the sheet.
