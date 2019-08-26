document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navegation ul li a");
    navLinks.forEach(function(element) {
      element.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(event.target.hash).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });