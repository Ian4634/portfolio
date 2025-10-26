import {useState} from "react";
import HomeContainer from "./HomeContainer";
import Header from "../../components/header/Header";
import './PageWrapper.css';
function PageWrapper(){
    const [language, setLanguage] = useState('en');
    return (
        <div className="home-wrapper">
            <Header language={language} setLanguage={setLanguage}/>
            <HomeContainer language={language}/>
        </div>
    );
}

export default PageWrapper;