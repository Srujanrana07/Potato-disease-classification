# Potato Disease Classification with Flask and Google Cloud

A web-based application to classify potato leaf diseases using a deep learning model (CNN). The application achieves **90% training accuracy** and **70% operational efficiency** for real-life image classification. The project utilizes Flask for deployment, Google Cloud Storage for model storage, and a real-time camera feed for image capture.

---
## Project Overview

This project aims to automate the classification of potato leaf diseases using deep learning techniques. By leveraging a **Convolutional Neural Network (CNN)**, the system classifies potato leaf images into categories such as **Healthy**, **Early Blight**, **Late Blight**, and other common potato diseases. The model is deployed using the **Flask** web framework, providing a simple and user-friendly interface for real-time interaction. A camera feed is integrated to capture live images of potato leaves, which are then processed by the trained CNN model to classify them accurately. The model is stored on **Google Cloud Storage**, ensuring scalability and easy access. With a **training accuracy of 90%** and an operational efficiency of **70%** in real-time image classification, this system provides a valuable tool for farmers to quickly identify diseases in potato crops and take timely corrective actions.

---
![Potato Disease Classification Logo](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/potato%20classiifier.png)

---
## About Dataset

This dataset contains high-resolution images of potato plants exhibiting various diseases, including **early blight**, **late blight**, and **healthy leaves**. It is curated to aid in the development and testing of image recognition models for accurate disease detection and classification, promoting advancements in agricultural diagnostics.

### About this Directory
The dataset consists of the directory `plant_village`, which contains three subdirectories:
1. `early_blight`: Images of potato plants with early blight disease.
2. `late_blight`: Images of potato plants with late blight disease.
3. `healthy_plant`: Images of healthy potato plants.

### Directory Structure

The `PlantVillage` directory contains the following 3 subdirectories:
- `early_blight`
- `late_blight`
- `healthy_plant`

---

## 🚀 Features

- **Real-time Disease Detection:** Capture images via a camera feed for immediate disease classification.
- **Deep Learning Model:** A CNN trained on a curated dataset for potato leaf diseases.
- **Cloud Integration:** Google Cloud Storage for seamless model hosting.
- **Web Interface:** Simple and intuitive UI built with Flask.

---

## 📂 Project Structure

```plaintext
📦 potato-disease-classification
├── app/
│   ├── static/          # Static files (CSS, JS, images)       
│   ├── model/
│   │   └── Gcp.py       #model routs for fetching form gcp bucket
│   └── templates/       # HTML templates
├── requirements.txt     # Python dependencies
├── app.py               # Main Flask app
└── README.md            # Project documentation
```
---
## Results and web interface 
![Results and web interface](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144600.png)
![Results and web interface](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144621.png)
![Results and web interface](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144753.png)

---
## 💻 Technologies Used

- **Framework**: Python, Flask
- **Deep Learning Model**: Convolutional Neural Networks (CNN)
- **Cloud Storage**: Google Cloud Bucket
- **Frontend**: HTML, CSS, JavaScript

---

## 📸 How It Works

1. **Camera Integration**: Capture images of potato leaves directly via the web interface.
2. **Image Processing**: The CNN model classifies the images into disease categories based on the training data.
3. **Result Display**: The classification results are displayed with actionable insights, including the predicted disease and advice for handling it.
---
## 🌐 [Live Demo](https://potato-disease-classification-srujanrana.onrender.com/)
---
## Contributers
[**Srujan Rana**](https://github.com/Srujanrana07.git)



