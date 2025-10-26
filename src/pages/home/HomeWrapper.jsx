import HomeContainer from "./HomeContainer";
import Header from "../../components/header/Header";
import './HomeWrapper.css';
function HomeWrapper(){
    return (
        <div className="home-wrapper">
            <Header/>
            <HomeContainer/>
        </div>
    );
}

export default HomeWrapper;