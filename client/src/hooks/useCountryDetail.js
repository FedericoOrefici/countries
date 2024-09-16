import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const useCountryDetail = (id) => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    const fetchCountry = async () => {
      setLoading(true);   
      try {
        const response = await axiosInstance.get(`/api/countries/${id}`);
        setCountry(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

  return { 
    country, 
    loading, 
    error, 
    fetchCountry 
  };
};

export default useCountryDetail;
