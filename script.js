// Get the elements from the HTML document
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");

// Initialize some variables to store the input and output values
let input = "";
let output = 0;
let operator = "";

// Add an event listener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = this.getAttribute("value");
    // Check if the value is a number or a decimal
    if (!isNaN(value) || value === ".") {
      // Append the value to the input string
      input += value;
      screen.textContent = input;
    }
    // Check if the value is an operator
    else if (value === "+" || value === "-" || value === "*" || value === "/") {
      // Check if there is already an operator in the input
      if (operator) {
        // Perform the calculation of previous equation
        output = calculate(output, operator, parseFloat(input));
        screen.textContent = output;
      } else {
        output = parseFloat(input);
      }
      // Set the operator to the value of the button
      operator = value;
      input = "";
    }
  });
});

// Add an event listener to the reset button
reset.addEventListener("click", function () {
  input = "";
  output = "";
  operator = "";
  screen.textContent = "0";
});

// Add an event listener to the delete button
del.addEventListener("click", function () {
  // Remove the last character from the input
  input = input.slice(0, -1);
  screen.textContent = input || "0";
});

// Add an event listener to the equal button
equal.addEventListener("click", function () {
  // Check if there is an operator and an input
  if (operator && input) {
    output = calculate(output, operator, parseFloat(input));
    screen.textContent = output;
    input = "";
    operator = "";
  }
});

// perform a calculation based on an operator and two inputs
function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
}
