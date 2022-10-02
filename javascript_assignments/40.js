function add_number(obj){
  obj.num = num
  return obj
}
function make_album(name, title, num = null){
  obj =  {
    name: name,
    title: title
  }
  if(num){
    obj = add_number(obj, num)
  }
  return obj;
}
console.log("abc", "xyz", 6)
console.log("test", "test_title")
console.log("test2", "test_title2", 10)