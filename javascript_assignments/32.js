let current_users = ["admin", "Abdullah", "Rehan", "Asad", "Sajid", "Yasir"];
let new_users = ["ali", "abdullah", "Ahmad"]
new_users.map((user)=>{
  const result = current_users.find(element => {return element.toLowerCase() === user.toLowerCase();})
  if (result){
    console.log("person will need to enter a new username");
  }else{
    console.log("pusername is available.");
  }
})