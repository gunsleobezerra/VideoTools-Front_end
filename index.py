import os
from app import app, db, Video
from flask import request, jsonify

#flask-cors
from flask_cors import CORS

CORS(app)



if (not os.path.exists("instance/database.db")):
    print("Creating database...")
    with app.app_context():
        db.create_all()
    print("Database created")

print("Starting server...")

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/videos', methods=['GET'])
def videos():
    videos = Video.query.all()
    videos=[ {"id":video.id, "name":video.name, "url":video.url, "description":video.description}
            for video in videos]
    return jsonify(videos)
        

    
@app.route('/videos/<int:id>', methods=['GET'])
def video(id):
    video = Video.query.get(id)
    return {"id":video.id, "name":video.name, "url":video.url, "description":video.description}

@app.route('/videos', methods=['POST'])
def create_video():

    data = request.get_json()
    print(data)
    video = Video(name=data['name'], url=data['url'], description=data['description'])
    db.session.add(video)
    db.session.commit()
    return jsonify({"id":video.id, "name":video.name, "url":video.url, "description":video.description})

@app.route('/videos/<int:id>', methods=['DELETE'])
def delete_video(id):
    video = Video.query.get(id)
    db.session.delete(video)
    db.session.commit()
    return jsonify({"id":video.id, "name":video.name, "url":video.url, "description":video.description})


