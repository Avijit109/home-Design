
var slider1 = new Swiper(".slider1", {
  // slidesPerView:4,
  // spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320:{
      slidesPerView:1,
    },
    482: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      //   spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      //   spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

var slider2 = new Swiper(".slider2", {
  loop: true,
  // mousewheel: true,
  autoplay: {
    delay: 30500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to set up slider navigation

  function setupSlider(
    sliderWrapperSelector,
    prevButtonSelector,
    nextButtonSelector,
    cardSelector
  ) {
    let sliderWrapper = document.querySelector(sliderWrapperSelector);
    let prevButton = document.querySelector(prevButtonSelector);
    let nextButton = document.querySelector(nextButtonSelector);

    if (sliderWrapper && prevButton && nextButton) {
      function getCardWidth() {
        let card = document.querySelector(cardSelector);
        return card ? card.offsetWidth + 10 : 0; // Add margins if needed
      }

      // Scroll to the left when the previous button is clicked
      prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        let scrollDistance = -getCardWidth();
        sliderWrapper.scrollBy({ left: scrollDistance, behavior: "smooth" });
      });

      // Scroll to the right when the next button is clicked
      nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        let scrollDistance = getCardWidth();
        sliderWrapper.scrollBy({ left: scrollDistance, behavior: "smooth" });
      });

      console.log("Slider set up successfully:", sliderWrapperSelector);
    } else {
      console.error("Slider setup failed: Check your selectors.");
    }
  }

  // Set up sliders
  setupSlider(".residental-layout", "#prev", "#next", ".resident-card");
  setupSlider(".blog-layout", "#prevv", "#nextt", ".blog-card");

  const blogAreas = document.querySelectorAll(".blog-area");
  const paginationLinks = document.querySelectorAll(".icon a");

  let currentIndex = 0;
  const itemsPerSlide = 3;

  function showBlogAreas(index) {
    blogAreas.forEach((area, i) => {
      area.style.display =
        i >= index && i < index + itemsPerSlide ? "flex" : "none";
    });
  }

  showBlogAreas(currentIndex);

  paginationLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.innerHTML.includes("fa-greater-than")) {
        currentIndex += itemsPerSlide;
        if (currentIndex >= blogAreas.length) currentIndex = 0; // Loop back
      } else {
        currentIndex = index * itemsPerSlide;
        if (currentIndex >= blogAreas.length)
          currentIndex = blogAreas.length - itemsPerSlide;
      }

      showBlogAreas(currentIndex);
    });
  });
  // Blog-area pagination

  // Navbar toggle
  let toggler = document.querySelector(".ico");
  let navlinks = document.querySelector(".nav-links");

  if (toggler && navlinks) {
    toggler.addEventListener("click", function () {
      navlinks.classList.toggle("active");
      console.log("Menu toggled");
    });
  } else {
    console.error("Navbar elements not found.");
  }
});
// JavaScript Slider Controls


window.onload = function() {
  // Check if the page was reloaded
  const navigationEntries = performance.getEntriesByType("navigation");
  if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
      window.location.href = "index.html"; // Redirect to index.html if refreshed
  }
};


// -------for counting numbers------
$(document).ready(function() {
  function startCounter() {
      $('.counter').each(function () {
          var $this = $(this);
          var countTo = $this.attr('data-count');
          
          $({ countNum: 0 }).animate({ countNum: countTo }, {
              duration: 2000,
              easing: 'swing',
              step: function () {
                  $this.text(Math.floor(this.countNum) + '+');
              },
              complete: function () {
                  $this.text(this.countNum + '+');
              }
          });
      });
  }

  const abtCom = document.getElementById('abt-com');
  if (abtCom) {
      const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
              startCounter();
              observer.disconnect(); // Run only once
          }
      }, { threshold: 0.1 });
      observer.observe(abtCom);
  }
});