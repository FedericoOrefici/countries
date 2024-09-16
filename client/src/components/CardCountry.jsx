import { useEffect } from "react";
import useCountriesInfo from "../hooks/useAllCountries";
import { useNavigate } from 'react-router-dom' 

const CardCountry = () => {
  
  const { countries, loading, error, fetchCountriesInfo } = useCountriesInfo();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCountriesInfo();
  }, []);

  if (loading) return <p className="w-[100%] h-[100%] text-center font-bold flex items-center justify-center">Loading...</p>;
  if (error) return <p className="w-[100%] h-[100%] text-center font-bold">Error: {error.message}</p>;
  if (!countries) return <p className="w-[100%] h-[100%] text-center font-bold">No countries found</p>;

  const handleSearchCountry = (countryCode) => {
    navigate(`/countries/${countryCode}`)
  };

  return (
    <>
      {countries?.map((country) => {
        return (
          <div
            key={country.countryCode}
            onClick={() => handleSearchCountry(country.countryCode)}
            className="w-[100%] h-[200px] border-[3px] rounded-[10px] border-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-700"
          >
            <h2 className="text-[20px]">{country.name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default CardCountry;
