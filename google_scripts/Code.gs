const PARENT_FOLDER_ID = "11JA-ERJshDZnN7TPnMLPk_UXxn8A1CN-it4FTrJVQhEY9aoBvMy4oPlfYhBwQrGKKKCXmEQm";
const GOOGLE_FORM_ID = "1rFIlAD_4ZaNavkuwmNDi0S2nTu5swyWrh7xTaYbruU8";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1oBknWFxWzbKpP2qfPzm9kjY0uc8WsVyIWyrWZFCw1BI/edit#gid=0";

function onFormSubmit(event) {

  // connect to Google Form
  var form = FormApp.openById(GOOGLE_FORM_ID);
  var formResponses = form.getResponses();

  var formCount = formResponses.length;
  if (formCount === 0) return 0;

  var itemResponses = formResponses[formCount - 1].getItemResponses(); // gets latest response
  subFolderUrl = CreateFolder(form, itemResponses);
  AddToSheet(itemResponses, subFolderUrl);
}


function AddToSheet(itemResponses, subFolderUrl) {
  application_record = itemResponses.map((itemResponse) => itemResponse.getResponse());
  var ss = SpreadsheetApp.openByUrl(GOOGLE_SHEET_URL);
  var dataSheet = ss.getSheetByName("Sheet1");
  dataSheet.appendRow([application_record[0], application_record[1], application_record[2], application_record[3], subFolderUrl]);
}


function CreateFolder(form, itemResponses) {
  files = itemResponses
    .filter((itemResponse) => itemResponse.getItem().getType().toString() === "FILE_UPLOAD")
    .map((itemResponse) => itemResponse.getResponse());

  const parentFolder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const firstName = itemResponses[0].getResponse();
  const surname = itemResponses[1].getResponse();
  const subFolderName = firstName + "_" + surname + "_" + form.getId();
  const subFolder = parentFolder.createFolder(subFolderName);
  const subFolderUrl = subFolder.getUrl();

  files.reduce((a, b) => [...a, ...b], []);   // The response includes the file ids in an array that we can flatten
  files.forEach((fileId) => {
    DriveApp.getFileById(fileId).moveTo(subFolder);
  });

  return subFolderUrl;
}