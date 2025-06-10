
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_form_data_from_voice(transcript, form_fields):
    prompt = f'''
    Fill the following form fields using this voice input: "{transcript}"

    Form Fields: {form_fields}

    Respond in JSON with field names as keys.
    '''
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
