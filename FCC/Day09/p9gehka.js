function truncate (str, num)  {
 return str.slice(0, num) + (str.slice(num) && "...");
}