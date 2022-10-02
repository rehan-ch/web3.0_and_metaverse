let stageOfLife = 6;
if(stageOfLife < 2){
  console.log("Person is baby");
}
else if(stageOfLife >= 2 && stageOfLife < 4){
  console.log("Person is Toddler");
}
else if(stageOfLife >= 4 && stageOfLife < 13){
  console.log("Person is Kid");
}
else if(stageOfLife >= 13 && stageOfLife < 20){
  console.log("Person is Teenager");
}
else if(stageOfLife >= 20 && stageOfLife < 65){
  console.log("Person is adult");
}
else if(stageOfLife >= 65){
  console.log("Person is an elder");
}