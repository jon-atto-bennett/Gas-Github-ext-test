function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Function One...', functionName: 'functionOne'},
    {name: 'Function Two...', functionName: 'functionTwo'}
  ];
  spreadsheet.addMenu('Functions', menuItems);
}

function functionOne() {
  Browser.msgBox('Hello World');
}

function functionTwo () {
  var name = Browser.inputBox('What\'s your name?');
  Browser.msgBox('Hello there ' + name);
}
