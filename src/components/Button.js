import React, { useState } from 'react';
import "./Button.css"

// 어떤 url로 이동 : a
// click과 같은 액션 : button
const Button = (props) => {
    const [color, setColor] = useState(false);
    // color = false;
    // color 값을 수정하려면 setColor(false) 를 이용해서 수정
    // color = false;
    // num = 10

    const clickHandle = () => {
        console.log("click");
        setColor(!color);
    };
    return (
    <button 
        onClick={clickHandle}
        onMouseOver={()=>{
            console.log("mouseOver");
        }}

        style={{
            background: color ? "black" : "white", 
            color: color ? "white" : "black",
        }}
    >
        {props?.text ? props.text : "Button"}
    </button>
    );
};

export default Button;
