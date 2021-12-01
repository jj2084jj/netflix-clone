import React from "react";
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
      style={{height:"60px"}}
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
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        style={{ marginRight: "30px", cursor: "pointer" }}
      />
      </div>
    </HeaderContainer>
  );
}

export default Header;
