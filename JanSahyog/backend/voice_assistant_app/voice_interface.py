
import speech_recognition as sr
import pyttsx3

recognizer = sr.Recognizer()
tts = pyttsx3.init()

def speak(text):
    tts.say(text)
    tts.runAndWait()

def listen():
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio, language="en-IN")
            return text
        except:
            speak("Sorry, I didn't catch that.")
            return ""
