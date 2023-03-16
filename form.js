const formButton = document.getElementById("form-button");
const popupButton = document.getElementById("popup-button");
const popup = document.getElementById("popup");

formButton.addEventListener("click", () => {
  popup.classList.add("container--active");
});

popupButton.addEventListener("click", () => {
  popup.classList.remove("container--active");
});
