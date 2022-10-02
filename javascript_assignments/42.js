let magicians = ["Abdullah", "Rehan", "Asad", "Sajid", "Yasir"];
function show_magicians(magicians){
  magicians.map((magician)=>{
    console.log(magician);
  })
}

function make_great(magicians){
  magicians.push("Ali");
}
make_great(magicians)
show_magicians(magicians);
