let foodSelected = null;
let drinkSelected = null;
let dissertSelected = null;

function handleSelect(event) {
  const id = event.id;

  if (id === "food") {
    foodSelected?.classList.toggle("selected");
    foodSelected?.querySelector("#check").classList.toggle("hidden");

    if (foodSelected === event) {
      foodSelected = null;
    } else {
      event.classList.toggle("selected");
      event.querySelector("#check").classList.toggle("hidden");
      foodSelected = event;
    }
  }

  if (id === "drink") {
    drinkSelected?.classList.toggle("selected");
    drinkSelected?.querySelector("#check").classList.toggle("hidden");

    if (drinkSelected === event) {
      drinkSelected = null;
    } else {
      event.classList.toggle("selected");
      event.querySelector("#check").classList.toggle("hidden");
      drinkSelected = event;
    }
  }

  if (id === "dissert") {
    dissertSelected?.classList.toggle("selected");
    dissertSelected?.querySelector("#check").classList.toggle("hidden");

    if (dissertSelected === event) {
      dissertSelected = null;
    } else {
      event.classList.toggle("selected");
      event.querySelector("#check").classList.toggle("hidden");
      dissertSelected = event;
    }
  }

  allowFinishOrder();
}

function allowFinishOrder() {
  const isAllowedToFinish =
    foodSelected !== null && drinkSelected !== null && dissertSelected !== null;

  if (isAllowedToFinish) {
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

function finishOrder() {
  const foodPrice = foodSelected
    .querySelector(".food-price")
    .textContent.split(" ")[1]
    .replace(",", ".");

  const drinkPrice = drinkSelected
    .querySelector(".food-price")
    .textContent.split(" ")[1]
    .replace(",", ".");

  const dissertPrice = dissertSelected
    .querySelector(".food-price")
    .textContent.split(" ")[1]
    .replace(",", ".");

  const totalPrice =
    Number(foodPrice) + Number(drinkPrice) + Number(dissertPrice);

  alert(`Total: R$${totalPrice.toFixed(2)}`);
}
