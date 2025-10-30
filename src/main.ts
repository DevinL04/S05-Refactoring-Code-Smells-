// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

const incrementButtonId = "increment";
const counterLabelId = "counter";
const headingText = "CMPM 121 Project";

function updateUI(counterLabel: HTMLElement) {
  counterLabel.textContent = String(counter);
  document.title = `Clicked ${counter}`;
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

function setup() {
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterLabelId}">0</span></p>
    <button id="${incrementButtonId}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementButton = document.getElementById(incrementButtonId);
  const decrementButton = document.getElementById("dec");
  const resetButton = document.getElementById("reset");
  const counterLabel = document.getElementById(counterLabelId);

  if (!incrementButton || !decrementButton || !resetButton || !counterLabel) {
    return;
  }

  incrementButton.addEventListener("click", () => {
    counter++;
    updateUI(counterLabel);
  });

  decrementButton.addEventListener("click", () => {
    counter--;
    updateUI(counterLabel);
  });

  resetButton.addEventListener("click", () => {
    counter = 0;
    updateUI(counterLabel);
  });
}

function start() {
  setup();
}

start();
