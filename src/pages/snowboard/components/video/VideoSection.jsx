import './VideoSection.css';
function VideoSection(){
    return (
        <div className="video-container">
            <div className="video-div">
                <video autoPlay loop muted  playsInline webkit-playsinline="true">
                    <source src="/portfolio/videos/wildcat.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-div">
                <video autoPlay loop muted playsInline webkit-playsinline="true">
                    <source src="/portfolio/videos/back360.mp4"/>
                    Your browser does not support the video tag.
                </video>
                
            </div>
            <div className="video-div">
                <video autoPlay loop muted  playsInline webkit-playsinline="true">
                    <source src="/portfolio/videos/spkShotVid.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-div">
                <video autoPlay loop muted playsInline webkit-playsinline="true">
                    <source src="/portfolio/videos/back720Obuse.mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}


export default VideoSection;