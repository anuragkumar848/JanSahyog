document.addEventListener("DOMContentLoaded", function () {
  // Bootstrap handles the tab switching with data-toggle="tab"
  // But you can add logic here if needed in the future
  const signUpModal = document.getElementById('signupModal');
  const signUpBtns = document.querySelectorAll('.signupBtn'); // select all buttons with class signupBtn

  if (signUpBtns && signUpModal) {
    signUpBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        $('#signupModal').modal('show');
      });
    });
  }
});

