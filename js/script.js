
//dynamic nav bar


window.addEventListener('scroll', function() {
    const navSec = document.querySelector('.nav-sec');
    if (window.scrollY > 0) {
      navSec.classList.add('scrolled');
    } else {
      navSec.classList.remove('scrolled');
    }
  });


//GoTopButton
  let btnGoTop = document.getElementById("gotopbtn");
  window.onscroll = function() {scrollFunction()};

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          btnGoTop.style.display = "block";
      } else {
          btnGoTop.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  // Responsive nav links

        let btnMenu = document.getElementById("btnMenu");
        let navLinks = document.querySelector(".nav-links");
  
        btnMenu.onclick = function () {
          btnMenu.classList.toggle("fa-times");
          navLinks.classList.toggle("active");
        };
