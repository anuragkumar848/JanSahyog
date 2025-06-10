
import requests

def perform_ekyc(aadhaar_number):
    url = "http://localhost:5000/ekyc"
    try:
        response = requests.post(url, json={"aadhaar_number": aadhaar_number})
        if response.status_code == 200:
            return response.json()['data']
        else:
            return None
    except Exception as e:
        print("e-KYC API error:", e)
        return None
