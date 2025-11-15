// Load notices from local JSON or Google Sheets CSV endpoint if provided.
// To use Google Sheets: publish sheet to web and set SHEETS_CSV_URL to the CSV export URL.
const SHEETS_CSV_URL = ""; // e.g. "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0"
const localJSON = "data/notices.json";

async function fetchNotices(){
  try{
    let res;
    if(SHEETS_CSV_URL){
      res = await fetch(SHEETS_CSV_URL);
      const csv = await res.text();
      // simple CSV parse (assumes no commas in fields)
      const rows = csv.trim().split('\n').map(r=>r.split(','));
      const [head, ...data] = rows;
      const items = data.map(r => ({date: r[0], title: r[1], link: r[2]||'#'}));
      return items;
    } else {
      res = await fetch(localJSON);
      return await res.json();
    }
  } catch(e){
    console.error("Failed to load notices", e);
    return [];
  }
}

function renderNotices(items){
  const root = document.getElementById('notices');
  if(items.length===0){ root.innerHTML = '<p class="small">No notices available.</p>'; return; }
  root.innerHTML = items.map(it=>`<div class="notice"><div class="notice-date">${it.date}</div><div class="notice-title"><a href="${it.link}" target="_blank" rel="noopener">${it.title}</a></div></div>`).join('');
}

fetchNotices().then(renderNotices);
