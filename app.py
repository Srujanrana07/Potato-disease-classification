from flask import Flask, request, jsonify, render_template, redirect, url_for
import os
from base64 import b64decode
from datetime import datetime
import joblib
import numpy as np
import cv2


app = Flask(__name__)

# Directory for storing uploaded images
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Load your trained model (replace 'your_model.joblib' with your actual model filename)
model = joblib.load('models/model.joblib')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload-image', methods=['POST'])
def upload_image():
    print("#1")
    data = request.json.get("imageData")
    if data:
        print("#2")
        # Remove the base64 header from the data
        image_data = b64decode(data.split(",")[1])
        
        # Save the image with a unique name
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        file_path = os.path.join(UPLOAD_FOLDER, f"image_{timestamp}.png")
        with open(file_path, "wb") as f:
            f.write(image_data)
        
        # Predict the image
        prediction = predict_image(image_data)  # Get the prediction
        print(f"Prediction: {prediction}")
        print("#3")
        
        # Redirect to the results page with the prediction
        # return render_template('results.html', prediction=prediction)
        return redirect(url_for('results', prediction=prediction))

    
    return jsonify({"message": "No image data found"}), 400

def predict_image(image_data):
    print("#4")
    # Convert the image data to a NumPy array
    np_image = np.frombuffer(image_data, np.uint8)
    img = cv2.imdecode(np_image, cv2.IMREAD_COLOR)
    
    # Resize the image to match model input size
    img_resized = cv2.resize(img, (224, 224))  # Adjust size as per your model requirements
    img_array = np.expand_dims(img_resized, axis=0)
    
    # Predict the disease
    prediction = model.predict(img_array)
    disease_class = np.argmax(prediction, axis=1)[0]  # Assuming it's a classification model
    
    # Map the disease_class to a specific disease (you can customize this)
    disease_dict = {0: "Early Blight", 1: "Late Blight", 2: "Healthy"}
    disease_name = disease_dict.get(disease_class, "Unknown")

    return disease_name  # Return the name of the predicted disease


@app.route('/results')
def results():
    print("#5")
    prediction = request.args.get('prediction', 'Unknown')
    return render_template('results.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True,host = '0.0.0.0',port = 5000)