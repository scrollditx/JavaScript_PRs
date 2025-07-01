//! --- Simple Interest Program using Conditional Statements ---

let principalAmount = 50000;      // The initial amount.
let annualInterest = 7.5;         // The annual interest rate (7.5%).
let timeInYears = 3;              // The time period in years.

// Check input validation using conditional statements.
// Set 'isValidInput' to false if any input is zero or negative.
let isValidInput = true;
if (principalAmount <= 0) {
  console.log("Error: Principal amount must be greater than zero.");
  isValidInput = false;
}
if (annualInterest <= 0) {
  console.log("Error: Interest rate must be greater than zero.");
  isValidInput = false;
}
if (timeInYears <= 0) {
  console.log("Error: Time period must be greater than zero.");
  isValidInput = false;
}

let simpleInterest = 0;
let totalAmount = 0;

// Proceed with calculations and output only if all inputs are valid.
if (isValidInput) {
  // Calculate Simple Interest using the formula: P * R * N / 100.
  simpleInterest = (principalAmount * annualInterest * timeInYears) / 100;

  // Calculate the total amount (Principal + Simple Interest).
  totalAmount = principalAmount + simpleInterest;

  // Display the calculation.
  console.log("\n--- Simple Interest Calculation ---");
  console.log(`Principal Amount: Rs ${principalAmount.toFixed(2)}`);
  console.log(`Annual Interest Rate: ${annualInterest.toFixed(2)}%`);
  console.log(`Time Period: ${timeInYears} years`);
  console.log("--------------------------------------");
  console.log(`Simple Interest: Rs ${simpleInterest.toFixed(2)}`);
  console.log(`Total Amount: Rs ${totalAmount.toFixed(2)}`);
  console.log("--------------------------------------");

  // Provide a conditional message based on the calculated simple interest.
  if (simpleInterest > 10000) {
    console.log("Great! You have earned a significant amount of interest.");
  } else if (simpleInterest > 1000) {
    console.log("Good return on your investment.");
  } else {
    console.log(
      "Consider investing for a longer period or at a higher rate for more return."
    );
  }
} else {
  // If inputs are invalid, inform the user that the calculation was terminated.
  console.log("\nCalculation terminated due to invalid input.");
}