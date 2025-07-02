let userCurrentRole = "guest"; // Use admin, editor, viewer, user, or guest

console.log("---Role-Based Access Checker---");

// Introduce a simulated delay for checking permissions
const accessCheckDelay = 2000; // 2 seconds

// 1. Basic Role Check
console.log("\n--- Scenario-1: Admin Dashboard Access---");
console.log("Checking admin access. Please wait...");

setTimeout(() => {
  if (userCurrentRole === "admin") {
    console.log(
      `Welcome Admin! User: '${userCurrentRole}' has access to Admin Dashboard.`
    );
  } else {
    console.log(
      `User: '${userCurrentRole}' does NOT have access to Admin Dashboard. Admin Permission Required.`
    );
  }

  // 2. Multiple Role Check - This will execute AFTER the first check's delay
  console.log("\n--- Scenario-2: Content Management System (CMS) Access");
  console.log("Checking CMS access. Please wait...");

  setTimeout(() => {
    if (userCurrentRole === "admin" || userCurrentRole === "editor") {
      // Determine the specific welcome message based on the role
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

    // Add a general welcome message based on role at the very end
    // *** REPLACED SWITCH WITH IF-ELSE IF-ELSE ***
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
  }, accessCheckDelay); // Delay for CMS check
}, accessCheckDelay); // Delay for Admin check
