(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById('voiceStatus').textContent = "Speech Recognition API not supported in this browser.";
    document.getElementById('startVoiceAssist').disabled = true;
    return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    const synth = window.speechSynthesis;

    const langPrompts = {
    en: {
        askName: "What is your name?",
        askAge: "What is your age?",
        askEmail: "What is your email?",
        askSubmit: "Say submit to finish the form or continue to fill next field.",
        languageQuery: "Please choose your language: say English or Hindi.",
        langNotUnderstood: "Sorry, I did not understand. Please say English or Hindi.",
        finished: "Form filling completed. Thank you!",
        error: "Sorry, I didn't catch that. Please repeat."
    },
    hi: {
        askName: "आपका नाम क्या है?",
        askAge: "आपकी उम्र क्या है?",
        askEmail: "आपका ईमेल क्या है?",
        askSubmit: "फॉर्म पूरा करने के लिए सबमिट कहें या अगले फ़ील्ड के लिए जारी रखें।",
        languageQuery: "कृपया अपनी भाषा चुनें: अंग्रेज़ी या हिंदी कहें।",
        langNotUnderstood: "माफ़ करें, समझ नहीं आया। कृपया अंग्रेज़ी या हिंदी कहें।",
        finished: "फॉर्म भरना पूरा हुआ। धन्यवाद!",
        error: "माफ़ करें, सुन नहीं पाया। कृपया फिर से कहें।"
    }
    };

    const formFields = [
    { id: "name", promptKey: "askName" },
    { id: "age", promptKey: "askAge" },
    { id: "email", promptKey: "askEmail" }
    ];

    let language = "en";
    let currentFieldIndex = 0;
    let isListening = false;
    const statusDiv = document.getElementById("voiceStatus");
    const startBtn = document.getElementById("startVoiceAssist");

    function speak(text) {
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "hi" ? "hi-IN" : "en-US";
    synth.speak(utterance);
    statusDiv.textContent = "Assistant: " + text;
    }

    function listen(callback) {
    if (isListening) return;
    isListening = true;
    recognition.start();

    recognition.onresult = (event) => {
        isListening = false;
        const speechResult = event.results[0][0].transcript.toLowerCase();
        statusDiv.textContent = "You said: " + speechResult;
        callback(speechResult);
    };

    recognition.onerror = (event) => {
        isListening = false;
        speak(langPrompts[language].error);
        callback(null);
    };

    recognition.onend = () => {
        if (isListening) {
        recognition.start(); // Restart if still listening
        }
    };
    }

    function askLanguage() {
    speak(langPrompts.en.languageQuery);
    listen((res) => {
        if (!res) return askLanguage();

        if (res.includes("english")) {
        language = "en";
        recognition.lang = "en-US";
        startFormFilling();
        } else if (res.includes("hindi") || res.includes("हिंदी")) {
        language = "hi";
        recognition.lang = "hi-IN";
        startFormFilling();
        } else {
        speak(langPrompts.en.langNotUnderstood);
        askLanguage();
        }
    });
    }

    function startFormFilling() {
    currentFieldIndex = 0;
    fillNextField();
    }

    function fillNextField() {
    if (currentFieldIndex >= formFields.length) {
        speak(langPrompts[language].finished);
        return;
    }

    const field = formFields[currentFieldIndex];
    const promptText = langPrompts[language][field.promptKey];
    speak(promptText);

    listen((res) => {
        if (!res) {
        speak(langPrompts[language].error);
        fillNextField(); // Retry current field
        return;
        }

        if (res === "submit") {
        speak(langPrompts[language].finished);
        return;
        }

        document.getElementById(field.id).value = res;
        currentFieldIndex++;
        fillNextField();
    });
    }

    startBtn.onclick = () => {
    askLanguage();
    };
})();
