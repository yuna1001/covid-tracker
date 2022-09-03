const Card = ({allCountriesData}) => {
    return (
        <div className="card-container">
            {allCountriesData.map((countryData, index) => 
                <div key={index} className="card">
                    <div>
                        <h2>{countryData.Country}</h2>
                        <p>新規感染者: <span>{countryData.NewConfirmed.toLocaleString()}</span></p>
                        <p>感染者総数: <span>{countryData.TotalConfirmed.toLocaleString()}</span></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
