const Selector = ({ countriesJson, setCountry, getCountryData }) => {
    return (
        <div>
            <p>セレクター</p>
            <select onChange={ e => setCountry(e.target.value) }>
                <option>Select A Country</option>
                { countriesJson.map((country, index) =>
                    <option key={ index } value={ country.Slug }>{ country.Country }</option>
                )}
            </select>

            <button onClick={ getCountryData }>
                Get Data
            </button>
        </div>
    );
};

export default Selector;