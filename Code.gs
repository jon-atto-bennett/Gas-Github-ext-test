//this is a branch

function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Function One...', functionName: 'functionOne'},
    {name: 'Function Two...', functionName: 'functionTwo'}
  ];
  spreadsheet.addMenu('Functions', menuItems);
}

function functionOne() {
 var greeting = 'Hello there ';
  Logger.log(greeting);
 var name = functionTwo()
 Browser.msgBox(greeting + name)
}

function functionTwo () {
  var name = Browser.inputBox('What\'s your name?');
  Logger.log(name);
  return name;
}
