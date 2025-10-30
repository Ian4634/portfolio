import CoachIntro from "./components/coachIntro/CoachIntro";
import VideoSection from "./components/video/VideoSection";
import './SnowboardBody.css';
function SnowboardBody(){
    return (
        <div className="snowboard-body-div">
            <VideoSection />

            <CoachIntro />
        </div>
    )
}



export default SnowboardBody;