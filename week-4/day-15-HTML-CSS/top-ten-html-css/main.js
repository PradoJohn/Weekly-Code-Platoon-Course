let fruits = ["Sean  McCarthy", "Joshua  Minchew",
"Anthony  Quinones", "Robert  Toth",
"Joshua  Kim", "Mason  Dykstra",
"Matthew  Lewis", "Derek  Marion",
"Caleb  Davis", "Eric  Mitchell",
"Megan  Buck", "Andrew  Hagstrom",
"John Anthony  Prado", "Halsey  Filbin",
"Kendra  Moore", "Michael  Termotto",
"Anna  Scriven", "Cody  Hardy",
"Matthew  Peterson", "Frank  Gary",
"Phu  Bui", "Bryan  Bartell",
"Claireese  Underwood", "Chad  Martin",
"Aaron  Tanner", "Kate  Fischer"]

var fruit = fruits.length;

const randomFruits = () => {
  
  var num = Math.floor(Math.random() *fruit);
  document.getElementById('output').innerText = fruits[num]
};