import React, { useState, useEffect } from 'react';

import './Input.css';
import Svg from './Svg';


var ele, rect, w, h;

const Input = props => {
  
  const [width, setWidth] = useState(window.innerWidth);


  const UpdateInputElementWidth = () => {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", UpdateInputElementWidth);
    return () => window.removeEventListener("resize", UpdateInputElementWidth);
  });

  const yethafocus = () => {
    ele.style.outline = "none";
    rect.setAttribute('style', `stroke : ${props.color}; stroke-width : 2px ; stroke-dasharray : ${2*(w+h)}; stroke-dashoffset : 0; transition : stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s`);
  }

  const yethablur = () => {
    rect.setAttribute('style', `stroke : ${props.color}; stroke-width : 5px; stroke-dasharray : ${w}, ${2*h+w}; stroke-dashoffset : ${-w-h}; transition : stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s`)
  }

  useEffect(() => {
      const timer = setTimeout(() => {
        ele = document.getElementById(`${props.id}`);
        rect = document.getElementById(`my-svg-${props.id}`);
        w = rect.width.baseVal.value;
        h = rect.height.baseVal.value;

        ele.addEventListener("focus", yethafocus);
        ele.addEventListener("blur", yethablur);

        return () =>  {
          ele.removeEventListener("focus", yethafocus);
          ele.removeEventListener("blur", yethablur);
          clearTimeout(timer);
        }
      }, 100);
  });

  const element =
    props.element === 'input' ? (
          <div className = "overlap-svg">
            <input id={props.id} type={props.type} placeholder={props.placeholder} />
          </div>
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`f-c`}>
      <label htmlFor={props.id}>{props.label}</label>
      <Svg width = {props.width} height = {props.height} id = {props.id} color = {props.color}/>
      {element}
    </div>
  );
};

export default Input;
