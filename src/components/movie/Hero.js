import React from 'react';
import reactDom from 'react-dom';
import { BsFillPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";

import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle
} from './Hero.styles';

function Hero({movie}) {
  // console.log(movie);
  return(
    <HeroContainer background={movie?.backdrop_path}>
      <div style={{width:"1000px"}}>
      <HeroTitle>{movie?.name}</HeroTitle>
      </div>
      <div style={{fontSize:"3rem",fontWeight:"bold",marginLeft:"2.5rem"}}>
        <img src="/public/top10.png" alt=""></img>
        오늘의 영화 순위 3위</div>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton style={{backgroundColor:"white"}}><BsFillPlayFill /> 재생</HeroButton>
      <HeroButton style={{backgroundColor:"rgba(109,109,110,0.7)",color:"white"}}><GrCircleInformation/> 상세 정보</HeroButton>
    </HeroContainer>
  )
}

export default Hero