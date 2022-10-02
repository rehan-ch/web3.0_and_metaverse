function describe_city(city, countary = "Pakistan"){
  return city + ", " + countary;
}
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("Beijing", "China"));