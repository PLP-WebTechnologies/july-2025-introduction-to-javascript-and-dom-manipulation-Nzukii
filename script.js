// =========================
// Part 1: Variables & Conditionals
// =========================
let greetingMessage = "Hello, welcome to my week 5 assignment!";

// =========================
// Part 2: Custom Functions
// =========================
function greetUser() {
  // DOM Interaction 1: Change text
  document.getElementById("greetings").textContent = greetingMessage;
}

function checkNumber(num) {
  // Conditional
  if (num > 0) {
    return "The number is positive.";
  } else if (num < 0) {
    return "The number is negative.";
  } else {
    return "The number is zero.";
  }
}

// =========================
// Part 3: Loops
// =========================
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange","Grapes"];

function showFruits() {
  let listElement = document.getElementById("fruitList");
  listElement.innerHTML = ""; // clear previous list

  // Loop example 1: for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    listElement.appendChild(li);
  }

  // Loop example 2: for...of loop
  console.log("Logging fruits using for...of:");
  for (let fruit of fruits) {
    console.log(fruit);
  }
}

// =========================
// Part 4: DOM Interactions
// =========================
// DOM Interaction 2: Button click
document.getElementById("greetBtn").addEventListener("click", greetUser);

// DOM Interaction 3: Check number
document.getElementById("checkBtn").addEventListener("click", function() {
  let input = document.getElementById("numberInput").value;
  let result = checkNumber(Number(input));
  document.getElementById("checkResult").textContent = result;
});

// DOM Interaction 4: Show fruit list
document.getElementById("listBtn").addEventListener("click", showFruits);