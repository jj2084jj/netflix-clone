import React from "react";
import UserInfo from "../modal/userInfo";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { useEffect, useState } from "react/cjs/react.development";
import { HeaderContainer } from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <HeaderContainer
      dark={isDark}
      style={{height:"68px"}}
    >
      <div className="center">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt=""
        />
        <div>
          <ul>
            <li>
              <a href="/">홈</a>
            </li>
            <li>
              <a href="/">TV프로그램</a>
            </li>
            <li>
              <a href="/">영화</a>
            </li>
            <li>
              <a href="/">NEW! 요즘 대세 콘텐츠</a>
            </li>
            <li>
              <a href="/">내가 찜한 콘텐츠</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <FiSearch style={{width:"20px",height:"20px",marginRight:"20px"}}></FiSearch>
        
        <Link to="/login" style={{width:"30px",fontSize:"15px",marginRight:"20px",color:"white",fontWeight:"bold"}}>키즈</Link> 
        <BsBell style={{width:"20px",height:"20px",marginRight:"20px"}}></BsBell>
      <UserInfo></UserInfo>
      </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
