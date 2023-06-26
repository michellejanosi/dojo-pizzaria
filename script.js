function pizzaOven(crustType, sauceType, cheeses, toppings) {
  let pizza = {};

  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

// bonus function
function randomPizza() {
  const crustTypes = ["deep dish", "thin crust", "stuffed crust", "pan"];
  const sauceTypes = ["traditional", "marinara", "white sauce", "bbq"];
  const cheeses = ["mozzarella", "feta", "cheddar", "provolone"];
  const toppings = [
    "pepperoni",
    "mushrooms",
    "onions",
    "sausage",
    "black olives",
    "green peppers",
  ];

  // takes an array and returns a random element from that array
  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  // takes an array, shuffles it and then returns a random subarray (cheeses & toppings because you can select more than one item here)
  const getRandomSubarray = (array) => {
    const count = Math.floor(Math.random() * (array.length + 1));
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const pizza = {
    crustType: getRandomElement(crustTypes),
    sauceType: getRandomElement(sauceTypes),
    cheeses: getRandomSubarray(cheeses),
    toppings: getRandomSubarray(toppings),
  };

  return pizza;
}

const myRandomPizza = randomPizza();
console.log(myRandomPizza);


const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

const pizza2 =  pizzaOven("traditional", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

const pizza3 = pizzaOven("stuffed crust", "marinara", ["mozzarella", "provolone"], ["black olives", "italian sausage"]);

const pizza4 = pizzaOven("thin crust", "white sause", ["mozzarella", "provolone", "feta"], ["mushrooms", "black olives", "tomatoes", "onions"])

console.log(pizza3);
