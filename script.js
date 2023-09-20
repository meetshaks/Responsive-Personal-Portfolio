
// Define a function to delete cookies for the website

  
  // Attach the rest of your code to the document ready event
  $(document).ready(function() {
    $(window).scroll(function() {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $('.scroll-up-btn').addClass("show");
      } else {
        $('.scroll-up-btn').removeClass("show");
      }
    });
  
    // slide-up script
    $('.scroll-up-btn').click(function() {
      $('html').animate({
        scrollTop: 0
      });
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
    });
  
    $('.navbar .menu li a').click(function() {
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Programmer", "Developer", "Designer", "Database Administrator", "Penetration Tester", "Kali Linux Expert"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Programmer", "Developer", "Designer", "Database Administrator", "Penetration Tester", "Kali Linux Expert"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // owl carousel script
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  
  function deleteCookies() {
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf("website.com") === 0) {
        document.cookie = cookie.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.website.com";
      }
    }
  }
  
  // Call the deleteCookies() function on page load
  function refreshWithDeleteCookies() {
    deleteCookies();
    // location.reload(true);
  }
  refreshWithDeleteCookies()

  // Function to delete cookies
function deleteCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}

// Call the deleteCookies function when the page reloads
window.addEventListener("beforeunload", deleteCookies);
