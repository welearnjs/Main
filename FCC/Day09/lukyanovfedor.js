function truncate(str, num) {
  return str.length >= num ? str.slice(0, num) + "..." : str;
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));