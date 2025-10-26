import HomeHeader from "./HomeHeader"
import HomeBody from "./HomeBody";
import './HomeContainer.css';
function HomeContainer(){
    return (
        <div className="home-container">
            <HomeHeader/>
            <HomeBody/>
        </div>
    ); 
}

export default HomeContainer;