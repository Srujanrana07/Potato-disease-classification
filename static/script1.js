const medicineInfo = document.querySelector('.medicine-info');
const medicines = [
    {
        image: '..//image//Early blight.jpg',
        name: 'Medicine 1',
        dose: '10ml/L',
        duration: '10 days'
    },
    {
        image: '..//image//potatoes-411975_1280.jpg',
        name: 'Medicine 2',
        dose: '15ml/L',
        duration: '7 days'
    },
    {
        image: '..//image//OIP.jpg',
        name: 'Medicine 3',
        dose: '20ml/L',
        duration: '5 days'
    }
];

let currentMedicineIndex = 0;

function updateMedicineInfo() {
    const medicine = medicines[currentMedicineIndex];
    medicineInfo.innerHTML = `
        <img src="${medicine.image}" alt="${medicine.name}">
        <p id="medicine-name">${medicine.name}</p>
        <p id="medicine-dose">Dose: ${medicine.dose}</p>
        <p id="medicine-duration">Duration: ${medicine.duration}</p>
    `;
    currentMedicineIndex = (currentMedicineIndex + 1) % medicines.length;
}

// Rotate medicine info every 5 seconds
setInterval(updateMedicineInfo, 5000);
