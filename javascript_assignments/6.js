let fullName = "         Muhammad Rehan \t Chheena  \n";
console.log(fullName);
function strip(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
console.log(strip(fullName));