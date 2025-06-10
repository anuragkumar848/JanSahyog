
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = async function(event) {
    const transcript = event.results[0][0].transcript;
    const fields = Array.from(document.querySelectorAll("input")).map(i => i.name);
    const response = await fetch("http://localhost:8000/api/fill-form", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({transcript, fields})
    });
    const { filled_data } = await response.json();
    const data = JSON.parse(filled_data);
    for (let key in data) {
        const input = document.querySelector(`[name="${key}"]`);
        if (input) input.value = data[key];
    }
};

document.getElementById("voice-btn").addEventListener("click", () => {
    recognition.start();
});
