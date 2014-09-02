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
 
  // MATH
  document.write("MATH<br/><br/>");
  
  // Show some math constants
  display( "PI=" + Math.PI );
  display( "Square root of 2=" + Math.SQRT2 );
  
  // Some trigonometry
  var radians, degrees=60;
  var degreesToRadians=Math.PI/180;
	radians = degrees*degreesToRadians;
  display ( "Cosine(" + degrees + ")=" + Math.cos(radians) );

  // Rounding floating point numbers
  var floatX = "3.141";
  display ( floatX + " when rounded is " + Math.round(floatX) );
  
  // Generating a random number between one and a hundred (Math.Random always yields a number between 0 and 1)
  display( "Here's a random number : " + Math.random() * 100);
  
  
  
}