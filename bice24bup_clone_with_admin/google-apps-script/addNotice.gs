
/*
  Google Apps Script to receive POST requests and append a row to a Google Sheet.
  Steps:
  1. Create a Google Sheet and note its ID (in the URL).
  2. In Apps Script editor, paste this code and set SHEET_ID variable below.
  3. Deploy -> New deployment -> Select "Web app", set "Execute as me" and "Anyone" or "Anyone, even anonymous" (if you want open posting).
  4. Use the Web App URL as APPS_SCRIPT_URL in the React AdminPanel.

  Caution: Allowing anonymous writes means anyone with the URL can add notices.
*/
const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doGet(e){
  return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  try{
    var body = e.postData.contents;
    var data;
    try{ data = JSON.parse(body); } catch(err){ data = e.parameter; }
    var date = data.date || new Date().toISOString().slice(0,10);
    var title = data.title || '(no title)';
    var link = data.link || '';
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    sheet.insertRowBefore(2);
    sheet.getRange(2,1,1,3).setValues([[date,title,link]]);
    return ContentService.createTextOutput(JSON.stringify({result:'ok'})).setMimeType(ContentService.MimeType.JSON);
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify({error:err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
