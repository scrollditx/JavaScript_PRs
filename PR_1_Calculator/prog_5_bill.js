// --- Simple Bill Program using Conditional Statements ---

// Declare item details: name, price, and initial quantity (set to 0, as user input will determine it).
let item1Name = "I-Phone";
let item1Price = 85000;
let item1Quantity = 0;

let item2Name = "Laptop";
let item2Price = 80000;
let item2Quantity = 0;

let item3Name = "PS-4";
let item3Price = 60000;
let item3Quantity = 0;

// For example purposes, pre-set quantities for items.
item1Quantity = 0;
item2Quantity = 2;
item3Quantity = 1;

// Calculate the cost for each item only if its quantity is greater than zero.
let item1Cost = 0;
if (item1Quantity > 0) {
  item1Cost = item1Price * item1Quantity;
}

let item2Cost = 0;
if (item2Quantity > 0) {
  item2Cost = item2Price * item2Quantity;
}

let item3Cost = 0;
if (item3Quantity > 0) {
  item3Cost = item3Price * item3Quantity;
}

// Calculate the subtotal before any discounts or taxes.
let subTotal = item1Cost + item2Cost + item3Cost;

// Apply discounts based on the subtotal using conditional statements.
let discount = 0;
if (subTotal >= 100000) {
  discount = subTotal * 0.1; // 10% discount.
  console.log("Congratulations! You received a 10% discount.");
} else if (subTotal >= 50000) {
  discount = subTotal * 0.05; // 5% discount.
  console.log("You received a 5% discount!");
} else {
  console.log(
    "No discount applied. Shop for more than Rs. 50,000 to get a discount!"
  );
}

// Calculate the total bill after applying any discount.
let totalBill = subTotal - discount;

let taxRate = 0.18; // 18% GST.
let taxAmount = totalBill * taxRate;

// Calculate the final amount the customer needs to pay (total bill + tax).
let finalBill = totalBill + taxAmount;

// Display the bill details.
console.log("\n--- Your Bill ---");

// Conditionally display each item and its cost if purchased (quantity > 0).
if (item1Quantity > 0) {
  console.log(`${item1Name} (x${item1Quantity}): Rs${item1Cost.toFixed(2)}`);
}
if (item2Quantity > 0) {
  console.log(`${item2Name} (x${item2Quantity}): Rs${item2Cost.toFixed(2)}`);
}
if (item3Quantity > 0) {
  console.log(`${item3Name} (x${item3Quantity}): Rs${item3Cost.toFixed(2)}`);
}

console.log("\n------------");
console.log(`Subtotal: Rs${subTotal.toFixed(2)}`);
console.log(`Discount: -Rs${discount.toFixed(2)}`);
console.log(`Total after discount: Rs${totalBill.toFixed(2)}`);
console.log(`Tax (${(taxRate * 100).toFixed(0)}%): +Rs${taxAmount.toFixed(2)}`);
console.log("------------");
console.log(`Final Amount to Pay: Rs${finalBill.toFixed(2)}`);
console.log("------------");

// Display a concise message based on the final bill amount.
if (finalBill > 0) {
  console.log("Thank you for your purchase!");
} else {
  console.log("Your cart is empty. Please add some items.");
}
