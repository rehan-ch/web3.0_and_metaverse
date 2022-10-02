let users = ["admin", "Abdullah", "Rehan", "Asad", "Sajid", "Yasir"];
users.map((user)=>{
  if(user == 'admin'){
    greetings = "Hello admin, would you like to see a status report?";
  }else{
    greetings = "Hello "+ user+", thank you for logging in again.";
  }
  console.log(greetings);
})
users = []
if(users.length < 1){
  console.log("We need to find some users!")
}