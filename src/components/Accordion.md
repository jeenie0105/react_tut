```
// 기본을 사용할 줄 알아야 라이브러리를 사용 가능
// React-Query
// MUI 머티리얼 디자인
// react-boot-Strap

import React, { useState } from 'react';
import ac from "./Accordion.module.css";
// 디자인 3번째 방법 (추천)
// module.css 파일은 -을 사용할 수 없음
// 디자인 겹침 현상을 극복할 수 있음

// 디자인 컴포넌트 : styled-components
// 제일 나중에 사용하세요.

const Accordion = () => {
    const [clickState, setClickState] = useState(0);

  return (
    <div className={ac.acContainer}>
      <div className={ac.acContent}>
          <div 
            className={ac.acTitle}
            onClick={() => {setClickState(!clickState)}}
          >
            안쓰면 정말 환불해 주나요?</div>
          <div className={clickState ? ac.acBodyHeight : ac.acBody}>물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불이 가능합니다.</div>
      </div>
    </div>
  )
};

export default Accordion;
```