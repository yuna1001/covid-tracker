import Title from "../components/Title";
import Card from "../components/Card";

const WorldPage = ({allCountriesData}) => {
    return (
        <div className="world-page-container">
            <Title />
            <Card allCountriesData={allCountriesData} />
        </div>
    )
};

export default WorldPage;