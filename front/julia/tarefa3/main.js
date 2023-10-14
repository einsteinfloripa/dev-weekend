let lastFoodSelected = null;
let lastDrinkSelected = null;
let lastDissertSelected = null;

function toggleSelect(event) {
  event.classList.toggle("selected");
  event.querySelector("#check").classList.toggle("hidden");
}

function handleSelectedFood(event, id) {
  if (id !== "food") return;

  if (lastFoodSelected == event) toggleSelect(event);
  if (lastFoodSelected != null) {
    toggleSelect(lastFoodSelected);
  }

  lastFoodSelected = event;
}

function handleSelectedDrink(event, id) {
  if (id !== "drink") return;

  if (lastDrinkSelected != null) {
    toggleSelect(lastDrinkSelected);
  }

  lastDrinkSelected = event;
}

function handleSelectedDissert(event, id) {
  if (id !== "dissert") return;

  if (lastDissertSelected != null) {
    toggleSelect(lastDissertSelected);
  }

  lastDissertSelected = event;
}

function handleSelect(event) {
  const id = event.id;

  handleSelectedFood(event, id);
  handleSelectedDrink(event, id);
  handleSelectedDissert(event, id);

  toggleSelect(event);
  allowFinishOrder();
}

function allowFinishOrder() {
  const allowedFinishOrder =
    lastFoodSelected != null &&
    lastDrinkSelected != null &&
    lastDissertSelected != null;

  if (allowedFinishOrder) {
    const finishOrderButton = document.querySelector("#finish-order");
    const textContent = finishOrderButton.querySelector("p");

    textContent.textContent = "Fechar pedido";

    finishOrderButton.classList.toggle("disabled");
    finishOrderButton.classList.toggle("enabled");
  }
}

function confirmYourOrder() {
  const allowedFinishOrder =
    lastFoodSelected != null &&
    lastDrinkSelected != null &&
    lastDissertSelected != null;
  if (allowedFinishOrder) {
    document.querySelectorAll(".name-item")[0].textContent = lastFoodSelected.querySelector(".food-title").textContent;
    document.querySelectorAll(".name-item")[1].textContent = lastDrinkSelected.querySelector(".food-title").textContent;
    document.querySelectorAll(".name-item")[2].textContent = lastDissertSelected.querySelector(".food-title").textContent;

    document.querySelectorAll(".price-item")[0].textContent = lastFoodSelected.querySelector(".food-price").textContent.replace("R$ ","");
    document.querySelectorAll(".price-item")[1].textContent = lastDrinkSelected.querySelector(".food-price").textContent.replace("R$ ","");
    document.querySelectorAll(".price-item")[2].textContent = lastDissertSelected.querySelector(".food-price").textContent.replace("R$ ","");

    document.querySelector(".total-price").textContent = (Number(document.querySelectorAll(".price-item")[0].textContent.replace(",","."))
      + Number(document.querySelectorAll(".price-item")[1].textContent.replace(",",".")) + Number(document.querySelectorAll(".price-item")[2].textContent.replace(",","."))).toFixed(2);

    document.querySelector(".total-price").textContent = "R$ " + document.querySelector(".total-price").textContent.replace(".",",")
    
    document.querySelector(".order-screen").classList.remove("hidden");
  }
}

function cancelYourOrder() {
  document.querySelector(".order-screen").classList.add("hidden");
}

function sendOrderMsg() {
  window.location.href = "https://api.whatsapp.com/send?phone=***********&text=*******" 
}