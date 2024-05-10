// script.js

// Function to fetch data from API
async function fetchData(apiUrl, elementId) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Get the predicted_value from the API response
        const predictedValue = data.predicted_value;

        // Update the HTML element with the predicted value
        const element = document.getElementById(elementId);
        element.textContent = `${predictedValue}`;
        console.log(`GET request to ${apiUrl} succesfull`)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call fetchData for each API when the page is loaded
window.onload = async () => {
    // API 1
    await fetchData('forecast-web.railway.internal/predict/?pm_type=pm2p5', 'pm2p5'); 

    // API 2
    await fetchData('forecast-web.railway.internal/predict/?pm_type=pm10', 'pm10'); 
};
