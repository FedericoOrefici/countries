import { useEffect } from "react";
import useCountryDetail from "../hooks/useCountryDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const CountryDetail = () => {
  const { id } = useParams();
  const { country, loading, error, fetchCountry } = useCountryDetail(id);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCountry();
  }, [id]);

  let populationData = country?.population?.populationCounts;

  const handleSearchCountry = (countryCode) => {
    navigate(`/countries/${countryCode}`);
  };

  if (loading)
    return (
      <p className="w-[100%] h-[100vh] text-center font-bold flex items-center justify-center text-white">
        Loading...
      </p>
    );
  if (error)
    return (
      <div className="w-[100%] h-[100vh] text-center text-white flex flex-col items-center justify-center gap-4">
        <span>Country not found</span>
        <button onClick={() => navigate('/')} className="bg-slate-600 rounded p-2 hover:bg-slate-700">Back to HOME</button>
      </div>
    );
  if (!country)
    return (
      <p className="w-[100%] h-[100vh] text-center font-bold text-white">
        No countries found
      </p>
    );

  return (
    <div className="w-[80%] h-[100%] flex p-4 flex-col gap-4">
      <button
        className="bg-slate-50 hover:bg-slate-500 hover:text-white w-[120px] p-2 rounded text-black"
        onClick={() => navigate("/")}
      >
        Back to HOME
      </button>
      <p className="text-2xl">{country?.commonName}</p>
      <div className="flex flex-col gap-4 sm:w-[50%]">
        <img className="w-[70%]" src={country?.flag} />
        <BarChart
          style={{ backgroundColor: "white" }}
          width={500}
          height={300}
          data={populationData}
          barSize={100}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <XAxis dataKey="year" />
          <YAxis dataKey="value" name="population"/>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>

      <div className="flex flex-col gap-6 justify-center text-white p-2 rounded w-[80%]">
        {country?.borders && country.borders.length > 0 ? (
          country.borders.map((ctBdr) => {
            return (
              <div key={ctBdr.countryCode}>
                <button
                  className="hover:bg-slate-700 p-2 rounded"
                  onClick={() => handleSearchCountry(ctBdr.countryCode)}
                >
                  {ctBdr.commonName}
                </button>
              </div>
            );
          })
        ) : (
          <span>No border´s country to show</span>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
