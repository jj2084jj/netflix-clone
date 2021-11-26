import React from "react";
import { useEffect , useState } from "react/cjs/react.development";
import { HeaderContainer } from "./Header.styles";

function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(()=>{
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setIsDark(true);
        } else setIsDark(false);
      });
  
      return () => {
        window.removeEventListener("scroll");
      };
  },[])
  return (
    <HeaderContainer dark={isDark}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        style={{marginRight:"30px",cursor:"pointer"}}
      />
    </HeaderContainer>
  );
}

export default Header;