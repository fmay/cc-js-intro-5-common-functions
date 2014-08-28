/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/

function display(message) {
  document.write("<br/>" + message);
}

function play() {
 
  // STRING
  document.write("JUST A FEW DATE FUNCTIONS<br/>");

  // A date variable or two
  var myDate = new Date();
  display("Current Date and Time : " + myDate);
  var specificDate = new Date(2012, 12, 25);
  display("Hard-coded date : " + specificDate);

  // Get the day of the week
  display ("Christmas day 2012 fell on weekday number "  + specificDate.getDay());
  display ("Year part of the date : " + specificDate.getFullYear());
  
  // Get the date in GMT
  display ("Current date/time GMT is " + myDate.toGMTString());
  
  
  
}