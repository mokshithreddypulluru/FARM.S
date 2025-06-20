// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Remove the # symbol
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50, // 50px offset for header height
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting until validation passes

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Check Name
    if (!name) {
        alert('Please enter your name.');
        valid = false;
    }

    // Check Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Check Message
    if (!message) {
        alert('Please enter your message.');
        valid = false;
    }

    if (valid) {
        // Simulate form submission (you can integrate with your backend here)
        alert('Thank you for your message! We will get back to you shortly.');
        this.reset(); // Reset the form fields
    }
});

// Example Dynamic Behavior for "Explore Now" Button
document.querySelector('.service-button').addEventListener('click', function () {
    window.location.href = "#services-section"; // Scroll to the services section when clicked
});
document.getElementById('get-crops').addEventListener('click', async function() {
    const temperature = document.getElementById('temperature').value;
    const rainfall = document.getElementById('rainfall').value;
    
    const response = await fetch(`/api/crops/recommend?temperature=${temperature}&rainfall=${rainfall}`);
    const crops = await response.json();
    
    let cropsList = '';
    crops.forEach(crop => {
        cropsList += `<li>${crop.name} - ${crop.description}</li>`;
    });
    
    document.getElementById('crop-list').innerHTML = cropsList;
});
document.addEventListener("DOMContentLoaded", () => {
    const cropContainer = document.querySelector(".service-cards");

    // Fetch crop data from backend API
    fetch("http://localhost:5000/api/crops")
        .then(response => response.json())
        .then(data => {
            data.forEach(crop => {
                const cropCard = document.createElement("a");
                cropCard.classList.add("service-card");
                cropCard.href = "#"; // Link to more details about the crop

                cropCard.innerHTML = `
                    <img src="${crop.imageUrl}" alt="${crop.name}">
                    <h3>${crop.name}</h3>
                    <p>${crop.type}</p>
                `;

                cropContainer.appendChild(cropCard);
            });
        })
        .catch(error => console.error('Error fetching crop data:', error));
});
