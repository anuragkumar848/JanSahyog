
from voice_interface import speak, listen
from aadhaar_ekyc import perform_ekyc
from form_filler import fill_form_field
from llm_engine import get_field_and_value

def main():
    speak("Welcome! Say 'start' to begin.")
    if "start" in listen().lower():
        speak("Please provide your Aadhaar number.")
        aadhaar = listen()
        user_data = perform_ekyc(aadhaar)
        if user_data:
            speak("e-KYC successful. I will now fill in your details.")
            for field, value in user_data.items():
                fill_form_field(field, value)
                speak(f"Filled {field} with {value}")
        else:
            speak("Aadhaar not found. Please try again.")

        while True:
            speak("Do you want to fill another field?")
            if "no" in listen().lower():
                break
            speak("Which field?")
            field = listen()
            speak(f"What value should I fill for {field}?")
            value = listen()
            fill_form_field(field, value)
            speak(f"Filled {field} with {value}.")
        speak("Form filling complete.")
