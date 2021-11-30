import React, { Component } from "react";
import Question from "./Question";
import Contents from "./Contents";
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
            <option value="korea">🌐 한국어</option>
            <option value="english">🌐 english</option>
          </select>
        </div>
        <div className="loginBtn">로그인</div>
      </div>
    </header>
  );
}
export const Btn = function Btn () {
  return (
    <>
    <div className="emailBox">
          <p>
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </p>
          <input type="text" required className="inputText"/>
          <span class="floating-label">이메일을 입력해주세요</span>
          <button>시작하기</button>
        </div>
    </>
  )
}

function Intro() {
  return (
    <div className="intro">
      <div className="introText">
        <div className="mainText">
          영화, TV 프로그램을 <br /> 무제한으로
        </div>
        <div className="subText">
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
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
        title="TV로 즐기세요."
        subText="스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요."
        position="left"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      ></Contents>
      <Contents
      index="2"
        title="즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요."
        subText="간편하게 저장하고 빈틈없이 즐겨보세요."
        position="rigth"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      ></Contents>
      <Contents
      index="3"
        title="다양한 디바이스에서 시청하세요."
        subText="각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다."
        position="left"
        imgUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        videoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      ></Contents>
      <Contents
      index="4"
        title="어린이 전용 프로필을 만들어 보세요."
        subText="자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다."
        position="rigth"
        imgUrl="https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf"
      ></Contents>
      <Question></Question>
      <Footer />
    </>
  );
}

export default Main;