const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

const pizza = document.querySelector(".pizzaType");
const amount = document.querySelector(".pizzaQuantity");
const submitBtn = document.querySelector(".btn");
const result = document.querySelector(".responsiv");

function checkOrderName(orderName) {
  if (
    orderName.toLowerCase() == vegetarian.toLowerCase() ||
    orderName.toLowerCase() == hawaiian.toLowerCase() ||
    orderName.toLowerCase() == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let orderName = pizza.value;
  let orderQuantity = amount.value;

  if (checkOrderName(orderName)) {
    const total = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    result.textContent = `You ordered ${orderQuantity} ${orderName}. Total cost is ${total} SEK. The cooking time will take ${time} minutes.`;
  } else {
    result.textContent = `Sorry, we don't have ${orderName} on the menu. Please choose only Pizzas from our menu!.`;
  }
});
