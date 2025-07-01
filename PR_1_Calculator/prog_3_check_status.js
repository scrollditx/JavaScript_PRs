//! User Account Status

let accountStatus = "active"; // in-active, suspended, pending_verification, verified

console.log(
  `\n--- User Account Status Check for Status: '${accountStatus}' ---`
);

if (accountStatus === "active") {
  console.log("Your account is active. You can access all features.");
} else if (accountStatus === "in-active") {
  console.log("Your account is in-active. Please log in to re-activate");
} else if (accountStatus === "suspended") {
  console.log(
    "WARNING: Your account is suspended. Please contact to support team."
  );
} else if (accountStatus === "pending_verification") {
  console.log(
    "Your account is pending is e-mail verification. Check your E-mail."
  );
} else if (accountStatus === "verified") {
  console.log("Your account is verified and ready to use.");
} else {
  console.log("ERROR. Unexpected account Status Detected.");
}
