const title = document.querySelector(".price-title");

function handleClick() {
  const isHideTitle = title.className === "hide";
  if (isHideTitle) {
    title.className = "price-title";
  } else {
    title.className = "hide";
  }
}
