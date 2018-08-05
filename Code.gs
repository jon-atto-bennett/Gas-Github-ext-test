function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Function One...', functionName: 'functionOne'},
    {name: 'Function Two...', functionName: 'functionTwo'}
  ];
  spreadsheet.addMenu('Functions', menuItems);
}
