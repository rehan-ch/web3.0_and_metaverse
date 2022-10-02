let fullName = "Danial Nagori";
console.log("Upper Case", fullName.toUpperCase())
console.log("Lower Case", fullName.toLowerCase())


function toTitleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log("Title Case", toTitleCase(fullName))

