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
        // top 50 most populated cities in the world
        const tokyo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tokyo&aqi=yes`);
        const delhi = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Delhi&aqi=yes`);
        const shanghai = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Shanghai&aqi=yes`);
        const dhaka = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=dhaka&aqi=yes`);
        const saoPaulo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Sao Paulo&aqi=yes`);
        const mexicoCity = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Mexico City&aqi=yes`);
        const cairo = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Cairo&aqi=yes`);
        const beijing = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Beijing&aqi=yes`);
        const mumbai = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Mumbai&aqi=yes`);
        const osaka = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Osaka&aqi=yes`);
        const chongqing = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chongqing&aqi=yes`);
        const karachi = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Karachi&aqi=yes`);
        const istanbul = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Istanbul&aqi=yes`);
        const kinshasa = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Kinshasa&aqi=yes`);
        const lagos = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Lagos&aqi=yes`);
        const buenosAires = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Buenos Aires&aqi=yes`);
        const kolkata = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Kolkata&aqi=yes`);
        const manila = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Manila&aqi=yes`);
        const tianjin = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tianjin&aqi=yes`);
        const guangzhou = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Guangzhou&aqi=yes`);
        const rioDeJaneiro = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Rio De Janeiro&aqi=yes`);
        const lahore = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Lahore&aqi=yes`);
        const bangalore = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Bangalore&aqi=yes`);
        const shenzhen = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Shenzhen&aqi=yes`);
        const moscow = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Moscow&aqi=yes`);
        const chennai = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chennai&aqi=yes`);
        const bogota = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Bogota&aqi=yes`);
        const paris = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Paris&aqi=yes`);
        const jakarta = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Jakarta&aqi=yes`);
        const lima = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Lima&aqi=yes`);
        const bangkok = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Bangkok&aqi=yes`);
        const hyderabad = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Hyderabad&aqi=yes`);
        const seoul = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Seoul&aqi=yes`);
        const nagoya = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Nagoya&aqi=yes`);
        const london = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London&aqi=yes`);
        const chengdu = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chengdu&aqi=yes`);
        const nanjing = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Nanjing&aqi=yes`);
        const tehran = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tehran&aqi=yes`);
        const hochiminhCity = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Ho Chi Minh City&aqi=yes`);
        const luanda = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Luanda&aqi=yes`);
        const wuhan = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Wuhan&aqi=yes`);
        const xiAnShaanxi = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Xi An Shaanxi&aqi=yes`);
        const ahmedabad = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Ahmedabad&aqi=yes`);
        const kualaLumpur = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Kuala Lumpur&aqi=yes`);
        const newYorkCity = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=New York City&aqi=yes`);
        const hangzhou = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Hangzhou&aqi=yes`);
        const surat = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Surat&aqi=yes`);
        const suzhou = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Suzhou&aqi=yes`);
        const hongKong = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Hong Kong&aqi=yes`);
        const riyadh = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Riyadh&aqi=yes`);

        // US metro ranking
        const losAngeles = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Los Angeles&aqi=yes`);
        const chicago = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Chicago&aqi=yes`);
        const houston = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Houston&aqi=yes`);
        const dallasFortWorth = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Dallas-Fort Worth&aqi=yes`);
        const miami = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Miami&aqi=yes`);
        const atlanta = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Atlanta&aqi=yes`);
        const philadelphia = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Philadelphia&aqi=yes`);
        const washingtonDC = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Washington DC&aqi=yes`);
        const phoenix = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Phoenix&aqi=yes`);
        const boston = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Boston&aqi=yes`);
        const detroit = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Detroit&aqi=yes`);
        const seattle = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Seattle&aqi=yes`);
        const sanFrancisco = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=San Franscisco&aqi=yes`);
        const sanDiego = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=San Diego&aqi=yes`);
        const minneapolis = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Minneapolis&aqi=yes`);
        const tampa = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tampa&aqi=yes`);
        const denver = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Denver&aqi=yes`);
        const lasVegas = axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Las Vegas&aqi=yes`);

        return Promise.all([
            tokyo,
            delhi,
            shanghai,
            dhaka,
            saoPaulo,
            mexicoCity,
            cairo,
            beijing,
            mumbai,
            osaka,
            chongqing,
            karachi,
            istanbul,
            kinshasa,
            lagos,
            buenosAires,
            kolkata,
            manila,
            tianjin,
            guangzhou,
            rioDeJaneiro,
            lahore,
            bangalore,
            shenzhen,
            moscow,
            chennai,
            bogota,
            paris,
            jakarta,
            lima,
            bangkok,
            hyderabad,
            seoul,
            nagoya,
            london,
            chengdu,
            nanjing,
            tehran,
            hochiminhCity,
            luanda,
            wuhan,
            xiAnShaanxi,
            ahmedabad,
            kualaLumpur,
            newYorkCity,
            hangzhou,
            surat,
            suzhou,
            hongKong,
            riyadh,
            losAngeles,
            chicago,
            houston,
            dallasFortWorth,
            miami,
            atlanta,
            philadelphia,
            washingtonDC,
            phoenix,
            boston,
            detroit,
            seattle,
            sanFrancisco,
            sanDiego,
            minneapolis,
            tampa,
            denver,
            lasVegas
        ]);


    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    getCurrentAirQuality,
    getDefaultAirQuality
}