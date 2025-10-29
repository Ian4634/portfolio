import PageHeader from "../../components/PageHeader/PageHeader";
import HomeBody from "./HomeBody";
import './HomeContainer.css';
function HomeContainer({language}){
    return (
        <div className="home-container">
            <PageHeader language={language} page="home" imageSrc="/images/portfolioIMG.JPG"/>
            <HomeBody language={language}/>
        </div>
    ); 
}

export default HomeContainer;