import './HomeBody.css'

import DisplayItem from '../../components/DisplayItem/DisplayItem';
function HomeBody({language}){
    return (
        <div className="home-body-div">
            <div className="display-section-container">
                <DisplayItem language={language} title="Snowboard Instructor" imgSrc="/images/snowboarding.JPG"/>
                <DisplayItem language={language} title="Surf Instructor" imgSrc="/images/surfing.JPG"/>
                <DisplayItem language={language} title="Table Tennis Coach" imgSrc="/images/tabletennis.JPG"/>
                <DisplayItem language={language} title="Software Developer" imgSrc="/images/portfolioIMG.JPG"/>
            </div>
        </div>
    );
}

export default HomeBody;