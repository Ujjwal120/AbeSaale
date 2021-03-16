import React, { useEffect, useState, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';

import './Validatedform.css'
import Card from '../UI/Card'
import Valinput from './Valinput';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_MATCH } from './Validators/Validators';
import { useForm } from '../Hook/formHook';
import Backdrop from '../UI/Backdrop';
import Modal from '../UI/Modal';
import Imageloader from '../../../feed/components/Imageloader';
import { AuthContext } from '../Context/auth-context';

const Validatedfrom = () => {

    const [Loaderstate, setLoaderstate] = useState(false);
    const [LoginState, setLoginState] = useState(true);
    let ele = useRef(null), orig_img_src = useRef('');

    const auth = useContext(AuthContext);

    const [formState, titleInputHandler, setFormData] = useForm({
        email : {
            value : '',
            isValid : false
        }, 
        password : {
            value : '',
            isValid : false
        },
    }, false);



    const submithandler = (event) => {
        event.preventDefault();
        auth.login();
        // if(!LoginState) console.log(document.getElementById('profile').src);
        // console.log(formState.inputs);
    }

    useEffect(() => {
        if(!LoginState) ele.current = document.getElementById('inside-post-it').classList;
        if(Loaderstate) 
            orig_img_src.current = document.querySelectorAll('.lower-canvas')[0].toDataURL('image/jpeg', 0.40);
    });

    const OpenLoader = () => {
        ele.current.add('nah-down');
        document.body.classList.add('stop-scroll');
        setLoaderstate(true);
    };

    const CloseLoader = () => {
        ele.current.remove('nah-down');
        document.body.classList.remove('stop-scroll');
        setLoaderstate(false);
    };

    const postHandler = () => {
        let img_src = document.querySelectorAll('.lower-canvas')[0].toDataURL('image/jpeg', 0.40);
        if(img_src === orig_img_src.current) {
            CloseLoader();
            return;
        }

        orig_img_src.current = img_src;
        document.getElementById('profile').src = img_src;
        CloseLoader();
    };

    const toggleHandler = () => {
        if(!LoginState) {
            document.querySelector('.auth-form-photo').classList.add('invi');
            document.getElementById('partition').classList.add('invi');
            document.getElementById('right-side').classList.add('invi');
            document.getElementById('tog').classList.add('shift-Y');

            setFormData({
                ...formState.inputs,
                name : undefined,
                confirm_password :undefined,
                age : undefined,
                country : undefined,
                phone : undefined,
                city : undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        }
        else {
            document.querySelector('.auth-form-photo').classList.remove('invi');
            document.getElementById('partition').classList.remove('invi');
            document.getElementById('right-side').classList.remove('invi');
            document.getElementById('tog').classList.remove('shift-Y');

            setFormData({
                ...formState.inputs,
                name : {
                    value : '',
                    isValid : false
                },
                confirm_password : {
                    value : '',
                    isValid : false
                },
                age : {
                    value : '',
                    isValid : false
                },
                country : {
                    value : '',
                    isValid : false
                },
                phone : {
                    value : '',
                    isValid : false
                },
                city : {
                    value : '',
                    isValid : false
                }
            }, false)
        }
        setLoginState(prevState => !prevState);
    }

    return <form className = "auth-form" onSubmit = {submithandler} autoComplete = "nooo">
        <button 
            type = "button"
            onClick = {toggleHandler} 
            style = {{position : 'absolute', left : '90%', top : '20%', width : '60px', height : '40px', padding : '0', backgroundColor : 'transparent', border : '0', outline : 'none'}}>
            <svg id = "tog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width = "60" height = "40" className = "toggle shift-Y">
                <path style={{fill: '#202022'}} d="M376.5,120.5h-241c-8.285,0-15,6.717-15,15c0,8.284,6.715,15,15,15v211c-8.285,0-15,6.717-15,15
                    c0,8.284,6.715,15,15,15h241c74.715,0,135.5-60.785,135.5-135.5S451.215,120.5,376.5,120.5z"
                    stroke = "#FFCC33" strokeOpacity = {1} strokeWidth = "7px"
                    />
                <path style={{ fill : '#F2F2F2'}} d="M271,256c0-74.715-60.785-135.5-135.5-135.5S0,181.285,0,256s60.785,135.5,135.5,135.5
                    S271,330.715,271,256z"/>
            </svg>
        </button>
        <div style = {{width : '60px', position : 'absolute', left : '90%', top : '24.5%', fontSize : '0.95rem', letterSpacing : '1px', display : 'flex', justifyContent : 'center', alignItems : 'center'}} className = {`${(LoginState && 'red-col') || (!LoginState && 'blue-col')}`}>
            <div>
                { !LoginState ? 'Signup' : 'Login'}
            </div>
        </div>
        {!LoginState && ReactDOM.createPortal(
            <div id = "inside-post-it" className = "move-up" onClick = {postHandler} style = {{position : 'absolute', top : '45vh', left : '85%', zIndex : '3'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" >
                    <defs>
                        <linearGradient id="Gradient" y1="0.44999999" spreadMethod="reflect">
                        <stop offset="0%" stopColor="#5f86f2" stopOpacity={1}>
                            <animate attributeName="stop-color" values="#5f86f2; #a65ff2; #f25fd0; #f25f61; #f2cb5f; #abf25f; #5ff281; #5ff2f0; #5f86f2" dur="3s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#5f86f2" stopOpacity={1}>
                            <animate attributeName="stop-color" values="#5f86f2; #5ff2f0; #5ff281; #abf25f; #f2cb5f; #f25f61; #f25fd0; #a65ff2; #5f86f2" dur="3s" repeatCount="indefinite" />
                        </stop>
                        </linearGradient>
                    </defs>
                    <path style = {{ fill : 'url(#Gradient)', zIndex : '2'}} d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.429 6l-5.144 8h3.21l-1.495 4 6-7h-3.896l1.325-5z"/>
                </svg>
            </div> , document.getElementById('post-it'))}
        
        { !LoginState && Loaderstate &&  <Backdrop onClick = {CloseLoader}/> }
        { !LoginState && Loaderstate && <Modal className = "modal-vis"><Imageloader /></Modal>}
        
        <div className = "auth-form-photo invi">
            <div className = "label-photo"  >
                <div className = "svg-trans" onClick = {OpenLoader}>
                    <img src = {`${process.env.PUBLIC_URL}/images/pola_new.svg`} />
                    <div className = "prof">
                        <img id = "profile" src = {`${process.env.PUBLIC_URL}/images/mask.svg`} style = {{ objectFit : 'contain'}}/>
                    </div>
                </div>
                
            </div>
        </div>
        <div style = {{width : '65%', height : '100%', padding : "2% 0%"}}>
            <Card style = {{borderRadius : '15px'}}>
                <div className = "each-form" > 
                    {!LoginState && 
                        <Valinput 
                        id = "name" 
                        element = "input" 
                        type = "text" 
                        label = "Name" 
                        errorText = "Enter a Valid Name" 
                        validators = {[VALIDATOR_REQUIRE()]}
                        onInput = {titleInputHandler}
                        complete = "no"
                        initVal = {formState.inputs.name ? formState.inputs.name.value : ''}
                        initvalid = {formState.inputs.name ? formState.inputs.name.valid : false}
                        />
                    }
                    <Valinput 
                        id = "email" 
                        element = "input" 
                        type = "text" 
                        label = "E-Mail" 
                        errorText = "Enter a Valid E=Mail" 
                        validators = {[VALIDATOR_EMAIL()]}
                        onInput = {titleInputHandler}
                        complete = "off"
                        initVal = {formState.inputs.email ? formState.inputs.email.value : ''}
                        initvalid = {formState.inputs.email ? formState.inputs.email.valid : false}
                        />
                    <Valinput 
                        id = "password" 
                        element = "input" 
                        type = "password" 
                        label = "Password" 
                        complete = "nope"
                        errorText = "Enter a strong Password, atleast 8 characters" 
                        validators = {[VALIDATOR_MINLENGTH(8)]}
                        onInput = {titleInputHandler}
                        initVal = {formState.inputs.password ? formState.inputs.password.value : ''}
                        initvalid = {formState.inputs.password ? formState.inputs.password.valid : false}
                    />
                    {!LoginState && 
                        <Valinput 
                        id = "confirm_password" 
                        element = "input" 
                        type = "password" 
                        label = "Confirm Password" 
                        errorText = "Enter same password as above" 
                        validators = {[VALIDATOR_MATCH(formState.inputs.password.value), VALIDATOR_REQUIRE()]}
                        onInput = {titleInputHandler}
                        complete = "nonono"
                        initVal = {formState.inputs.confirm_password ? formState.inputs.confirm_password.value : ''}
                        initvalid = {formState.inputs.confirm_password ? formState.inputs.confirm_password.valid : false}
                        />
                    }
                </div>
                <svg id = "partition" xmlns="http://www.w3.org/2000/svg" className = "partition-svg invi" viewBox="0 0 12.390644 432.89813">
                    <g transform="translate(-78.990355,64.276474)">
                    <ellipse style={{fill: '#FFCC33', fillRule: 'evenodd', strokeWidth: '0.531812', strokeLinejoin: 'round', strokeOpacity: 0}} cx={85.6} cy={150} rx={5} ry={1370} />
                    </g>
                </svg>
                <div id = "right-side" className = "each-form invi"> 
                {!LoginState && 
                        <>
                            <Valinput 
                            id = "age" 
                            element = "input" 
                            type = "text" 
                            label = "Age" 
                            errorText = "You are not Elligible to be part of the community" 
                            validators = {[VALIDATOR_MIN(13)]}
                            onInput = {titleInputHandler}
                            complete = "naah"
                            initVal = {formState.inputs.age ? formState.inputs.age.value : ''}
                            initvalid = {formState.inputs.age ? formState.inputs.age.valid : false}
                            />
                            <Valinput 
                            id = "country" 
                            element = "input" 
                            type = "text" 
                            label = "Country" 
                            errorText = "Enter a Country name" 
                            validators = {[VALIDATOR_REQUIRE()]}
                            onInput = {titleInputHandler}
                            complete = "nai"
                            initVal = {formState.inputs.country ? formState.inputs.country.value : ''}
                            initvalid = {formState.inputs.country ? formState.inputs.country.valid : false}
                            />
                            <Valinput 
                            id = "phone" 
                            element = "input" 
                            type = "text" 
                            label = "Phone No." 
                            errorText = "Enter a valid Phone no." 
                            validators = {[VALIDATOR_MIN(1000000000), VALIDATOR_MAX(9999999999)]}
                            onInput = {titleInputHandler}
                            complete = "nahi"
                            initVal = {formState.inputs.phone ? formState.inputs.phone.value : ''}
                            initvalid = {formState.inputs.phone ? formState.inputs.phone.valid : false}
                            />
                            <Valinput 
                            id = "city" 
                            element = "input" 
                            type = "text" 
                            label = "City" 
                            errorText = "Enter a City" 
                            validators = {[VALIDATOR_REQUIRE()]}
                            onInput = {titleInputHandler}
                            complete = "nono"
                            initVal = {formState.inputs.city ? formState.inputs.city.value : ''}
                            initvalid = {formState.inputs.city ? formState.inputs.city.valid : false}
                            />
                        </>
                    }
                </div>
                <button 
                    type = "submit"
                    disabled = {!formState.isValid} 
                    id = "but"
                    // className = {`${!formState.isValid && 'bblur'}`}
                    style = {{width : '88px', height : '60px', position : 'absolute', bottom : '28%', right : '-18%', backgroundColor : 'transparent', padding : '0', border : '0', outline : 'none', letterSpacing : '1px', fontSize : '1.1rem'}}>
                    <Card style = {{borderRadius : '15px'}}>
                    { !LoginState ? 'Signup' : 'Login'}
                    </Card>
                </button>
            </Card>
        </div>
  </form>;;
}

export default Validatedfrom;