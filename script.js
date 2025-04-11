//Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Hardcoded credentials (replace with backend authentication later)
    const validUsername = "user";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      // Store login state
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", username);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("errorMessage").style.display = "block";
    }
  });

  //logout
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Script Loaded");

    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        console.log("Logout button found");
        logoutButton.addEventListener("click", function(event) {
            console.log("Logout button clicked");
            event.preventDefault();
            
            sessionStorage.clear();
            console.log("Session storage cleared");
            alert("You have been logged out.");
            window.location.href = "login.html";
        });
    }

    console.log("Checking session storage:", sessionStorage.getItem("loggedIn"));
    if (!sessionStorage.getItem("loggedIn")) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
});


