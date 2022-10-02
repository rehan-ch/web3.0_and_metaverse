let names = ["Asad", "Abdullah", "Sajid"];
console.log("Hi, " + names[0] + " It’s always a pleasure to have you with us");
console.log("Hi, " + names[1] + " Let us gather and enjoy the meals together.");
console.log("Hi, " + names[2] + " We are gladly inviting you to join us on Dinner");

console.log(names[0] + " is not comming. \n");
names[0] = "Yasir";
console.log("Hi, " + names[0] + " It’s always a pleasure to have you with us");
console.log("Hi, " + names[1] + " Let us gather and enjoy the meals together.");
console.log("Hi, " + names[2] + " We are gladly inviting you to join us on Dinner");

console.log("\nWe Found a bigger dinner table \n");
names = ["Hamza", "Asad", "Farhan", "Abdullah", "Sajid"];
names.push("Yaseen");
console.log("Hi, " + names[0] + " It’s always a pleasure to have you with us");
console.log("Hi, " + names[1] + " Let us gather and enjoy the meals together.");
console.log("Hi, " + names[2] + " We are gladly inviting you to join us on Dinner");
console.log("Hi, " + names[3] + " Plese join us for dinner.");
console.log("Hi, " + names[4] + " Lets have a Dinner.");
console.log("Hi, " + names[5] + " Welcome on Dinner");

console.log("\ncan invite only two people for dinner \n");
console.log(names.pop() + " sorry! can’t invit you.");
console.log(names.pop() + " sorry! can’t invit you.");
console.log(names.pop() + " sorry! can’t invit you.");
console.log(names.pop() + " Please Join us.");
console.log(names.pop() + " Please Join us.");