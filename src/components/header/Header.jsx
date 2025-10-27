import {Link} from 'react-router'

import getLang from '../../utils/getLang';

import './Header.css';
function Header({language, setLanguage}){

    function languageToggle(){
        if(language === "en"){
            setLanguage("zh");
        }else{
            setLanguage("en");
        }
    }
    return (
        <div className="header-container">
            <div className="name-section">{getLang(language, "name")}</div>
            <div className="button-section">
                <nav>
                    <Link to="/">{getLang(language, "home")}</Link>
                    <Link to="/">{getLang(language, "snowboard")}</Link>
                    <Link to="/">{getLang(language, "surfing")}</Link>
                    <Link to="/">{getLang(language, "table tennis")}</Link>
                    <Link to="/">{getLang(language, "software development")}</Link>
                </nav>
            </div>
            <div className="language-section">
                <button onClick={languageToggle}>{getLang(language, "languageButtonText")}</button>
            </div>
        </div>
    );
}

export default Header;