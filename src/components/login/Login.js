import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../main/Footer";
import "./login.scss";

export const fetchLogin = async({ email, pw}) => {
  const response = await fetch("http://localhost:4000/posts");
  if(response.ok){
    const users = await response.json();
    const user = users.find((user)=>user.email === email);
    
    if(!user || user.password !== pw){
      throw new Error("계정을 다시 확인해주세요");
    }

    return user;
  }
  throw new Error("서버 통신이 원할하지 않습니다.");
}

function LoginCon() {
  const [email,setEmail] = useState('')
  const [pw,setPw] = useState('')
  const [userInfo,setUser] = useState({
    email:"",
    pw:"",
  })
  const navigate = useNavigate();
  
  const onSubmitAccount = async () => {
    try {
     await setUser({
       email:email,
       pw : pw
     })
      const user = await fetchLogin(userInfo);
      setUser(user);
      navigate('/');
    } catch (error) {
      window.alert(error);
    }
  };

  

  const inputEmail= (e) =>{
    setEmail(e.target.value)
    setUser({email:e.target.value,pw:pw})
  }
  const inputPass= (e) =>{
    setPw(e.target.value)
    setUser({email:email,pw:e.target.value})
  }

  return (
    <>
      <div className="loginBox">
        <h3>로그인</h3>
        <div className="infoBox">
          <div>
            <input type="text" value={email} onChange={inputEmail}/>
            <span className="email">이메일 주소 또는 전화번호</span>
          </div>
          <div>
            <input type="text"  value={pw} onChange={inputPass}/>
            <span className="password">비밀번호</span>
          </div>
        </div>
          <button onClick={onSubmitAccount} style={{ color: "white" }}>
            로그인
          </button>
        <div className="checkBoxInput">
          <div>
            <input type="checkbox" /> 로그인 정보 저장
          </div>
          <div>
            <a href="/">도움이 필요하신가요?</a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "60px",
            fontSize: "1.6rem",
            color: "white",
          }}
        >
          Netflix 회원이 아니신가요? <a href="/">지금 가입하세요.</a>
        </div>
        <div>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
          확인합니다.{" "}
          <a href="/" style={{ display: "inline-block", color: "#0071eb" }}>
            {" "}
            자세히 알아보기
          </a>
        </div>
      </div>
    </>
  );
}

function Login() {
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <LoginCon></LoginCon>
      <div className="footerBg">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Login;
