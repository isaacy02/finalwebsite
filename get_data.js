const fetchCivicData = async () => {
    const apiUrl = `https://www.opencivicapi.com`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch civic data');
        }
        const data = await response.json();
        displayCivicData(data.officials);
    } catch (error) {
        document.getElementById('civic-data-container').innerHTML = `<p>Error: ${error.message}</p>`;
    }
};

const displayCivicData = (officials) => {
    const container = document.getElementById('civic-data-container');
    container.innerHTML = ''; 
    officials.forEach((official) => {
        const officialCard = document.createElement('div');
        officialCard.className = 'official-card';
        officialCard.innerHTML = `
            <h3>${official.name}</h3>
            <p>Office: ${official.office || 'Not available'}</p>
            <p>Phone: ${official.phones ? official.phones[0] : 'Not available'}</p>
        `;
        container.appendChild(officialCard);
    });
};

fetchCivicData();
