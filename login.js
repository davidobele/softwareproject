document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Dummy authentication (Replace with real authentication logic)
            if (username === "admin" && password === "password") {
                sessionStorage.setItem("loggedIn", "true"); // Store login session
                window.location.href = "index.html"; // Redirect to the main website
            } else {
                alert("Invalid username or password. Try again.");
            }
        });
    }

    // Prevent users from accessing index.html without logging in
    if (!sessionStorage.getItem("loggedIn") && window.location.pathname.includes("index.html")) {
        alert("Please log in first.");
        window.location.href = "login.html"; // Redirect to login page
    }
});
