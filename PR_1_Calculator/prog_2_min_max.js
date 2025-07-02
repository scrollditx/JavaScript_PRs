let num_1 = 10, // Change num_1, num_2, num_3
  num_2 = 15,
  num_3 = 5;

console.log("--- Welcome to Minimum Maximum Finder ---");

// 1. Basic Comparison
console.log("\n--- Scenario-1: Basic Comparison for Maximum ---");

if (num_1 >= num_2) {
  console.log(`'${num_1}' is greater or equal to '${num_2}'`);
} else {
  console.log(`'${num_2}' is greater or equal to '${num_1}'`);
}

console.log("\n--- Scenario-2: Basic Comparison for Minimum ---");

if (num_1 <= num_2) {
  console.log(`'${num_1}' is lesser or equal to '${num_2}'`);
} else {
  console.log(`'${num_2}' is lesser or equal to '${num_1}'`);
}

// 2. Comparing '3' numbers
console.log("\n--- Scenario-3: Comparing '3'  Numbers for Maximum---");

if (num_1 >= num_2 && num_1 >= num_3) {
  console.log(`'${num_1}' is greater or equal to '${num_2}' and '${num_3}'`);
} else if (num_2 >= num_1 && num_2 >= num_3) {
  console.log(`'${num_2}' is greater or equal to '${num_1}' and '${num_3}'`);
} else {
  console.log(`'${num_3}' is greater or equal to '${num_1}' and '${num_2}'`);
}

console.log("\n--- Scenario-3: Comparing '3'  Numbers for Minimum---");

if (num_1 <= num_2 && num_1 <= num_3) {
  console.log(`'${num_1}' is lesser or equal to '${num_2}' and '${num_3}'`);
} else if (num_2 <= num_1 && num_2 <= num_3) {
  console.log(`'${num_2}' is lesser or equal to '${num_1}' and '${num_3}'`);
} else {
  console.log(`'${num_3}' is lesser or equal to '${num_1}' and '${num_2}'`);
}
