/* Same things like there are in authState */
import { 
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR,
    CLEAN_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    AUTHENTICATED_USER,
    SIGN_OUT
} from '../../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
        case SIGNUP_ERROR: 
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('rnstoken', action.payload);
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
        case CLEAN_ALERT:
            return {
                ...state,
                message: null
            }
        case AUTHENTICATED_USER:
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case SIGN_OUT:
            localStorage.removeItem('rnstoken');
            return {
                ...state,
                user: null,
                token: null,
                authenticated: null
            }
        default:
            return state;
    }
}

export default authReducer;