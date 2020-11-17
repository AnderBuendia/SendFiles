import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import { 
    SIGNUP_SUCCESS, 
    SIGNUP_ERROR,
    CLEAN_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    AUTHENTICATED_USER,
    SIGN_OUT
} from '../../types';

/* You can get props or ({children}) */
const AuthState = ({children}) => {

    /* Initial state */
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('rnstoken') : '',
        authenticated: null,
        user: null,
        message: null
    }

    /* Get reducer */
    const [state, dispatch] = useReducer(authReducer, initialState);

    /* Register new users */
    const registerUser = async data => {
        try {
            const res = await axiosClient.post('/api/users', data);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data.msg
            })

        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: error.response.data.msg
            })
        }

        /* Clean alert after 3secs */
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000);
    }

    /* User Authenticate */
    const login = async data => {
        try {
            const res = await axiosClient.post('/api/auth', data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }

        /* Clean alert after 3secs */
        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000);
    }

    /* Return authenticated user based on the JWT */
    const authenticatedUser = async () => {
        const token = localStorage.getItem('rnstoken');
        if (token) {
            tokenAuth(token)
        }

        try {
            const res = await axiosClient.get('api/auth');
            if (res.data.user) {
                dispatch({
                    type: AUTHENTICATED_USER,
                    payload: res.data.user
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    /* Sign out */
    const signOut = () => {
        dispatch({
            type: SIGN_OUT
        })
        window.location.reload();
    }

    return (
        <authContext.Provider
            value={{ 
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                login,
                authenticatedUser,
                signOut
             }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;