import HomeHeader from "./HomeHeader"
import HomeBody from "./HomeBody";
import './HomeContainer.css';
function HomeContainer({language}){
    return (
        <div className="home-container">
            <HomeHeader language={language}/>
            <HomeBody language={language}/>
        </div>
    ); 
}

export default HomeContainer;