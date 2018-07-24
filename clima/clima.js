/* NodeJS - Pablo Tilotta */

const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=714a861d265f90fcf31047b6e47d0fa1`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
