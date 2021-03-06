import React from "react";
import Question from "./Question";
import Contents from "./Contents";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./main.scss";

function Header() {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <div>
        <div>
          <select name="korea">
            <option value="korea">π νκ΅­μ΄</option>
            <option value="english">π english</option>
          </select>
        </div>
        <div className="loginBtn">
          <Link to="/login" style={{ color: "white" }}>
            λ‘κ·ΈμΈ
          </Link>
        </div>
      </div>
    </header>
  );
}
export const Btn = function Btn() {
  return (
    <>
      <div className="emailBox">
        <p>
          μμ²­ν  μ€λΉκ° λμ¨λμ? λ©€λ²μ­μ λ±λ‘νκ±°λ μ¬μμνλ €λ©΄ μ΄λ©μΌ μ£Όμλ₯Ό
          μλ ₯νμΈμ.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <input type="text" required className="inputText" />
            <span className="floating-label">μ΄λ©μΌ μ£Όμ</span>
          </div>
          <button>
            <Link to="/login" style={{ color: "white" }}>
              μμνκΈ°
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

function Intro() {
  return (
    <div className="intro">
      <div className="introText">
        <div className="mainText">
          μν, TV νλ‘κ·Έλ¨μ <br /> λ¬΄μ νμΌλ‘
        </div>
        <div className="subText">
          λ€μν λλ°μ΄μ€μμ μμ²­νμΈμ. μΈμ λ  ν΄μ§νμ€ μ μμ΅λλ€.
        </div>
        <Btn />
      </div>
      <div className="mainImg">
        <div className="bg"></div>
        <div></div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Contents
        index="1"
        title="TVλ‘ μ¦κΈ°μΈμ."
        subText="μ€λ§νΈ TV, PlayStation, Xbox, Chromecast, Apple TV, λΈλ£¨λ μ΄ νλ μ΄μ΄ λ± λ€μν λλ°μ΄μ€μμ μμ²­νμΈμ."
        position="left"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      ></Contents>
      <Contents
        index="2"
        title="μ¦κ²¨ λ³΄λ μ½νμΈ λ₯Ό μ μ₯ν΄ μ€νλΌμΈμΌλ‘ μμ²­νμΈμ."
        subText="κ°νΈνκ² μ μ₯νκ³  λΉνμμ΄ μ¦κ²¨λ³΄μΈμ."
        position="rigth"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      ></Contents>
      <Contents
        index="3"
        title="λ€μν λλ°μ΄μ€μμ μμ²­νμΈμ."
        subText="κ°μ’ μνμ TV νλ‘κ·Έλ¨μ μ€λ§νΈν°, νλΈλ¦Ώ, λΈνΈλΆ, TVμμ λ¬΄μ νμΌλ‘ μ€νΈλ¦¬λ°νμΈμ. μΆκ° μκΈμ΄ μ ν μμ΅λλ€."
        position="left"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      ></Contents>
      <Contents
        index="4"
        title="μ΄λ¦°μ΄ μ μ© νλ‘νμ λ§λ€μ΄ λ³΄μΈμ."
        subText="μκΈ°λ§μ κ³΅κ°μμ μ’μνλ μΊλ¦­ν°μ μ¦κΈ°λ μ λλ λͺ¨ν. μλμκ² μ΄ νΉλ³ν κ²½νμ μ λ¬ΌνμΈμ. λ·νλ¦­μ€ νμμ΄λΌλ©΄ λ¬΄λ£μλλ€."
        position="rigth"
        imgUrl="https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
      ></Contents>
      <Question></Question>
      <Footer />
    </>
  );
}

export default Main;
