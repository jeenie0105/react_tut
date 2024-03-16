// JavaScript + Xml(html) : 순수 js가 아니라서 브라우저가 해석하지 못하므로 
// 가독성을 위해 화살표 함수 사용(rafce)

import React from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import ALink from './components/ALink';
import Tabs from './components/Tabs';
import Accordion from './components/Accordion';

const App = () => {
    const btnTexts = ["주식", "영어", "고전", "인테리어", "다이어트"];
    const datas = [
      {
        id: 1,
        title : "안쓰면 정말 환불해 주나요?",
        body: "물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불이 가능합니다." 
      },
      {
        id: 2,
        title : "가입 후 보장은 언제 시작되나요?",
        body: "상해치료는 가입 당일부터 보장이 가능하며, 질병의 경우 가입 후 31일부터 보장이 가능합니다." 
      },
      {
        id: 3,
        title : "보장 내용은 어떻게 되나요?",
        body: "기본적으로 지출하신 의료비의 70% 보장이 가능하며, 가입시 선택하신 자기부담금을 먼저 공제합니다." 
      },
      {
        id: 4,
        title : "가입 연령은 어떻게 되나요?",
        body: "생후 2개월부터 가능합니다." 
      },
      {
        id: 5,
        title : "가입 연령은 어떻게 되나요?",
        body: "생후 2개월부터 가능합니다." 
      },
    ]
    
  return (
    <div>
      <header>header</header>
      <section style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        {
          datas.map(data => <Accordion title={data.title} body={data.body} />)
        }
      </section>
      <footer>footer</footer>
    </div>
  );
};

export default App;

