// Function to fetch global COVID-19 data
async function fetchGlobalData() {
    try {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const data = await response.json();

        // Update HTML with global COVID-19 data
        document.getElementById('globalCases').textContent = data.cases.toLocaleString();
        document.getElementById('globalDeaths').textContent = data.deaths.toLocaleString();
        document.getElementById('globalRecoveries').textContent = data.recovered.toLocaleString();
        document.getElementById('globalActive').textContent = data.active.toLocaleString();
    } catch (error) {
        console.error('Error fetching global data:', error);
    }
}

// Function to initialize the map
function initMap() {
    const map = L.map('map').setView([0, 0], 2); // Set initial view to the center of the world

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Can keep adding markers or other map features here based on the data
    // we need
}

// Function to fetch COVID-19 data based on search criteria
async function fetchCovidData(criteria, value) {
    try {
        let apiUrl = '';
        switch (criteria) {
            case 'country':
                apiUrl = 'https://disease.sh/v3/covid-19/countries';
                break;
            case 'state':
                apiUrl = 'https://disease.sh/v3/covid-19/states';
                break;
            default:
                console.error('Invalid search criteria');
                return;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update HTML with search results
        updateSearchResults(data, criteria);
    } catch (error) {
        console.error('Error fetching search data:', error);
        const tableContainer = document.querySelector(`#${criteria}Table`);
        tableContainer.innerHTML = '<p>Retrieving information. Please wait!</p>';
    }
}

// Helper function to generate column titles
function generateColumnTitles(searchCriteria) {
    if (searchCriteria === 'country') {
        return ['Flag', 'Country', 'Population', 'Total Cases', 'Deaths', 'Recoveries', 'Active Cases'];
    } else if (searchCriteria === 'state') {
        return ['State', 'Population', 'Total Cases', 'Deaths', 'Recoveries', 'Active Cases'];
    }
    return [];
}

// Helper function to add rows to the table
function addTableRow(tableBody, data, searchCriteria) {
    if (searchCriteria === 'country') {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.countryInfo ? `<img src="${data.countryInfo.flag}" alt="${data.country}" width="30" height="20">` : '-'}</td>
            <td>${data.country || '-'}</td>
            <td>${data.population || '-'}</td>
            <td>${data.cases || '-'}</td>
            <td>${data.deaths || '-'}</td>
            <td>${data.recovered || '-'}</td>
            <td>${data.active || '-'}</td>
        `;
        tableBody.appendChild(row);
    } else if (searchCriteria === 'state') {
        if (Array.isArray(data)) {
            for (const stateData of data) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${stateData.state || '-'}</td>
                    <td>${stateData.population || '-'}</td>
                    <td>${stateData.cases || '-'}</td>
                    <td>${stateData.deaths || '-'}</td>
                    <td>${stateData.recovered || '-'}</td>
                    <td>${stateData.active || '-'}</td>
                `;
                tableBody.appendChild(row);
            }
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.state || '-'}</td>
                <td>${data.population || '-'}</td>
                <td>${data.cases || '-'}</td>
                <td>${data.deaths || '-'}</td>
                <td>${data.recovered || '-'}</td>
                <td>${data.active || '-'}</td>
            `;
            tableBody.appendChild(row);
        }
    }
}

// Helper function to generate table body
function generateTableBody(data, searchCriteria) {
    const tableBody = document.createElement('tbody');

    if (data) {
        for (const item of data) {
            addTableRow(tableBody, item, searchCriteria);
        }
    }

    return tableBody;
}

// Function to update HTML with search results
function updateSearchResults(data, searchCriteria) {
    const tableContainer = document.querySelector(`#${searchCriteria}Table`);
    tableContainer.innerHTML = ''; // Clear previous results

    if (!data || data.length === 0) {
        tableContainer.innerHTML = '<p>No data available</p>';
        return;
    }

    const columnTitles = generateColumnTitles(searchCriteria);
    const table = document.createElement('table');
    table.classList.add('infoTable');

    // Add column titles to the table
    const headerRow = table.createTHead().insertRow();
    columnTitles.forEach(title => {
        const th = document.createElement('th');
        th.textContent = title;
        headerRow.appendChild(th);
    });

    // Add table body to the table
    const tableBody = generateTableBody(data, searchCriteria);
    table.appendChild(tableBody);

    // Append the table to the container
    tableContainer.appendChild(table);
}

// Function to fetch and display country data
async function fetchAndDisplayCountryData() {
    fetchCovidData('country');
}

// Function to fetch and display state data
async function fetchAndDisplayStateData() {
    fetchCovidData('state');
}

// Run functions on page load
document.addEventListener('DOMContentLoaded', function () {
    fetchAndDisplayCountryData();
    fetchAndDisplayStateData();
    fetchGlobalData();
    initMap();
});
