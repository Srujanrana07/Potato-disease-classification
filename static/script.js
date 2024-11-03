// script.js

const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');
const uploadBtn = document.getElementById('upload-btn');
const galleryBtn = document.getElementById('gallery-btn');

const gallery = [];

// Start video stream
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error("Error accessing webcam: ", error);
  });

// Capture photo
captureBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataUrl = canvas.toDataURL('image/png');
  
  addToGallery(imageDataUrl);
});

// Upload photo
uploadBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageDataUrl = e.target.result;
        addToGallery(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  
  input.click();
});

// Send image to Flask server
function sendImageToServer(imageDataUrl) {
  fetch('/upload-image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ imageData: imageDataUrl })
  })
  .then(response => {
    if (response.redirected) {
      window.location.href = response.url; // Redirect to results page
    } else {
      return response.json();
    }
  })
  .then(data => {
    if (data && data.message) {
      alert(data.message); // Optional: display a message from the server
    }
  })
  .catch(error => {
    console.error("Error sending image:", error);
  });
}

// Open gallery
galleryBtn.addEventListener('click', () => {
  openGallery();
});

// Add image to gallery
function addToGallery(imageDataUrl) {
  gallery.push(imageDataUrl);
  alert("Image added to gallery!");
}

// Display gallery
function openGallery() {
  const galleryWindow = document.createElement('div');
  galleryWindow.style.position = 'fixed';
  galleryWindow.style.top = '0';
  galleryWindow.style.left = '0';
  galleryWindow.style.width = '100vw';
  galleryWindow.style.height = '100vh';
  galleryWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  galleryWindow.style.display = 'flex';
  galleryWindow.style.flexWrap = 'wrap';
  galleryWindow.style.overflowY = 'scroll';
  galleryWindow.style.padding = '10px';

  gallery.forEach((imageDataUrl, index) => {
    // Create a container for each image with the send icon
    const imageContainer = document.createElement('div');
    imageContainer.style.position = 'relative';
    imageContainer.style.width = '150px';
    imageContainer.style.margin = '10px';
    imageContainer.style.textAlign = 'center';

    // Create and add the image element
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.style.width = '100%';
    img.style.borderRadius = '8px';
    img.style.display = 'block';

    // Create the send icon
    const sendIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    sendIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    sendIcon.setAttribute("width", "32"); // Larger icon size for emphasis
    sendIcon.setAttribute("height", "32");
    sendIcon.setAttribute("fill", "white");
    sendIcon.setAttribute("viewBox", "0 0 16 16");
    sendIcon.classList.add("bi", "bi-send");

    // Define the SVG path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z");

    sendIcon.appendChild(path);

    // Style and position the send icon above the image
    sendIcon.style.position = 'absolute';
    sendIcon.style.top = '-20px'; // Move it above the image
    sendIcon.style.left = '50%';
    sendIcon.style.transform = 'translateX(-50%)';
    sendIcon.style.cursor = 'pointer';

    // Add a click event listener to the send icon
    sendIcon.addEventListener('click', () => {
      alert(`Image ${index + 1} sent!`);
      // Add functionality here to actually send the image
    });

    // Append the image and the icon to the container
    imageContainer.appendChild(sendIcon);
    imageContainer.appendChild(img);

    // Append the container to the gallery window
    galleryWindow.appendChild(imageContainer);
  });

  document.body.appendChild(galleryWindow);

  // Close the gallery when clicking outside images
  galleryWindow.addEventListener('click', () => {
    document.body.removeChild(galleryWindow);
  });
}
// Display gallery
function openGallery() {
  const galleryWindow = document.createElement('div');
  galleryWindow.style.position = 'fixed';
  galleryWindow.style.top = '0';
  galleryWindow.style.left = '0';
  galleryWindow.style.width = '100vw';
  galleryWindow.style.height = '100vh';
  galleryWindow.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  galleryWindow.style.display = 'flex';
  galleryWindow.style.flexWrap = 'wrap';
  galleryWindow.style.overflowY = 'scroll';
  galleryWindow.style.padding = '10px';

  gallery.forEach((imageDataUrl, index) => {
    // Create a container for each image with the send icon
    const imageContainer = document.createElement('div');
    imageContainer.style.position = 'relative';
    imageContainer.style.width = '150px';
    imageContainer.style.margin = '10px';
    imageContainer.style.textAlign = 'center';

    // Create and add the image element
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.style.width = '100%';
    img.style.borderRadius = '8px';
    img.style.display = 'block';

    // Create the send icon
    const sendIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    sendIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    sendIcon.setAttribute("width", "32"); // Larger icon size for emphasis
    sendIcon.setAttribute("height", "32");
    sendIcon.setAttribute("fill", "white");
    sendIcon.setAttribute("viewBox", "0 0 16 16");
    sendIcon.classList.add("bi", "bi-send");

    // Define the SVG path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z");

    sendIcon.appendChild(path);

    // Style and position the send icon above the image
    sendIcon.style.position = 'absolute';
    sendIcon.style.top = '13px'; // Move it above the image
    sendIcon.style.left = '50%';
    sendIcon.style.transform = 'translateX(-50%)';
    sendIcon.style.cursor = 'pointer';

    // Add a click event listener to the send icon
    sendIcon.addEventListener('click', () => {
      sendImageToServer(imageDataUrl);
      alert(`Image ${index + 1} sent!`);
      // Add functionality here to actually send the image
    });

    // Append the image and the icon to the container
    imageContainer.appendChild(sendIcon);
    imageContainer.appendChild(img);

    // Append the container to the gallery window
    galleryWindow.appendChild(imageContainer);
  });

    document.body.appendChild(galleryWindow);

    // Close the gallery when clicking outside images
    galleryWindow.addEventListener('click', () => {
        document.body.removeChild(galleryWindow);
    });
  // Function to display result on the frontend
    function displayResult(result) {
        const resultContainer = document.getElementById('result-container'); // Ensure you have this element in your HTML
        resultContainer.textContent = result; // Update the text with the result from the server
    }

}


