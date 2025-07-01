let userCurrentRole = "guest"; // Use editor, viewer, user or guest

console.log("---Role-Based Access Checker---");

// 1. Basic Role Check
console.log("\n--- Scenario-1: Admin Dashboard Access---");

if (userCurrentRole === "admin") {
  console.log(`User: '${userCurrentRole}' has access to Admin Dashboard.`);
} else {
  console.log(
    `User: '${userCurrentRole}' does NOT access to Admin Dashboard. Admin Permission Required.`
  );
}

// 2. Multiple Role Check
console.log("\n--- Scenario-2: Content Management System (CMS) Access");

if (userCurrentRole === "admin" || userCurrentRole === "editor") {
  console.log(
    `User: '${userCurrentRole}' has access to Content Management System.`
  );
} else if (userCurrentRole === "viewer") {
  console.log(`User: '${userCurrentRole}' has access to View-Only Portal.`);
} else {
  console.log(`User: '${userCurrentRole}' has NO access to CMS. Invalid role.`);
}