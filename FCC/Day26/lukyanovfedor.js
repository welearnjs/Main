// this solution does not work in node
function convert(str) {
  var div = document.createElement('div'),
  		text = document.createTextNode(str);

  div.appendChild(text);

  return div.innerHTML;
}

console.log(convert('Dolce & Gabbana'));