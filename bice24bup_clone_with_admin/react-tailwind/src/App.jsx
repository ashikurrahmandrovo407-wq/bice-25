import React, {useEffect, useState} from 'react'

function App(){
  const [notices, setNotices] = useState([])
  const SHEETS_CSV_URL = '' // set Google Sheets CSV URL here if you publish the sheet
  useEffect(()=>{
    async function load(){
      try{
        if(SHEETS_CSV_URL){
          const res = await fetch(SHEETS_CSV_URL)
          const csv = await res.text()
          const rows = csv.trim().split('\n').map(r=>r.split(','))
          const [head, ...data] = rows
          setNotices(data.map(r=>({date:r[0],title:r[1],link:r[2]||'#'})))
        } else {
          const res = await fetch('/notices.json')
          setNotices(await res.json())
        }
      }catch(e){ console.error(e) }
    }
    load()
  },[])

function AdminPanel(){
  const [date, setDate] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  const [msg, setMsg] = React.useState('');
  // Set your Apps Script POST URL here (deploy Apps Script as Web App with POST allowed)
  const APPS_SCRIPT_URL = '' // e.g. 'https://script.google.com/macros/s/YOUR_DEPLOY_ID/exec'

  async function submit(e){
    e.preventDefault();
    setMsg('Sending...');
    const payload = {date, title, link};
    try{
      if(APPS_SCRIPT_URL){
        const res = await fetch(APPS_SCRIPT_URL, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        const j = await res.json();
        setMsg(j && j.result ? 'Saved: '+j.result : 'Saved');
      } else {
        // fallback: save to localStorage
        const existing = JSON.parse(localStorage.getItem('draft-notices')||'[]');
        existing.unshift(payload);
        localStorage.setItem('draft-notices', JSON.stringify(existing));
        setMsg('Saved locally to browser storage (for testing).');
      }
    }catch(err){
      console.error(err);
      setMsg('Failed to save: '+err.message);
    }
  }

  return (
    <section className="bg-white p-4 rounded-lg shadow mt-6">
      <h3 className="text-lg font-semibold">Admin — Add Notice</h3>
      <form onSubmit={submit} className="mt-3 space-y-3">
        <input required value={date} onChange={e=>setDate(e.target.value)} placeholder="YYYY-MM-DD" className="w-full p-2 border rounded"/>
        <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Notice title" className="w-full p-2 border rounded"/>
        <input value={link} onChange={e=>setLink(e.target.value)} placeholder="Optional link" className="w-full p-2 border rounded"/>
        <div className="flex gap-2">
          <button className="px-3 py-2 bg-indigo-600 text-white rounded">Save</button>
          <button type="button" onClick={()=>{setDate('');setTitle('');setLink('');setMsg('');}} className="px-3 py-2 border rounded">Clear</button>
        </div>
        {msg && <div className="text-sm text-gray-600 mt-2">{msg}</div>}
      </form>
      <div className="text-xs text-gray-500 mt-3">
        Tip: To persist notices centrally, deploy the supplied Google Apps Script in <code>google-apps-script/addNotice.gs</code> as a Web App and paste the URL above.
      </div>
    </section>
  )
}

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center">B</div>
            <h1 className="text-xl font-semibold">BICE 2024</h1>
          </div>
          <nav className="space-x-3">
            <a href="#" className="text-sm">Home</a>
            <a href="#" className="text-sm">Notices</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Notices</h2>
          <div className="mt-3">
            {notices.length===0 ? <p className="text-sm text-gray-500">No notices yet</p> : notices.map((n,i)=>(
              <div key={i} className="border-b py-3">
                <div className="text-sm text-gray-500">{n.date}</div>
                <a href={n.link || '#'} className="font-medium text-indigo-600">{n.title}</a>
              </div>
            ))}
          </div>
        </section>
        <AdminPanel />
      </main>
    </div>
  )
}

export default App
