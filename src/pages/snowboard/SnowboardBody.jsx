import './SnowboardBody.css';
function SnowboardBody(){
    return (
        <div className="snowboard-body-div">
            <div className="video-container">
                <div className="video-div">
                    <video autoPlay loop muted>
                        <source src="/videos/wildcat.MOV"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="video-div">
                    <video autoPlay loop muted>
                        <source src="/videos/back360.MOV"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
            
        </div>
    )
}



export default SnowboardBody;