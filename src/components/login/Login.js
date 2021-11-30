import React from "react";
import Footer from "../main/Footer";
import "./login.scss";

function LoginCon() {
  return (
    <>
      <div className="loginBox">
        <h3>로그인</h3>
        <div className="infoBox">
          <div>
            <input type="text" />
            <span className="email">이메일 주소 또는 전화번호</span>
          </div>
          <div>
            <input type="text" />
            <span className="password">비밀번호</span>
          </div>
        </div>
        <button>
          <a href="/" style={{ color: "white" }}>
            로그인
          </a>
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
