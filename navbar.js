// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar el navbar:", error));
  });
  