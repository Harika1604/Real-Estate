const properties = [
    { image: 'Luxury-Villa.jpg', title: 'Luxury Villa', location: 'New York', price: '$500,000' },
    { image: 'Modern Apartment.jpeg', title: 'Modern Apartment', location: 'Los Angeles', price: '$300,000' },
    { image: 'Cozy Cottage.jpeg', title: 'Cozy Cottage', location: 'San Francisco', price: '$250,000' }
];

function displayProperties() {
    const container = document.getElementById('properties-container');
    container.innerHTML = '';
    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>Location: ${property.location}</p>
            <p>Price: ${property.price}</p>
        `;
        container.appendChild(card);
    });
}

function searchProperties() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProperties = properties.filter(property =>
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.price.includes(searchTerm)
    );
    const container = document.getElementById('properties-container');
    container.innerHTML = '';
    filteredProperties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>Location: ${property.location}</p>
            <p>Price: ${property.price}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayProperties);
