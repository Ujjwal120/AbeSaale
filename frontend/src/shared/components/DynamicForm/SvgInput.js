import React from 'react';

import './Input.css';
import Svg from './Svg';
import Input from './Input';

const SvgInput = props => {

  let svg_height = props.height*props.rows;

  return (
    <div className={`f-c`} style = {{height : `${svg_height + 6}rem`}}>
      <label htmlFor={props.id}>{props.label}</label>
      <Svg width = {props.width} height = {`${svg_height}rem`} id = {props.id} color = {props.color}/>
      <Input id = {props.id} rows={props.rows || 3} element = {props.element} height = {svg_height} color = {props.color} value = {props.value}/>
    </div>
  );
};

export default SvgInput;
