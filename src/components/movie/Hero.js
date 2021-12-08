import React ,{useEffect} from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";


import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
  DetailBtn,
} from "./Hero.styles";

function Hero({ movie, video }) {
  useEffect(()=>{
  window.addEventListener("load", function () {
    let el = document.getElementById("mainVideo");
    setTimeout(function () {
      console.log(el)
      el.animate([{ opacity: "0" }], {
        duration: 5000,
        fill: "forwards",
      });
    }, 16000);
  });
  },[])
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          width: "100%",
          height: "100%",
          paddingLeft: "3vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "1000px" }}>
          <HeroTitle>{movie?.name}</HeroTitle>
        </div>
        <div
          style={{ fontSize: "3rem", fontWeight: "bold", marginLeft: "2.5rem",display:"flex",justifyContent:"left", alignItems:"center" }}
        >
          <img style={{ width:"50px",marginRight:"10px"}} src="/top10.png" alt=""></img>
    <div> 오늘의 영화 순위 5위</div>
        </div>
        <HeroDescription>{movie?.overview}</HeroDescription>
        <HeroButton style={{ backgroundColor: "white" }}>
          <BsFillPlayFill /> 재생
        </HeroButton>
        <DetailBtn
          style={{ backgroundColor: "rgba(109,109,110,0.7)", color: "white" }}
        >
          <GrCircleInformation /> 상세 정보
        </DetailBtn>

        {/* <div style={{width:"100%",height:"100%",backgroundColor:"red"ㄴ,position:"relative",left:0,top:0}}>ddd</div> */}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          height: "200px",
          left: "0",
          background: "linear-gradient(to top, #222 50%, transparent)",
          width: "100%",
          zIndex: "1",
        }}
      ></div>
      <HeroContainer background={movie?.backdrop_path}>
        <iframe
          id="mainVideo"
          height="100%"
          width="100%"
          style={{ position: "absolute", left: "0", top: "0", border: "none" }}
          src={`${video}?autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </HeroContainer>
    </>
  );
}

export default Hero;
