import { foodSelected, dissertSelected, drinkSelected } from "./main.js";

export function allowFinishOrder(foodSelected, drinkSelected, dissertSelected) {
  const allowedFinishOrder =
    foodSelected != null && drinkSelected != null && dissertSelected != null;

  if (allowedFinishOrder) {
    const finishOrderButton = document.querySelector("#finish-order");
    const textContent = finishOrderButton.querySelector("p");

    textContent.textContent = "Fechar pedido";

    finishOrderButton.classList.remove("disabled");
    finishOrderButton.classList.add("enabled");
  } else {
    const finishOrderButton = document.querySelector("#finish-order");
    const textContent = finishOrderButton.querySelector("p");

    textContent.textContent = "Selecione os 3 itens para fechar o pedido";

    finishOrderButton.classList.remove("enabled");
    finishOrderButton.classList.add("disabled");
  }
}

function convertToNumber(string) {
  const hasVirgula = string.includes(",");

  if (hasVirgula) {
    const number = string.replace(",", ".");
    return Number(number);
  }

  return Number(string);
}

export function calculatePrice() {
  const foodPriceClass = ".food-price";

  const foodPrice = foodSelected
    .querySelector(foodPriceClass)
    .textContent.split(" ")[1];
  const drinkPrice = drinkSelected
    .querySelector(foodPriceClass)
    .textContent.split(" ")[1];
  const dissertPrice = dissertSelected
    .querySelector(foodPriceClass)
    .textContent.split(" ")[1];

  const totalPrice =
    convertToNumber(foodPrice) +
    convertToNumber(drinkPrice) +
    convertToNumber(dissertPrice);

  return totalPrice;
}

function finishOrder() {
  const totalPrice = calculatePrice();

  alert(`Total: R$ ${totalPrice.toFixed(2)}`);
}

window.finishOrder = finishOrder;
