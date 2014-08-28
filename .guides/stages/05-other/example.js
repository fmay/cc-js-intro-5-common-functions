/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/

function display(message) {
  document.write("<br/>" + message);
}

// Don't worry about this function !!!
function htmlEncode(str) {
    return str.replace(/[&<>"']/g, function($0) {
        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
    });
}

function play() {
 
  // API EXAMPLES
  display("API EXAMPLES");  

	// WINDOW
  display("<br/>WINDOW");

  // Browser information
  var brWidth = window.innerWidth;
  var brHeight = window.innerHeight;
  display("Browser internal dimensions : Width=" + brWidth + " Height=" + brHeight );
  
  // Get the current URL
  display( "Current URL: " + window.location);
  display("");
  display("Title: " + document.title);
  display("");
  
  var htmlElement = document.getElementById("myDiv");
  display("--------------------------");
  display("HTML of 'myDiv'..." + htmlElement.innerHTML);
  display("End of myDiv HTML");
  display("--------------------------");

  display("<br/>Or in raw format ...");
	display(htmlEncode(htmlElement.innerHTML));
}
