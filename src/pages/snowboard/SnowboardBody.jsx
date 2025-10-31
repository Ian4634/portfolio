import CoachIntro from "./components/coachIntro/CoachIntro";
import VideoSection from "./components/video/VideoSection";
import './SnowboardBody.css';
function SnowboardBody({language}) {
    return (
        <div className="snowboard-body-div">
            <VideoSection />

            <CoachIntro language={language}/>
        </div>
    )
}



export default SnowboardBody;