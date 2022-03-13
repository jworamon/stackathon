const axios = require('axios');

// function to make api call
const getAirQualityData = async (cityOrZip) => {
    const key = 'e9c30ec706ce4061a26232346220903';
    try {
        const cityData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityOrZip}&aqi=yes`);
        return cityData;
    } catch (err) {
        console.log('error', err);
    }
}

const defaultCities = [
    'Tokyo',
    'Delhi',
    'Shanghai',
    'dhaka',
    'Sao Paulo',
    'Mexico City',
    'Cairo',
    'Beijing',
    'Mumbai',
    'Osaka',
    'Chongqing',
    'Karachi',
    'Istanbul',
    'Kinshasa',
    'Lagos',
    'Buenos Aires',
    'Kolkata',
    'Manila',
    'Tianjin',
    'Guangzhou',
    'Rio De Janeiro',
    'Lahore',
    'Bangalore',
    'Shenzhen',
    'Moscow',
    'Chennai',
    'Bogota',
    'Paris',
    'Jakarta',
    'Lima',
    'Bangkok',
    'Hyderabad',
    'Seoul',
    'Nagoya',
    'London',
    'Chengdu',
    'Nanjing',
    'Tehran',
    'Ho Chi Minh City',
    'Luanda',
    'Wuhan',
    'Xi An Shaanxi',
    'Ahmedabad',
    'Kuala Lumpur',
    'New York City',
    'Hangzhou',
    'Surat',
    'Suzhou',
    'Riyadh',
    'Hong Kong',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Dallas-Fort Worth',
    'Miami',
    'Atlanta',
    'Philadelphia',
    'Washington DC',
    'Phoenix',
    'Boston',
    'Detroit',
    'Seattle',
    'San Franscisco',
    'San Diego',
    'Minneapolis',
    'Tampa',
    'Denver',
    'Las Vegas',
];

const getColor = (value) => {
    switch (true) {
        case value <= 12:
            return '#89CF4C'
        case value > 12 && value <= 35:
            return '#FFC945'
        case value > 35 && value <= 55:
            return '#FA9328'
        case value > 55 && value <= 150:
            return '#F24533'
        case value > 150 && value <= 250:
            return '#FC3089';
        case value > 250:
            return '#9D00DB';
        default:
            return '';
    }
}

const epaConverter = (num) => {
    switch (true) {
        case num === 1:
            return 'Good'
        case num === 2:
            return 'Moderate'
        case num === 3:
            return 'Unhealthy for Sensitive Group'
        case num === 4:
            return 'Unhealthy'
        case num === 5:
            return 'Very Unhealthy'
        case num === 6:
            return 'Hazardous'
        default:
            return '';
    }
}

module.exports = {
    getAirQualityData,
    defaultCities,
    getColor,
    epaConverter
}