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

  var flowers = ["Daisy", "Rose"];
  var i;
  
  // 'Push' 2 new flowers onto the flowers array
  flowers.push("Daffodil", "Weed");
  
  document.write("We're starting with ... ");
  for(i=0; i<flowers.length; i++) 
    document.write(flowers[i] + " ");  
  // Remove the last array element
  popped = flowers.pop();
  // Remove the first array element
  shifted = flowers.shift();
  document.write("<br/><br/>Popped: " + popped + "<br/>");
  document.write("Shifted: " + shifted + "<br/>");
  document.write("<br/>And we're left with ...  ");
  for(i=0; i<flowers.length; i++) 
    document.write(flowers[i] + " ");
  
}

