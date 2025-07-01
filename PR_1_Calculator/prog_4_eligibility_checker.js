let age = 18; // Try other age like 21, 18, 10, 16.

console.log("\n--- Welcome to Vote Checker ---");

// 1. Scenario-1: Voting Eligibility Checker.

if (age >= 18 && age <= 65) {
  console.log(`Your age is '${age}' you are eligible to vote.`);
} else {
  console.log(`Your age is '${age}' you are not eligible to vote.`);
}

// 2. Scenario-2: Driving License Eligibility Checker.

console.log("\n--- Welcome to Driving License Eligibility Checker ---");

if (age >= 16 && age <= 18) {
  console.log(
    `Your age is '${age}' you are eligible to drive Motorcycles (up to 50cc)`
  );
} else if (age >= 18 && age <= 20) {
  console.log(
    `Your age is '${age}' you are eligible to drive Non-transport vehicles (e.g., cars, two-wheelers above 50cc)`
  );
} else {
  console.log(
    `Your age is '${age}' you are eligible to drive Transport vehicles (e.g., trucks, buses)`
  );
}
