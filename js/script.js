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





  document.querySelector("#subform").addEventListener("submit", subscribe);

  function subscribe(event) {
    event.preventDefault();
    let email = document.querySelector("#your-email").value;

    if (email === "") {
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing.");
    }
  }
