//JAVASCRIPT CODE FOR THE ANIMATION
/*AOS INTIALIZING*/
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once (set to false to repeat on scroll)
  });


/*NAVBAR RESPONSIVENESS
  // Toggle mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      navbarMenu.classList.toggle('active');
  });

*/


//POPUP FOR ABOUT.HTML AND JOIN.HTML
  // Automatically show popup when page loads
  window.onload = function() {
    document.getElementById("popup").style.display = "flex";
  };

  function goBack() {
    // Go to previous page
    window.history.back();
    
    // OR reload the current page:
    // window.location.reload();
    
    // OR redirect to a specific page:
    // window.location.href = "https://example.com";
  }





  //CODE FOR TIMER
   // DOM Elements
   const daysEl = document.getElementById('days');
   const hoursEl = document.getElementById('hours');
   const minutesEl = document.getElementById('minutes');
   const secondsEl = document.getElementById('seconds');
   const startBtn = document.getElementById('start-btn');
   const resetBtn = document.getElementById('reset-btn');
   const endTimeInput = document.getElementById('end-time');
   
   let countdownInterval;
   
   // Set default end time to 24 hours from now
   const defaultEndTime = new Date();
   defaultEndTime.setHours(defaultEndTime.getHours() + 24);
   endTimeInput.value = formatDateTime(defaultEndTime);
   
   // Start the countdown
   startBtn.addEventListener('click', () => {
       const endTime = new Date(endTimeInput.value);
       if (isNaN(endTime.getTime())) {
           alert('Please select a valid date and time');
           return;
       }
       
       // Clear any existing interval
       clearInterval(countdownInterval);
       
       // Start new countdown
       updateCountdown(endTime);
       countdownInterval = setInterval(() => updateCountdown(endTime), 1000);
   });
   
   // Reset the countdown
   resetBtn.addEventListener('click', () => {
       clearInterval(countdownInterval);
       daysEl.textContent = '00';
       hoursEl.textContent = '00';
       minutesEl.textContent = '00';
       secondsEl.textContent = '00';
   });
   
   // Update the countdown display
   function updateCountdown(endTime) {
       const now = new Date();
       const diff = endTime - now;
       
       if (diff <= 0) {
           clearInterval(countdownInterval);
           daysEl.textContent = '00';
           hoursEl.textContent = '00';
           minutesEl.textContent = '00';
           secondsEl.textContent = '00';
           return;
       }
       
       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
       const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((diff % (1000 * 60)) / 1000);
       
       daysEl.textContent = formatTime(days);
       hoursEl.textContent = formatTime(hours);
       minutesEl.textContent = formatTime(minutes);
       secondsEl.textContent = formatTime(seconds);
   }
   
   // Format time values to always have 2 digits
   function formatTime(time) {
       return time < 10 ? `0${time}` : time;
   }
   
   // Format datetime for input field
   function formatDateTime(date) {
       const year = date.getFullYear();
       const month = String(date.getMonth() + 1).padStart(2, '0');
       const day = String(date.getDate()).padStart(2, '0');
       const hours = String(date.getHours()).padStart(2, '0');
       const minutes = String(date.getMinutes()).padStart(2, '0');
       
       return `${year}-${month}-${day}T${hours}:${minutes}`;
   }







//SCROLL BACK TO TOP FUNCTION
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// Show/hide button based on scroll position
const toggleScrollToTopButton = () => {
    scrollToTopBtn.classList.toggle("visible", window.scrollY > 200);
};

// Smooth scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.addEventListener("scroll", toggleScrollToTopButton);
scrollToTopBtn.addEventListener("click", scrollToTop);




//JAVASCRIPT CODE FOR THE SECOND FORM
document.getElementById("myFormm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting by default

  const emailInput = document.getElementById("footeremail");
  const checkbox = document.getElementById("checkbox");

  const email = emailInput.value.trim();

  // Check if email is empty
  if (email === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return;
  }

  // Check if email ends with @gmail.com
  if (!email.endsWith("@gmail.com")) {
      alert("Email must be a valid Gmail address ending with '@gmail.com'.");
      emailInput.focus();
      return;
  }

  // Check if checkbox is checked
  if (!checkbox.checked) {
      alert("Please check the box to subscribe to the newsletter.");
      return;
  }

  // ✅ If all validations pass
  // Redirect to another webpage (change the URL to where you want to go)
  window.location.href = "https://x.com/nedu_nony";
});


//JAVASCRIPT CODE FOR SLIDESHOW REVIEW
let slideIndex = 0;
const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    reviews.forEach((review, i) => {
        review.classList.remove("active");
        dots[i].classList.remove("active-dot");
    });
    reviews[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % reviews.length;
    showSlides();
}

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds