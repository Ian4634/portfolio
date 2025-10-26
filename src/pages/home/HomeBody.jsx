import './HomeBody.css'

import DisplayItem from '../../components/DisplayItem/DisplayItem';
function HomeBody({language}){
    return (
        <div className="home-body-div">
            <div className="middle-section-container">
                <div className="provided-service-container">
                    <span className="provided-service"><span className="work">work</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A collection of </span>
                    <span className="provided-service">services I provide</span>
                </div>
                
                <span className="service-introduction">I have worked in all industries and contributed to participated works.</span>
            </div>

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