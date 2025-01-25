document.getElementById("forgotPasswordForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
  
    try {
      const response = await fetch("https://your-backend-api.com/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        document.getElementById("message").textContent = "A reset link has been sent to your email.";
      } else {
        document.getElementById("message").textContent = result.error || "An error occurred. Please try again.";
      }
    } catch (error) {
      document.getElementById("message").textContent = "An error occurred. Please try again.";
      console.error("Error:", error);
    }
  });
  