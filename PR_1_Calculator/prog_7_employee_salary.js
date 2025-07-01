//! --- Employee Salary Details Program using Conditional Statements ---

// Initialize variables for employee basic information and salary.
let employeeName = "Mr A"; // Name of the employee.
let employeeId = 5; // Unique Identity of the employee.
let basicSalary = 45000; // The base salary of the employee.

// Initialize variables for allowances and deductions.
let hraPercentage = 0; // House Rent Allowance percentage.
let daPercentage = 0; // Dearness Allowance percentage.
let pfPercentage = 0; // Provident Fund deduction percentage.
let professionalTax = 0; // Fixed professional tax deduction.

/* Apply conditional logic to set HRA, DA, PF percentages, and Professional Tax based on the 'basicSalary' levels. */
if (basicSalary >= 50000) {
  hraPercentage = 0.2; // 20% HRA.
  daPercentage = 0.15; // 15% DA.
  pfPercentage = 0.12; // 12% PF.
  professionalTax = 200; // Fixed professional tax for this level.
} else if (basicSalary >= 25000) {
  hraPercentage = 0.15; // 15% HRA.
  daPercentage = 0.1; // 10% DA.
  pfPercentage = 0.1; // 10% PF.
  professionalTax = 150; // Fixed professional tax for this level.
} else {
  hraPercentage = 0.1; // 10% HRA.
  daPercentage = 0.05; // 5% DA.
  pfPercentage = 0.08; // 8% PF.
  professionalTax = 0; // No professional tax for this level.
}

// Calculate HRA and DA amounts based on the basic salary and determined percentages.
let hra = basicSalary * hraPercentage;
let da = basicSalary * daPercentage;

// Calculate the Gross Salary (Basic + HRA + DA).
let grossSalary = basicSalary + hra + da;

// Calculate PF deduction and the total deductions.
let pf = basicSalary * pfPercentage;
let totalDeduction = pf + professionalTax;

// Calculate the Net Salary (Gross Salary - Total Deductions).
let netSalary = grossSalary - totalDeduction;

// Display the employee's salary details.
console.log("\n--- Employee Salary Details ---");
console.log(`Employee Name: ${employeeName}`);
console.log(`Employee Id: ${employeeId}`);
console.log("----------------------------------");
console.log(`Basic Salary: Rs ${basicSalary.toFixed(2)}`);
console.log(`HRA (${(hraPercentage * 100).toFixed(2)}%): Rs ${hra.toFixed(2)}`);
console.log(`DA (${(daPercentage * 100).toFixed(2)}%): Rs ${da.toFixed(2)}`);
console.log("----------------------------------");
console.log(`Gross Salary: Rs ${grossSalary.toFixed(2)}`);
console.log("----------------------------------");
console.log(`PF (${(pfPercentage * 100).toFixed(2)}%): Rs ${pf.toFixed(2)}`);

// Display Professional Tax, showing 0.00 if not applicable.
if (professionalTax > 0) {
  console.log(`Professional Tax: Rs ${professionalTax.toFixed(2)}`);
} else {
  console.log(`Professional Tax: Rs 0.00 (Not Applicable)`);
}

console.log(`Total Deduction: Rs ${totalDeduction.toFixed(2)}`);
console.log("----------------------------------");
console.log(`Net Salary: Rs ${netSalary.toFixed(2)}`);
console.log("----------------------------------");

// Provide a conditional message based on the calculated Net Salary.
if (netSalary < 20000) {
  console.log("Note: This salary might be lower than average for the role.");
} else if (netSalary >= 50000) {
  console.log("Great! Your salary is competitive.");
} else {
  console.log("Salary appears to be standard.");
}
