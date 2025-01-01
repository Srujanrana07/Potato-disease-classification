# Potato Disease Classification with Flask and Google Cloud

A web-based application to classify potato leaf diseases using a deep learning model (CNN). The application achieves **90% training accuracy** and **70% operational efficiency** for real-life image classification. The project utilizes Flask for deployment, Google Cloud Storage for model storage, and a real-time camera feed for image capture.

---
![Potato Disease Classification Logo](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/potato%20classiifier.png)

---

## Results and web interface 
![Potato Disease Classification Logo](https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144600.png,https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144621.png,https://github.com/Srujanrana07/Potato-disease-classification/blob/main/static/image/Screenshot%202025-01-01%20144753.png)

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
