//! --- Student Mark-Sheet Program using Conditional Statements ---

// Declare student's personal details and marks in various subjects.
let studentName = "Mr A";
let rollNo = 40;

let accountMarks = 80;
let statisticsMarks = 85;
let englishMarks = 91;
let gujaratiMarks = 75;
let computerMarks = 79;

// Define the maximum possible marks for all subjects combined.
let totalPossibleMarks = 500; // 100 marks for each Subject

// Calculate the total marks the student obtained.
let totalMarksObtained =
  accountMarks + statisticsMarks + englishMarks + gujaratiMarks + computerMarks;

// Calculate the student's overall percentage.
let percentageObtained = (totalMarksObtained / totalPossibleMarks) * 100;

// Determine the student's grade based on their percentage using conditional statements.
let grade = "";
if (percentageObtained >= 90) {
  grade = "A+";
} else if (percentageObtained >= 80) {
  grade = "A";
} else if (percentageObtained >= 70) {
  grade = "B+";
} else if (percentageObtained >= 60) {
  grade = "B";
} else if (percentageObtained >= 50) {
  grade = "C";
} else if (percentageObtained >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}

// Determine the overall pass/fail status based on the assigned grade.
let resultStatus = "";
if (grade === "Fail") {
  resultStatus = "FAIL";
} else {
  resultStatus = "PASS";
}

// Display the comprehensive student marksheet.
console.log("\n--- Student Marksheet ---");
console.log(`Student Name: ${studentName}`);
console.log(`Roll No: ${rollNo}`);
console.log("---------------------------");
console.log(`Account: ${accountMarks}`);
console.log(`Statistics: ${statisticsMarks}`);
console.log(`English: ${englishMarks}`);
console.log(`Gujarati: ${gujaratiMarks}`);
console.log(`Computer: ${computerMarks}`);
console.log("---------------------------");
console.log(`Total Marks Obtained: ${totalMarksObtained}`);
console.log(`Percentage: ${percentageObtained.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Result Status: ${resultStatus}`);
console.log("---------------------------");

// Provide a concluding message based on the result status.
if (resultStatus === "PASS") {
  console.log("Congratulations! You have successfully passed.");
} else {
  console.log("Better luck next time. Work harder!");
}
