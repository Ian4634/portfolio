import './HomeBody.css'
import getLang from '../../utils/getLang';
import DisplayItem from '../../components/DisplayItem/DisplayItem';
function HomeBody({language}){
    return (
        <div className="home-body-div">
            <div className="middle-section-container">
                <div className="provided-service-container">
                    <span className="provided-service"><span className="work">{getLang(language, "work")}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{getLang(language, "aCollectionOf")}</span>
                    <span className="provided-service">{getLang(language, "servicesIProvide")}</span>
                </div>
                
                <span className="service-introduction">{getLang(language, "serviceIntro")}</span>
            </div>

            <div className="display-section-container">
                <DisplayItem language={language} title="SnowboardInstructor" imgSrc="/images/snowboard/snowboarding.JPG"/>
                <DisplayItem language={language} title="SurfInstructor" imgSrc="/images/surf/surfing.JPG"/>
                <DisplayItem language={language} title="TableTennis Coach" imgSrc="/images/tabletennis/tabletennis.JPG"/>
                <DisplayItem language={language} title="SoftwareDeveloper" imgSrc="/images/SWE/portfolioIMG.JPG"/>
            </div>
        </div>
    );
}

export default HomeBody;