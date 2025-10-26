import './DisplayItem.css';

function DisplayItem({language, imgSrc, title}){
    return (
        <div className="display-item">
            <div className="display-image-container">
                <div className="title">{title}</div>
                <img className="display-image" src={imgSrc} alt={imgSrc} />
            </div>
            
        </div>
    );
}

export default DisplayItem;