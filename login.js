// Mock data for general users (ID required)
const generalUsers = [
    { id: "SP001", firstname: "Mariame", lastname: "Tiane", password: "password1"},
    { id: "SP002", firstname: "Sarr", lastname: "Abdoulaye", password: "password2"},
];

// Login form submission handler
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();

    if (firstname === "Fatima" && lastname === "Coulibably" && password === "aLsp4aL") {
        // Redirect to another page
        window.location.href = "http://127.0.0.1:5500/Teacher_s%20side/Teachers_s%20Portals/Fatima.html"; // Replace with your page URL
    };
    if (firstname === "Meoko" && lastname === "Gningue" && password === "aLsp5aL") {
        // Redirect to another page
        window.location.href = "http://127.0.0.1:5500/Teacher_s%20side/Teachers_s%20Portals/Moeko.html"; // Replace with your page URL
    };
    // Check if the user is a general user with ID
    const generalUser = generalUsers.find(user =>
        user.id === id &&
        user.firstname === firstname &&
        user.lastname === lastname &&
        user.password === password
    );

    if (generalUser) {
        // Redirect to another page for general users
        window.location.href = "http://127.0.0.1:5500/Students%20Portal/Entrance%20Portal/Student%20Entrance%20Portal.html"; // Change this to the actual page
        return;
    }
    // If no match, show an error
    alert("Erreur d'identifant, réessayer s'il vous plait/ユーザー名エラー。もう一度お試しください");
});
