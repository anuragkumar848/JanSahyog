// Correctly select the Digital India logo image by its class
const digitalIndiaImg = document.querySelector('.digital-india-logo');
if (digitalIndiaImg) {
  digitalIndiaImg.style.cursor = "pointer";
  digitalIndiaImg.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://www.digitalindia.gov.in/', '_blank');
  });
}