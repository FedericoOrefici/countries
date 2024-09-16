const axios = require('axios');
require('dotenv').config();

// const API_URL = "https://date.nager.at/api/v3/AvailableCountries";
// const API_URL_BY_ID = "https://date.nager.at/api/v3/CountryInfo";
// const API_FLAGS = "https://countriesnow.space/api/v0.1/countries/flag/images";
// const API_POPULATION = "https://countriesnow.space/api/v0.1/countries/population";

exports.getAllCountries = async () => {
    try {
        const response = await axios.get(process.env.VITE_API_URL);
        return response.data;
    } catch (error) {
        console.log(error);
        
        throw new Error(`Error fetching all countries: ${error.message}`);
    }
}

exports.getCountryById = async (iso2) => {
    
    try {
        
        const countryResponse = await axios.get(`${process.env.VITE_API_URL_BY_ID}/${iso2}`);
        const countryData = countryResponse.data;

        const flagsResponse = await axios.get(process.env.VITE_API_FLAGS);
        const flagsData = flagsResponse.data.data;

        const populationResponse = await axios.get(process.env.VITE_API_POPULATION);
        const populationData = populationResponse.data.data;

        let population = []
        let flag = "";

        for (let _flag of flagsData) {
            if(_flag.iso2 === iso2){
                for (let _population of populationData) {
                    if(_flag.iso3 === _population.iso3){
                        population = _population;
                        flag = _flag.flag;
                        break;
                    }
                }
            }
        }
       
        return {
            ...countryData,
            flag,
            population,
        };

    } catch (error) {
        console.log(error);
        throw new Error(`Error while getting country details for ${id}: ${error.message}`);
    }
};
