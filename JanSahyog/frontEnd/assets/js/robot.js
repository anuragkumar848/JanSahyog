document.addEventListener("DOMContentLoaded", function () {
  const hiBubble = document.getElementById('robot-hi');
  const greetings = [
    "नमस्ते",      // Hindi
    "Hi",         // English
    "வணக்கம்",     // Tamil
    "নমস্কার",     // Bengali
    "નમસ્તે",      // Gujarati
    "నమస్కారం",    // Telugu
    "ನಮಸ್ಕಾರ",     // Kannada
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
    "नमस्कार",     // Marathi
    "ഹലോ"         // Malayalam
  ];
  let greetIndex = 0;

  function showHi() {
    hiBubble.textContent = greetings[greetIndex];
    hiBubble.classList.add('show');
    setTimeout(() => hiBubble.classList.remove('show'), 1800);
    greetIndex = (greetIndex + 1) % greetings.length;
  }
  // Show greeting every 20 seconds
  setInterval(showHi, 20000);
  // Show first greeting on load
  showHi();
});