const countriesService = require('../services/countriesServices');

exports.getAllCountries = async (req, res) => {
    try {
        const countries = await countriesService.getAllCountries();
        if(!countries){
            return res.status(404).json({ message: 'Countries not found' })
        }
        res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getCountryById = async (req, res) => {
    const { id } = req.params;
    try {
        const countryId = await countriesService.getCountryById(id); 
        if(!countryId){
            return res.status(404).json({ message: 'Country not found' })
        }
        res.status(200).json(countryId)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}