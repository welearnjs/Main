function titleCase(str) {
  return str.split(" ").map(function(w) {
  	return w[0].toUpperCase() + w.slice(1);
  }).join(" ");
}

console.log(titleCase("I'm a little tea pot"));
