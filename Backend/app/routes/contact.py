from flask import Blueprint, request, jsonify

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/', methods=['POST'])
def handle_contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # For now, just print (or later save/send it)
    print(f"Contact form submitted: {name}, {email}, {message}")

    return jsonify({"message": "Thank you for contacting me!"}), 200
