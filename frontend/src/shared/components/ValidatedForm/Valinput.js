import React, { useReducer, useEffect } from 'react';


import { validate } from './Validators/Validators';


const InputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE' : 
            return {
                ...state,
                value : action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH' :
            return {
                ...state,
                isTouched : true
            }
        default : 
            return state;
    }
};

const Valinput = (props) =>  {

    const [inputState, dispatch] = useReducer(InputReducer, {
        value : props.initVal, 
        isValid : props.initvalid,
        isTouched : false
    });

    const { id, onInput } = props; 
    const { value, isValid } = inputState;

    const changeHandler = (event) => {
        dispatch({
            type : 'CHANGE', 
            val : event.target.value, 
            validators : props.validators
        });
    };

    const touchHandler = () => {
        dispatch({
            type : 'TOUCH'
        });
    };

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const ele = 
        props.element === 'input' ? (
            <input id = {props.id} 
                type = {props.type}
                autoComplete = {props.complete}
                onChange = {changeHandler} 
                value = {inputState.value}
                onBlur = {touchHandler}
            />
        ) : (
            <textarea id = {props.id} 
                rows = {props.rows || 3} 
                autoComplete = {props.complete}
                onChange = {changeHandler} 
                value = {inputState.value}
                onBlur = {touchHandler}
            />
        );

    return  <div className = {`f-s ${!inputState.isValid && inputState.isTouched && 'border-red'}`}>
        <label htmlFor = {props.id}>{props.label}</label>
        {ele}
        {!inputState.isValid && inputState.isTouched && 
            <div style = {{ position : 'absolute', transform : 'translateY(-3.8rem)', fontSize : '0.8rem', color : 'rgb(255, 130, 130)'}}>
                {props.errorText}
            </div>}
    </div>;
}

export default Valinput; 