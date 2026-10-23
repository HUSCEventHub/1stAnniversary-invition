/**
 * Google Apps Script endpoint for the HUSC Event Hub invitation RSVP form.
 * Sheet ID supplied by the user. Deploy as a Web app:
 * Execute as: Me | Who has access: Anyone
 */
const SPREADSHEET_ID = '11MNYQTzQ95vj1KDT9YxX8mc2rG3rpH7jLzIm9tXfyrU';
const SHEET_NAME = 'RSVP';

function doPost(e) {
  const params = (e && e.parameter) || {};
  const unit = String(params.unit || '').trim().slice(0, 150);
  const attendance = String(params.attendance || '').trim();
  const source = String(params.source || 'Website thư mời HUSC Event Hub').slice(0, 200);
  if (!unit || !['Tham gia', 'Không tham gia'].includes(attendance)) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,message:'Thiếu hoặc sai dữ liệu'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Thời gian gửi', 'Tên đơn vị', 'Xác nhận tham gia', 'Nguồn']);
    sheet.setFrozenRows(1);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Thời gian gửi', 'Tên đơn vị', 'Xác nhận tham gia', 'Nguồn']);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([new Date(), unit, attendance, source]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
