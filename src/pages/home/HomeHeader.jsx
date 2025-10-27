

import {Link} from "react-router"
import getLang from "../../utils/getLang";

import './HomeHeader.css'
function HomeHeader({language}){
    
    return (
        <div className="home-header-container">
            <div className="portfolio-img">
                <img src="/images/portfolioIMG.JPG" alt="" />
            </div>
            <div className="message-container">
                <div className="stand-out-message-div">
                    <span>{getLang(language, 'standOutMessageTop')}</span>
                    <span>{getLang(language, 'standOutMessageBottom')}</span>
                </div>

                <div className="slogan-message">{getLang(language, 'slogan')}</div>

                <div className="button-container">
                    <Link to="youtube.com">
                        <button className="contact-btn">contact me</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
}

export default HomeHeader;