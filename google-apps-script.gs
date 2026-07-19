/**
 * Nova — Contact form → Google Sheet
 * ----------------------------------
 * Paste this into the Apps Script editor attached to your Google Sheet
 * (Sheet → Extensions → Apps Script), then Deploy as a Web App.
 * Full instructions: see GOOGLE_SHEET_SETUP.md
 *
 * The website posts these fields: name, email, service, message, page,
 * submittedAt. Add/remove columns below to match your form.
 */

// Name of the tab (sheet) rows are written to. It's created if missing.
var SHEET_NAME = 'Leads';

// The order of columns written to the sheet (and the header row).
var COLUMNS = ['submittedAt', 'name', 'email', 'service', 'message', 'page'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid two submissions writing at once
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Write a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
    }

    var params = (e && e.parameter) ? e.parameter : {};
    var row = COLUMNS.map(function (key) {
      if (key === 'submittedAt') {
        return params.submittedAt || new Date().toISOString();
      }
      return params[key] || '';
    });
    sheet.appendRow(row);

    return json({ result: 'success' });
  } catch (err) {
    return json({ result: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to confirm it's deployed.
function doGet() {
  return json({ result: 'ok', message: 'Nova contact endpoint is live.' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
