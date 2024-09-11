let counter = 0;
const counterSpan = document.querySelector(".counter");
const yourStatus = document.querySelector(".status");
const resetButton = document.querySelector(".resetButton");

yourStatus.innerHTML = "On the site";
counterSpan.innerHTML = counter;

window.addEventListener("blur", () => {
  console.log("User has clicked outside the window.");
  setStatusOff();
  counter++;
  updateCounter();
});

window.addEventListener("focus", () => {
  setStatusOn();
  console.log("User has clicked back into the window.");
});

function setStatusOn() {
  yourStatus.innerHTML = "On the site";
}

function setStatusOff() {
  yourStatus.innerHTML = "Out of the site";
}

function updateCounter() {
  counterSpan.innerHTML = counter;
}

function reset() {
  counter = 0;
  updateCounter();
}

resetButton.addEventListener("click", reset);
