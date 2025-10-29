import PageHeader from "../../components/PageHeader/PageHeader";
import "./SnowboardContainer.css";

function SnowboardContainer({language}){
    return (
        <div className="snowboard-container">
            <PageHeader language={language} page="snowboard" imageSrc="/images/snowboard/snowboarding.JPG"/>

        </div>
    )
}

export default SnowboardContainer;