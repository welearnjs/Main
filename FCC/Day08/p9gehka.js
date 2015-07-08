function repeat(str, num) {
 return (Math.max(num, 0) || "") && new Array(num + 1).join(str);
}