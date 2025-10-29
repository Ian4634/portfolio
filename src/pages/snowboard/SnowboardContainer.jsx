import PageHeader from "../../components/PageHeader/PageHeader";
import SnowboardBody from "./SnowboardBody";
import "./SnowboardContainer.css";

function SnowboardContainer({language}){
    return (
        <div className="snowboard-container">
            <PageHeader language={language} page="snowboard" imageSrc="/images/snowboard/snowboarding.JPG"/>
            <SnowboardBody />
        </div>
    )
}

export default SnowboardContainer;