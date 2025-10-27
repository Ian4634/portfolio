import getLang from '../../utils/getLang';
import './DisplayItem.css';

function DisplayItem({language, imgSrc, title}){
    return (
        <div className="display-item">
            <div className="display-image-container">
                
                <img className="display-image" src={imgSrc} alt={imgSrc} />
                <div className="title">{getLang(language, title)}</div>
            </div>
            
        </div>
    );
}

export default DisplayItem;