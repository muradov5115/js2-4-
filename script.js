let counterValue = 0;

let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let sendBtn = document.getElementById("sendBtn");
let numberInput = document.getElementById("numberInput");
let colorPicker = document.getElementById("colorPicker");

// Sonni yangilash funksiyasi
function updateCounter() {
  counter.textContent = counterValue;
}

// + bosilganda
increaseBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

// - bosilganda
decreaseBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

// Inputdan son kiritish
sendBtn.addEventListener("click", () => {
  let val = parseInt(numberInput.value); {
    counterValue = val;
    updateCounter();
  }
});

// Rangni o‘zgartirish
colorPicker.addEventListener("input", () => {
  counter.style.color = colorPicker.value;
});

// Dastlabki qiymat
updateCounter();