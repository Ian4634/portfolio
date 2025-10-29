

import {Link} from "react-router"
import getLang from '../../utils/getLang';

import './PageHeader.css'
function PageHeader({language, page, imageSrc}){
    
    return (
        <div className="home-header-container">
            <div className="portfolio-img">
                <img src={imageSrc} alt="" />
            </div>
            <div className="message-container">
                <div className="stand-out-message-div">
                    <span>{getLang(language, page+'StandOutMessageTop')}</span>
                    <span>{getLang(language, page+'StandOutMessageBottom')}</span>
                </div>

                <div className="slogan-message">{getLang(language, page+'Slogan')}</div>

                <div className="button-container">
                    <Link to="youtube.com">
                        <button className="contact-btn">{getLang(language, 'contactMe')}</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
}

export default PageHeader;