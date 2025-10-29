import {Link} from 'react-router';
import getLang from '../../utils/getLang';
import './DisplayItem.css';

function DisplayItem({language, imgSrc, title}){

    return (
        <Link to={title.replace(/ +/g, "")} className="display-item">
            <div className="display-image-container">
                
                <img className="display-image" src={imgSrc} alt={imgSrc} />
                <div className="title">{getLang(language, title)}</div>
            </div>
            
        </Link>
    );
}

export default DisplayItem;