import Title from "../components/Title";
import Selector from "../components/Selector";
import Results from "../components/Results";

const TopPage = ({countriesJson, setCountry, getCountryData, countryData}) => {
    return (
        <div className="top-page-container">
            <div>
                <Title />
                <Selector
                    countriesJson={countriesJson}
                    setCountry={setCountry}
                    getCountryData={getCountryData}
                    countryData={countryData}
                />
                <Results countryData={countryData}/>
            </div>
        </div>
    );
};

export default TopPage;