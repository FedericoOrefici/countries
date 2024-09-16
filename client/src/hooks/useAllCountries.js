import axiosInstance from "../api/axiosInstance";
import { useState } from "react";

const useCountriesInfo = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCountriesInfo = async () => {
        setLoading(true);        
        try {
            const response = await axiosInstance.get('/api/countries')
            setCountries(response.data);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }
    return {
        countries,
        loading,
        error,
        fetchCountriesInfo,
    }
}

export default useCountriesInfo;