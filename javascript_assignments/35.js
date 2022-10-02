let birds = ["sperow", "crow", "Eagle"];
for (let i = 0; i < birds.length; i++) {
  console.log(birds[i]);
}
for (let i = 0; i < birds.length; i++) {
  if(birds[i] == "sperow"){
    console.log(birds[i] + " is a cute bird!");
  }
  else if(birds[i] == "crow"){
    console.log(birds[i] + " its black.");
  }
  else{
    console.log(birds[i] + " can fly high!");
  }
}
console.log("all these birds can fly")