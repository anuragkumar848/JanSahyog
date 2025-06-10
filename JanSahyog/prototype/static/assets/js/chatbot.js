window.generatedOtp = window.generatedOtp || null;

const schemes = {
  "student maharashtra": "EBC Fee Reimbursement: <a href='https://mahadbt.maharashtra.gov.in' target='_blank'>Apply Now</a>",
  "farmer delhi": "PM-Kisan Yojana: <a href='https://pmkisan.gov.in' target='_blank'>Apply Now</a>",
  "worker karnataka": "Labour Welfare Scheme: <a href='https://sevasindhu.karnataka.gov.in' target='_blank'>Apply Now</a>"
};

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;
  const div = document.createElement("div");
  div.className = sender === "bot" ? "bot-message" : "user-message";
  div.innerHTML = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

window.sendMessage = function() {
  const input = document.getElementById("userInput");
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  appendMessage(msg, "user");
  input.value = "";

  const reply = schemes[msg.toLowerCase()] || "❗ Sorry, I couldn't find a scheme for that. Try 'student Maharashtra' or 'farmer Delhi'.";
  setTimeout(() => appendMessage(reply, "bot"), 500);
};

window.findScheme = function() {
  const occupation = document.getElementById("occupation");
  const state = document.getElementById("state");
  if (!occupation || !state) return;
  const key = `${occupation.value} ${state.value}`;
  const result = schemes[key] || "❌ No matching scheme found.";
  const schemeResult = document.getElementById("schemeResult");
  if (schemeResult) schemeResult.innerHTML = result;
};

window.sendOtp = function() {
  const aadhaar = document.getElementById("aadhaar");
  if (!aadhaar) return;
  if (aadhaar.value.length === 12 && !isNaN(aadhaar.value)) {
    generatedOtp = Math.floor(100000 + Math.random() * 900000);
    const aadhaarStatus = document.getElementById("aadhaarStatus");
    if (aadhaarStatus) aadhaarStatus.innerHTML = `Mock OTP sent: <b>${generatedOtp}</b>`;
  } else {
    const aadhaarStatus = document.getElementById("aadhaarStatus");
    if (aadhaarStatus) aadhaarStatus.innerHTML = "❌ Invalid Aadhaar number.";
  }
};

window.verifyOtp = function() {
  const otp = document.getElementById("otp");
  const status = document.getElementById("aadhaarStatus");
  if (!otp || !status) return;
  if (otp.value === String(generatedOtp)) {
    status.innerHTML = "✅ Aadhaar verified successfully!";
  } else {
    status.innerHTML = "❌ Incorrect OTP.";
  }
};

window.attachDocs = function() {
  const docs = document.getElementById("docs");
  const docsStatus = document.getElementById("docsStatus");
  if (!docs || !docsStatus) return;
  const selected = Array.from(docs.selectedOptions).map(o => o.value);
  docsStatus.innerHTML = selected.length > 0
    ? `Attached: <b>${selected.join(", ")}</b>`
    : "❗ Please select at least one document.";
};
