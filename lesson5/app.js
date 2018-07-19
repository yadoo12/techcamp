'use strict';

const axios = require('axios');
const BASE_URL = `http://weather.livedoor.com/forecast/webservice/json/v1?city=270000`;

const main = async () =>{
    try {
        const res = await axios.get(BASE_URL);
        console.log(res.data);
   } catch (error) {
       console.log(error);
   }
}
main();
