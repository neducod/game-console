/*AOS INTIALIZING*/
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once (set to false to repeat on scroll)
  });

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }









//POPUP FOR ABOUT.HTML
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