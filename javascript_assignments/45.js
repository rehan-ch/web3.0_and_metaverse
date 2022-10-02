function Car (manufacturer, model, color, feature){
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.feature = feature;
}

function store_info(manufacturer, model, color, feature = null){
  const new_car = new Car(manufacturer, model, color, feature)
  console.log(new_car)
}
store_info("Mercedes", "2020", "black")