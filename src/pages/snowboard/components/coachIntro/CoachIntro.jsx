import { useState } from "react";
import "./CoachIntro.css"; // we'll add CSS below

import getLang from "../../../../utils/getLang";

function InstructorInfo({language})  {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="coach-intro-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "intro" ? "tab active" : "tab"}
          onClick={() => setActiveTab("intro")}
        >
          {getLang(language, "CoachIntro")}
        </button>
        <button
          className={activeTab === "schedule" ? "tab active" : "tab"}
          onClick={() => setActiveTab("schedule")}
        >
          {getLang(language, "Schedule")}
        </button>
        {/* <button
          className={activeTab === "reviews" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reviews")}
        >
          學員評價
        </button> */}
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {activeTab === "intro" && (
          <p>
            {getLang(language, "CoachIntroText1")} <br /><br />
            {getLang(language, "CoachIntroText2")}
          </p>
        )}
        {activeTab === "schedule" && <p>這裡可以放課表內容。</p>}
        {activeTab === "reviews" && <p>這裡可以放學員評價。</p>}
      </div>
    </div>
  );
};

export default InstructorInfo;
