function getConcoction() {
  var ingredients = [
    "Watermelon enhanced water",
    "Tropical mango enhanced water",
    "Strawberry kiwi enhanced water",
    "Bluebuerry pomegranate acai enhanced water",
    "Iced tea",
    "Gatorade",
    "Pepsi",
    "Lemonade",
    "Dr. Pepper",
    "Tropicana Twister",
    "Brisk",
    "Root beer",
    "Mountain Dew",
    "Hot chocolate",
    "Coffee",
    "Tea",
    "Milk",
    "Chocolate milk",
    "Apple juice",
    "Cranberry juice",
    "Grape juice",
    "Orange juice",
    "Carbonated water"
  ];
  
  var embellishments = [
    "Milk",
    "Sugar",
    "Creamer",
    "Lemon",
    "Lime"
  ];
  
  var ingredient1 = 0;
  var ingredient2 = 0;
  
  //if the two ingredients are the same, get new ones
  while (ingredient1 === ingredient2) {
    ingredient1 = Math.floor(Math.random() * ingredients.length);
    ingredient2 = Math.floor(Math.random() * ingredients.length);
  }
  
  var concoction = ingredients[ingredient1] + " + " + ingredients[ingredient2];
  
  //should there be a third ingredient? 1 in 3 chance
  if (Math.floor(Math.random() * 3) === 0) {
    var ingredient3 = 0;
    do {
      ingredient3 = Math.floor(Math.random() * ingredients.length);
    } while (ingredient3 === ingredient1 || ingredient3 === ingredient2);
    concoction += " + " + ingredients[ingredient3];
  }
  
  //should there be an embellishment? 1 in 3 chance
  if (Math.floor(Math.random() * 3) === 0) {
    var embellishment = Math.floor(Math.random() * embellishments.length);
    concoction += " with some " + embellishments[embellishment];
  }

  document.getElementById("concoction").innerHTML = concoction;
}