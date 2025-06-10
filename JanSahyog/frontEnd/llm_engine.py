
import openai
import os

# Make sure to set your OpenAI API key in the environment
openai.api_key = os.getenv("OPENAI_API_KEY")

def get_field_and_value(prompt):
    system_prompt = """
    You are an assistant helping users fill government forms.
    Given a voice input like "my name is Ramesh and I was born in 1991",
    extract field-value pairs in this format: {"Name": "Ramesh", "DOB": "1991"}
    """

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ]
        )
        reply = response.choices[0].message.content.strip()
        return eval(reply)  # Be cautious with eval in production
    except Exception as e:
        print("LLM error:", e)
        return {"error": "Could not parse response"}
