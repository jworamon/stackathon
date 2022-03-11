const axios = require('axios');
const key = 'e9c30ec706ce4061a26232346220903';

const getCurrentAirQuality = async (cityOrZip) => {
    try {
        // get current date and format to YYYY-MM-DD
        const currentTime = new Date().toISOString().split('T')[0];
        
        // get data from Weather API
        // astronomy
        // const { data: astronomy } = await axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=${key}&q=${cityOrZip}&dt=2022-03-10`);
        
        //get current weather and aqi
        const { data: current } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityOrZip}&aqi=yes`);

        return current;

    } catch (err) {
        console.log('error', error);
    }
}

const getDefaultAirQuality = async () => {
    try {

        // const { data: newYork } =  await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=New York&aqi=yes`);
        // const { data: losAngeles } =  await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Los Angeles&aqi=yes`);
        // const { data: london } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=yes`);
        // const { data: berlin } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Berlin&aqi=yes`);
        // const { data: paris } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Paris&aqi=yes`);
        // const { data: beijing } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Beijing&aqi=yes`);
        // const { data: tokyo } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tokyo&aqi=yes`);
        // const { data: newDelhi } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=New Delhi&aqi=yes`);
        // const { data: cairo } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Cairo&aqi=yes`);
        // const { data: saoPaolo } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Sao Paolo&aqi=yes`);
        // const { data: bangkok } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Bangkok&aqi=yes`);

        const newYork = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=New York&aqi=yes`);
        const losAngeles = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Los Angeles&aqi=yes`);
        const london = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=yes`);
        const berlin = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Berlin&aqi=yes`);
        const paris = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Paris&aqi=yes`);
        const beijing = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Beijing&aqi=yes`);
        const tokyo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tokyo&aqi=yes`);
        const newDelhi = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=New Delhi&aqi=yes`);
        const cairo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Cairo&aqi=yes`);
        const saoPaolo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Sao Paolo&aqi=yes`);
        const bangkok = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Bangkok&aqi=yes`);
        
        return Promise.all([newYork, losAngeles, london, berlin, paris, beijing, tokyo, newDelhi, cairo, saoPaolo, bangkok]);

    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    getCurrentAirQuality,
    getDefaultAirQuality
}