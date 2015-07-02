function factorialize(num) {
  if (num - 1 > 0) {
  	return num * factorialize(num-1);
  }

  return num === 0 ? 1 : num;
}

console.log(factorialize(5));
