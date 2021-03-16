import { useCallback, useReducer} from 'react';


const formReducer = (state, action) => {
    let new_state, formisValid;
    switch(action.type) {
        case 'INPUT_CHANGE' : 
            formisValid = true;
            for(const inputId in state.inputs) {
                if(!state.inputs[inputId]) continue;

                if(inputId === action.inputId) {
                    formisValid = formisValid && action.isValid;
                } 
                else {
                    formisValid = formisValid && state.inputs[inputId].isValid;
                }
            }
            new_state = {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.inputId] : {
                        value : action.value,
                        isValid : action.isValid
                    }
                },
                isValid : formisValid
            };

            if(action.inputId === 'password' && new_state.inputs.confirm_password) {
                let check_state = {
                    ...new_state,
                    inputs : {
                        ...new_state.inputs,
                        confirm_password : {
                            ...new_state.inputs.confirm_password,
                            isValid : new_state.inputs.confirm_password.value === new_state.inputs.password.value
                        }
                    }

                }

                formisValid = true;
                for(const inputId in check_state.inputs) {
                    formisValid = formisValid && check_state.inputs[inputId].isValid;
                }
                new_state = {
                    ...check_state,
                    isValid : formisValid
                };

                let par = document.getElementById('confirm_password').closest('div');

                if(new_state.inputs.confirm_password.isValid) {
                    if(par.classList.contains('border-red')) 
                        par.classList.remove('border-red');
                }
                else {
                    if(!par.classList.contains('border-red')) 
                        par.classList.add('border-red');
                }


            }

            return new_state;
        case 'SET_DATA' : 
            return {
                inputs : action.inputs,
                isValid : action.formisValid
            };
        default : 
            return state;
    }
}

export const useForm = (initInputs, initFormValidity) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs : initInputs,
        isValid : initFormValidity
    });

    const titleInputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type : 'INPUT_CHANGE',
            value : value,
            inputId : id,
            isValid : isValid
        });
    }, []);

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type : 'SET_DATA',
            inputs : inputData,
            formisValid : formValidity
        })
    }, []);

    return [formState, titleInputHandler, setFormData];
};