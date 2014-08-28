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
  document.write("STRING FUNCTIONS<br/>");

  // The '\n' below is a new line code
  var line1="Mary had a little lamb\n";
  var line2="Whose fleece was white as snow\n";
  var strArray = ["Mary", "had", "a", "little", "lamb"];
  
  // What is the nth (1st) character
  display ("The second character contains : " + line1.charAt(1));
  
  // Does a string exist inside another string
  display ("Is the word 'fleece' in line2? : " + line2.contains("fleece") );

  // WHERE abouts then?
  display ("Fleece appears at position : " + line2.indexOf("fleece") );

	// Extract a part of a string
	var newString = line2.slice(6, 12);
  display("New string is : " + newString);
  
  // Convert a string to upper case
  display ( "Upper Case: " + line1.toUpperCase());
  
}