from app import app, db # assuming your Flask app and db object are defined in a file called app.py

with app.app_context():
    db.create_all()
