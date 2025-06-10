
from flask import Flask, request, jsonify

app = Flask(__name__)

aadhaar_db = {
    "123412341234": {
        "Name": "Rahul Sharma",
        "DOB": "1992-06-10",
        "Gender": "Male",
        "Address": "123 MG Road, Delhi",
        "Mobile": "9876543210"
    },
    "999988887777": {
        "Name": "Anjali Mehra",
        "DOB": "1985-04-21",
        "Gender": "Female",
        "Address": "45 Park Street, Kolkata",
        "Mobile": "9876540000"
    }
}

@app.route('/ekyc', methods=['POST'])
def ekyc():
    data = request.get_json()
    aadhaar_number = data.get("aadhaar_number")
    if aadhaar_number in aadhaar_db:
        return jsonify({
            "status": "success",
            "data": aadhaar_db[aadhaar_number]
        })
    else:
        return jsonify({
            "status": "error",
            "message": "Aadhaar number not found"
        }), 404

if __name__ == "__main__":
    app.run(debug=True, port=5000)
