import {AUTH_SUCCESS, AUTH_LOG_OUT} from '../Constants/Actions';


const initialState = {
    auth: ''
}


const AuthMe = (state = initialState, action) => {
    switch(action.type){
        case AUTH_SUCCESS:
            return {
                ...state,
                auth: action.auth
            }
        case AUTH_LOG_OUT:
            return {
                ...state,
                auth: ''
            }
        
        
        default:
            return state;
    }
}

export default AuthMe;