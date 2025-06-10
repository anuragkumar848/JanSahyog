# GovAid Chatbot Portal

A voice-assisted web portal designed to help users—especially those who are visually impaired or less digitally literate—fill out government scheme forms using simple voice commands in **English or Hindi**.

---

## 🎯 Features

- 🎤 **Voice-assisted form filling** using the Web Speech API.
- 🌐 **Multi-language support** – English and Hindi (basic prototype).
- 🧠 Intelligent input detection (Name, Age, Email, etc.)
- 📤 Voice-based **form submission** (planned).
- 🔐 API integration support for **Aadhaar e-KYC** (via [IndiaStack](https://www.indiastack.org/) APIs).
- ✅ Modern UI with Bootstrap 5.

---

## 📋 Supported Voice Commands

### In English:
- `"My name is Riya Sharma"`
- `"My age is 30"`
- `"My email is riya.sharma@gmail.com"`

### In Hindi (Prototype):
- `"मेरा नाम अमित है"` → (Mera naam Amit hai)
- `"मेरी उम्र 25 साल है"` → (Meri umr 25 saal hai)
- `"मेरा ईमेल amit.kumar@gmail.com है"` → (Mera email... hai)

> Hindi support will use basic string matching or use speech recognition with `lang="hi-IN"`.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Web Speech API)
- IndiaStack (planned: Aadhaar e-KYC API)

---

## 🔄 How It Works

1. Click **Start Voice Assistant**.
2. Speak the command for name, age, or email.
3. Fields will be auto-filled from your voice.
4. (Planned) Say `"Submit form"` to trigger form submission.

---

## 🧩 Project Structure

```
gov-aid-chatbot-portal/
├── index.html           # Main HTML UI
├── assets/
│   └── js/
│       └── voiceAssistant.js   # (planned modular JS file)
├── README.md
```

---

## 🔌 Integration Plans

### ✅ e-KYC Integration (IndiaStack)

- Use Aadhaar Number or Virtual ID (VID)
- Perform OTP-based identity verification
- Auto-fill verified user data into form

### 🔐 API Endpoint (Planned):
- `POST /ekyc/verify`
- Headers: `Authorization: Bearer <token>`
- Body: `{ aadhaar: "XXXX-XXXX-XXXX" }`

---

## ⚠️ Browser Support

| Browser    | Voice Input | Hindi Support |
|------------|-------------|----------------|
| Chrome     | ✅           | ✅ (limited)    |
| Edge       | ✅           | ✅ (limited)    |
| Firefox    | ❌           | ❌              |
| Safari     | ❌           | ❌              |

---

## 📝 License

MIT License — Free to use for educational, governmental, or social good purposes.

---

## 🙌 Future Enhancements

- Hindi voice assistant model integration via DeepSpeech or Whisper
- Support for scanning physical documents via camera
- Text-to-speech output of responses
- Full mobile optimization
