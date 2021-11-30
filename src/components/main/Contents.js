import React from "react";
import "./main.scss";

function Contents({ title, subText, position, imgUrl, videoUrl, index }) {
  const pointImg = () => {
    if (index === "2") {
      return (
        <>
          <div>
            <div>
              <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"></img>
            </div>
            <div>
              <h4>기묘한 이야기</h4>
              <p>저장 중...</p>
            </div>
            <div>
              <img alt=""  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"></img>
            </div>
          </div>
        </>
      );
    }
  };
  const renderPosition = () => {
    if (position === "left") {
      let videoStyle = "";
      if (index === "3") {
        videoStyle = "small";
      }
      return (
        <>
          <div className="textBox">
            <div className="conText">{title}</div>
            <div className="subText">{subText}</div>
          </div>
          <div className="imgBox" style={{ marginLeft: "40px" }}>
            <div style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <video className={videoStyle} autoPlay loop muted>
              <source src={videoUrl}></source>
            </video>
          </div>
        </>
      );
    } else {
      if (index === "2") {
        return (
          <>
            <div
              className="imgBox"
              style={{
                marginRight: "40px",
                backgroundImage: `url(${imgUrl})`,
                position: "relative",
              }}
            >
              <div className="pointImg">{pointImg()}</div>
            </div>
            <div className="textBox">
              <div className="conText">{title}</div>
              <div className="subText">{subText}</div>
            </div>
          </>
        );
      }
      return (
        <>
          <div
            className="imgBox"
            style={{ marginRight: "40px", backgroundImage: `url(${imgUrl})` }}
          ></div>
          <div className="textBox">
            <div className="conText">{title}</div>
            <div className="subText">{subText}</div>
          </div>
        </>
      );
    }
  };

  return <div className="contentBox">{renderPosition()}</div>;
}

export default Contents;
