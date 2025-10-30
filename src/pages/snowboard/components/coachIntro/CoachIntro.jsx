import { useState } from "react";
import "./CoachIntro.css"; // we'll add CSS below

const InstructorInfo = () => {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="instructor-container">
      {/* Navigation Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "intro" ? "tab active" : "tab"}
          onClick={() => setActiveTab("intro")}
        >
          介紹
        </button>
        <button
          className={activeTab === "schedule" ? "tab active" : "tab"}
          onClick={() => setActiveTab("schedule")}
        >
          課表
        </button>
        <button
          className={activeTab === "reviews" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reviews")}
        >
          學員評價
        </button>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {activeTab === "intro" && (
          <p>
            Hi! 我是Hao。自2020年在澳洲開始滑雪從此愛上這個雪白世界，擅長由淺入深系統化教學，
            帶你從0基礎到流暢換刃，進階者跑山刷道走樹林，用安全並有效率的方式享雪。
            不論是小孩還是大人都可以體驗到滑雪的樂趣，相信我滑雪會上癮！
            不管你想學單板還是雙板，25/26來北海道找我一起探索日本的粉雪天堂吧！
          </p>
        )}
        {activeTab === "schedule" && <p>這裡可以放課表內容。</p>}
        {activeTab === "reviews" && <p>這裡可以放學員評價。</p>}
      </div>
    </div>
  );
};

export default InstructorInfo;
