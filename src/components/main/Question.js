import React from "react";
import { IoMdClose } from "react-icons/io";
import { Btn } from "./Main";
import "./main.scss";

function QuestionItem({ title, text }) {
  return (
    <div style={{ marginBottom: "6px" }}>
      <div className="questionTitle">
        <div className="questionText">{title}</div>
        <IoMdClose onClick={()=>{}} style={{ fontSize: "35px",cursor:"pointer" }} />
      </div>
      {/* <p className="questionItemText">{text}</p> */}
    </div>
  );
}

function Question() {
  const item = [
    {
      title: "넷플릭스란 무엇인가요?",
      text: "넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. 저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.",
    },
    {
      title: "넷플릭스 요금은 얼마인가요?",
      text: "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.",
    },
    {
      title: "어디에서 시청할 수 있나요?",
      text: `"언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.

      iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요."`,
    },
    {
      title: "멤버십을 해지하려면 어떻게 하나요?",
      text: "넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.",
    },
  ];
  return (
    <div className="question">
      <div className="mainText">자주 묻는 질문</div>
      <div style={{ marginBottom: "60px" }}>
        <QuestionItem title={item[0].title} text={item[0].text}></QuestionItem>
        <QuestionItem title={item[1].title} text={item[1].text}></QuestionItem>
        <QuestionItem title={item[2].title} text={item[2].text}></QuestionItem>
        <QuestionItem title={item[3].title} text={item[3].text}></QuestionItem>
        <QuestionItem title={item[3].title} text={item[3].text}></QuestionItem>
        <QuestionItem title={item[3].title} text={item[3].text}></QuestionItem>
      </div>
      <Btn />
    </div>
  );
}

export default Question;
