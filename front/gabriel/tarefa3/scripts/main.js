import { allowFinishOrder } from "./order.js";

export let foodSelected = null;
export let drinkSelected = null;
export let dissertSelected = null;

function toggleSelect(event) {
  event.classList.toggle("selected");
  event.querySelector("#check").classList.toggle("hidden");
}

function handleSelectedFood(event, id) {
  if (id !== "food") return;

  toggleSelect(event);

  if (foodSelected !== event && foodSelected !== null) {
    toggleSelect(foodSelected);
  }

  if (foodSelected === event) {
    foodSelected = null;
  } else {
    foodSelected = event;
  }
}

function handleSelectedDrink(event, id) {
  if (id !== "drink") return;

  toggleSelect(event);

  if (drinkSelected !== event && drinkSelected !== null) {
    toggleSelect(drinkSelected);
  }

  if (drinkSelected === event) {
    drinkSelected = null;
  } else {
    drinkSelected = event;
  }
}

function handleSelectedDissert(event, id) {
  if (id !== "dissert") return;

  toggleSelect(event);

  if (dissertSelected !== event && dissertSelected !== null) {
    toggleSelect(dissertSelected);
  }

  if (dissertSelected === event) {
    dissertSelected = null;
  } else {
    dissertSelected = event;
  }
}

function handleSelect(event) {
  const id = event.id;

  handleSelectedFood(event, id);
  handleSelectedDrink(event, id);
  handleSelectedDissert(event, id);

  allowFinishOrder(foodSelected, drinkSelected, dissertSelected);
}

window.handleSelect = handleSelect;
