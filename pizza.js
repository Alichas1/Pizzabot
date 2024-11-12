// setting menu
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//greeting customer
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}!`
);

//ask user which pizza to buy and how many
const orderName = prompt(
  "Enter the name of the pizza you want to order today!."
);
const orderquantity = prompt(`How many of ${orderName} do you want?`);

//order only from the menu
function checkOrderName(order) {
  if (order == hawaiian || order == vegetarian || order == pepperoni) {
    return true;
  } else {
    return false;
  }
}
//total cost of the order
function totalCost(quantity) {
  return quantity * pizzaPrice;
}
//how long it takes to cook depends on the amount of pizzas
function cookingTime(quantity) {
  if (quantity >= 1 && quantity <= 2) {
    return 10;
  } else if (quantity >= 3 && quantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

if (checkOrderName(orderName)) {
  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
      orderquantity
    )} kr.The pizzas will take ${cookingTime(orderquantity)} minutes.`
  );
} else {
  alert("Sorry, we don't have that pizza. order only from our menu ");
}
