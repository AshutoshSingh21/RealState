
document.addEventListener('DOMContentLoaded', function() {
    const properties = [
        { id: 1, name: 'Luxury Villa', location: 'New York', price: '$1,500,000', bedrooms: 4, bathrooms: 3, imageUrl: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 2, name: 'Urban Apartment', location: 'San Francisco', price: '$950,000', bedrooms: 3, bathrooms: 2, imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, name: 'Downtown Condo', location: 'Chicago', price: '$700,000', bedrooms: 2, bathrooms: 2, imageUrl: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 4, name: 'Beach House', location: 'Miami', price: '$2,000,000', bedrooms: 5, bathrooms: 4, imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 5, name: 'Suburban Home', location: 'Los Angeles', price: '$1,200,000', bedrooms: 4, bathrooms: 3, imageUrl: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 6, name: 'Penthouse', location: 'Seattle', price: '$3,000,000', bedrooms: 6, bathrooms: 5, imageUrl: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 7, name: 'Country House', location: 'Austin', price: '$800,000', bedrooms: 3, bathrooms: 2, imageUrl: 'https://media.istockphoto.com/id/1497209456/photo/real-estate-agent-meeting-a-couple-for-a-house-showing.webp?a=1&b=1&s=612x612&w=0&k=20&c=M5UaXVWF9vOr2JxVmLVVnK09pIEGiWgNtrYOuRKN6rE=' },
        { id: 8, name: 'Cottage', location: 'Portland', price: '$550,000', bedrooms: 2, bathrooms: 1, imageUrl: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 9, name: 'Loft Apartment', location: 'Denver', price: '$1,100,000', bedrooms: 3, bathrooms: 3, imageUrl: 'https://media.istockphoto.com/id/2148764462/photo/model-homes-in-a-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=v1dWfAq7KbiBEqrmkXTL--W0qYmeLzw5oY1fo4ZniVw=' },
        { id: 10, name: 'Mansion', location: 'Dallas', price: '$5,000,000', bedrooms: 7, bathrooms: 6, imageUrl: 'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 11, name: 'Luxury Penthouse', location: 'Las Vegas', price: '$3,500,000', bedrooms: 4, bathrooms: 4, imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
        { id: 12, name: 'Modern Villa', location: 'San Diego', price: '$1,800,000', bedrooms: 5, bathrooms: 3, imageUrl: 'https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D' },
       
    ];

    const propertiesList = document.getElementById('properties-list');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');

        propertyCard.innerHTML = `
            <img src="${property.imageUrl}" alt="${property.name}" class="property-image">
            <div class="property-info">
                <h3>${property.name}</h3>
                <p>Location: ${property.location}</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <p>Bathrooms: ${property.bathrooms}</p>
                <p class="price">Price: ${property.price}</p>
            </div>
        `;

        propertiesList.appendChild(propertyCard);
    });
});
