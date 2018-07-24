/* NodeJS - Pablo Tilotta */

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `\n\nLas coordenadas de ${ coors.direccion } son :\n\n
       Latitud >${ coors.lat } - Longitud > ${ coors.lng } \n\nY la temperatura actual es de ${temp}`

    } catch (e) {
        return `No se pudo determinar la información de ${ argv.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));
