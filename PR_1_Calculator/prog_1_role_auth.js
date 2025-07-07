let userCurrentRole = "guest"; // Use admin, editor, viewer, user, or guest

console.log("---Role-Based Access Checker---");

// 1. Basic Role Check
console.log("\n--- Scenario-1: Admin Dashboard Access---");
console.log("Checking admin access. Please wait...");

if (userCurrentRole === "admin") {
  console.log(
    `Welcome Admin! User: '${userCurrentRole}' has access to Admin Dashboard.`
  );
} else {
  console.log(
    `User: '${userCurrentRole}' does NOT have access to Admin Dashboard. Admin Permission Required.`
  );

  // 2. Multiple Role Check.
  console.log("\n--- Scenario-2: Content Management System (CMS) Access");
  console.log("Checking CMS access. Please wait...");

  if (userCurrentRole === "admin" || userCurrentRole === "editor") {
    let welcomeMessage =
      userCurrentRole === "admin" ? "Welcome Admin!" : "Welcome Editor!";
    console.log(
      `${welcomeMessage} User: '${userCurrentRole}' has access to Content Management System.`
    );
  } else if (userCurrentRole === "viewer") {
    console.log(
      `Welcome Viewer! User: '${userCurrentRole}' has access to View-Only Portal.`
    );
  } else {
    console.log(
      `User: '${userCurrentRole}' has NO access to CMS. Invalid role.`
    );
  }

  console.log("\n--- General Welcome ---");
  if (userCurrentRole === "admin") {
    console.log("Welcome Admin! You have full control over the system.");
  } else if (userCurrentRole === "editor") {
    console.log("Welcome Editor! You can manage content.");
  } else if (userCurrentRole === "viewer") {
    console.log("Welcome Viewer! Enjoy Browse the content.");
  } else if (userCurrentRole === "user") {
    console.log("Welcome User! Explore your personalized dashboard.");
  } else if (userCurrentRole === "guest") {
    console.log("Welcome Guest! Limited access available.");
  } else {
    console.log("Welcome! Your role is not recognized.");
  }
}
