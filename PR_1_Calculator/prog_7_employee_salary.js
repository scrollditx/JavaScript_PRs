//! --- Employee Salary Details Program using Conditional Statements ---

// Initialize variables for employee basic information and salary.
let employeeName = "Mr A"; // Name of the employee.
let employeeId = 5; // Unique Identity of the employee.
let basicSalary = 45000; // The base salary of the employee.
let experience = 3; // Experience of an employee.

// Initialize variables for allowances and deductions.
let hraPercentage = 0; // House Rent Allowance percentage.
let daPercentage = 0; // Dearness Allowance percentage.
let maPercentage = 0; // Medical Allowance percentage.
let taPercentage = 0; // Traveling Allowance percentage.
let bonusPercentage = 0; // Bonus of an employee.
let pfPercentage = 0; // Provident Fund deduction percentage.
let professionalTax = 0; // Fixed professional tax deduction.

/* Apply conditional logic to set HRA, DA, PF percentages, and Professional Tax based on the 'basicSalary' levels. */
if (basicSalary >= 50000 && experience >= 5) {
  hraPercentage = 0.2; // 20% HRA.
  daPercentage = 0.15; // 15% DA.
  maPercentage = 0.13; // 13% MA.
  taPercentage = 0.08; // 8% TA
  bonusPercentage = 0.15; // 15% Bonus
  pfPercentage = 0.12; // 12% PF.
  professionalTax = 200; // Fixed professional tax for this level.
} else if (basicSalary >= 30000 && experience >= 3) {
  hraPercentage = 0.15; // 15% HRA.
  daPercentage = 0.1; // 10% DA.
  maPercentage = 0.11; // 11% MA.
  taPercentage = 0.09; // 9% TA.
  bonusPercentage = 0.1; // 10% Bonus
  pfPercentage = 0.1; // 10% PF.
  professionalTax = 150; // Fixed professional tax for this level.
} else if (basicSalary >= 20000 && experience >= 1.5) {
  hraPercentage = 0.1; // 15% HRA.
  daPercentage = 0.05; // 5% DA.
  maPercentage = 0.04; // 4% MA.
  taPercentage = 0.07; // 7% TA.
  bonusPercentage = 0.08; // 8% Bonus
  pfPercentage = 0.08; // 8% PF.
  professionalTax = 100; // Fixed professional tax for this level.
} else {
  hraPercentage = 0.1; // 10% HRA.
  daPercentage = 0.05; // 5% DA.
  maPercentage = 0.03; // 3% MA.
  taPercentage = 0.06; // 6% TA.
  bonusPercentage = 0.0; // No Bonus
  pfPercentage = 0.05; // 5% PF.
  professionalTax = 0; // No professional tax for this level.
}

// Calculate HRA and DA amounts based on the basic salary and determined percentages.
let hra = basicSalary * hraPercentage;
let da = basicSalary * daPercentage;
let ta = basicSalary * taPercentage;
let ma = basicSalary * maPercentage;
let bonus = basicSalary * bonusPercentage;

// Calculate the Gross Salary (Basic + HRA + DA + MA + TA + BONUS).
let grossSalary = basicSalary + hra + da + ma + ta + bonus;

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
console.log(`MA (${(maPercentage * 100).toFixed(2)}%): Rs ${ma.toFixed(2)}`);
console.log(`TA (${(taPercentage * 100).toFixed(2)}%): Rs ${ta.toFixed(2)}`);
console.log(
  `BONUS (${(bonusPercentage * 100).toFixed(2)}%): Rs ${bonus.toFixed(2)}`
);
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
