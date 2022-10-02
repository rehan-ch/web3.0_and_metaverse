let magicians = ["Abdullah", "Rehan", "Asad", "Sajid", "Yasir"];
function show_magicians(magicians){
  magicians.map((magician)=>{
    console.log(magician);
  })
}

function make_great(magicians){
  magicians.push("Ali");
}

let newMagicians = [...magicians]
make_great(newMagicians)
console.log("Original Array")
show_magicians(magicians);

console.log("\nCopy Array");
show_magicians(newMagicians);
