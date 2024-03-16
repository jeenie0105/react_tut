import React, { useState } from 'react';
// import tabs from "./Tabs.module.css";
import"./Tabs.css";
import TabBtn from './TabBtn';

const Tabs = () => {
    const [num, setNum] = useState(1);
    // 1, 2, 3, 4, 
  return (
    <div className='tabs-container'
        // style={{tabs.tabs_container}}
    >
      <ul className='tab-btns'>
        {
          [1, 2, 3, 4].map((btn, index) => 
          <TabBtn 
            num={num} 
            setNum={setNum} 
            index={index} 
            btn={btn} 
          />
          )
        }
      </ul>
        <div className='tab-contents'>
            <div style={{display: num === 1 ? "block" : "none"}}>문서 디자인에 의미가 있는 글을 담으면 사람들은 양식을 보지 않고 글의 내용에 집중하는 경향이 있다. 예를 들어 "나무위키의 서버는 파라과이에 있다."라는 문장을 적으면 대부분의 사람들은 글씨체에 집중하지 않고 글의 내용에 집중하게 될 것이다. 이런 일을 막고 디자인을 보여주는 데 집중하고자 어딘가 라틴어처럼 보이지만 실질적인 의미가 없는 단어를 조합해서 만든 글이다.</div>
            <div style={{display: num === 2 ? "block" : "none"}}>물론 의미 없이 아무런 글자를 무작위로 입력할 수도 있지만 그런 텍스트는 아름답지도 않고 폰트나 레이아웃은 글 내용의 무질서함에 가려져 보이지 않을 것이다. 예를 들어 "askfiofsikf"같이 아무렇게나 입력한 문자열로 폰트를 평가한다면 폰트, 레이아웃은 보이지 않고 애들 장난같이 보일 것이다.</div>
            <div style={{display: num === 3 ? "block" : "none"}}>그렇기 때문에 로렘 입숨처럼 적당히 정갈하면서도 전 세계 어떤 모국어 화자도 무슨 내용인지 이해할 수 없는(달리 말해 주의를 빼앗기지 않을) 문장을 사용해야 한다.</div>
            <div style={{display: num === 4 ? "block" : "none"}}>일부 워드프로세서나 디자인 소프트웨어에는 로렘 입숨을 자동으로 생성해 주는 기능이 있다. 마이크로소프트 오피스에서는 =lorem()을 입력하고 엔터를 누르면 된다. 단락과 문장 갯수를 지정할 수 있는데 괄호 안에 쉼표로 구분해서 두 숫자를 입력하면 된다.</div>
        </div>
    </div>
  )
};

export default Tabs;
