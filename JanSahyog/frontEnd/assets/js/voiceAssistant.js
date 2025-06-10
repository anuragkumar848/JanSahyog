function startVoiceAssistant() {
      const status = document.getElementById('voiceStatus');
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      status.textContent = "Listening... Please say your name, age, or email.";

      recognition.start();

      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        status.textContent = `Heard: ${transcript}`;

        if (transcript.includes("my name is")) {
          const name = transcript.split("my name is")[1].trim();
          document.getElementById('name').value = name;
        } else if (transcript.includes("my age is")) {
          const age = transcript.split("my age is")[1].trim().match(/\d+/);
          if (age) document.getElementById('age').value = age[0];
        } else if (transcript.includes("my email is")) {
          const email = transcript.split("my email is")[1].trim().replace(/\s+/g, '');
          document.getElementById('email').value = email;
        } else {
          status.textContent += " (Unrecognized format)";
        }
      };

      recognition.onerror = function(event) {
        status.textContent = Error `occurred: ${event.error}`;
      };

      recognition.onend = function() {
        status.textContent += " (Voice assistant stopped)";
      };
    }