const output = document.getElementById("output");

function print(value) {
  output.innerHTML += `<p>${value}</p>`;
}

// Test 1: basic if/else
let hour = 14;
if (hour < 12) {
  print("Good morning!");
} else if (hour < 18) {
  print("Good afternoon!");
} else {
  print("Good evening!");
}

// Test 2: ternary
let age = 20;
let status = age >= 18 ? "adult" : "minor";
print(`You are an ${status}.`);
