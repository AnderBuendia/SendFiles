import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import axiosClient from '../../config/axios';
import { 
    SHOW_ALERT, 
    CLEAN_ALERT, 
    UPLOAD_FILE_ERROR, 
    UPLOAD_FILE_SUCCESS, 
    CREATE_LINK_ERROR, 
    CREATE_LINK_SUCCESS,
    UPLOADING_FILE,
    CLEAN_STATE,
    ADD_PASSWORD,
    ADD_DOWNLOADS
} from '../../types';

const AppState = ({children}) => {

    const initialState = {
        file_msg: null,
        name: '',
        original_name: '',
        loading: null,
        downloads: 1,
        password: '',
        author: null,
        url: ''
    }

    /* Create dispatch and state */
    const [state, dispatch] = useReducer(appReducer, initialState);

    /* Show an alert */
    const showAlert = msg => {
        console.log(msg)
        dispatch({
            type: SHOW_ALERT,
            payload: msg
        });

        setTimeout(() => {
            dispatch({
                type: CLEAN_ALERT
            })
        }, 3000);
    }

    /* Upload files to server */
    const uploadFile = async (formData, filename) => {
        dispatch({
            type: UPLOADING_FILE
        })
        try {
            const res = await axiosClient.post('/api/files', formData);
            console.log(res.data);
            dispatch({
                type: UPLOAD_FILE_SUCCESS,
                payload: {
                    name: res.data.file,
                    original_name: filename
                }
            })
        
        } catch (error) {
            console.log(error);
            dispatch({
                type: UPLOAD_FILE_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    /* Create a link when file was upload */
    const createLink = async () => {
        const data = {
            name: state.name,
            original_name: state.original_name,
            downloads: state.downloads,
            password: state.password,
            author: state.author
        }

        try {
            const res = await axiosClient.post('/api/links', data);
            dispatch({
                type: CREATE_LINK_SUCCESS,
                payload: res.data.msg
            })
        } catch (error) {
            console.log(error);
        }
    }

    const cleanState = () => {
        dispatch({
            type: CLEAN_STATE
        })
    }

    /* Add password */
    const addPassword = password => {
        dispatch({
            type: ADD_PASSWORD,
            payload: password
        })
    }

    /* Add a number of downloads */
    const addDownloads = downloads => {
        dispatch({
            type: ADD_DOWNLOADS,
            payload: downloads
        })
    }

    return ( 
        <appContext.Provider
            value={{
                file_msg: state.file_msg,
                name: state.name,
                original_name: state.original_name,
                loading: state.loading,
                downloads: state.downloads,
                password: state.password,
                author: state.author,
                url: state.url,
                showAlert,
                uploadFile,
                createLink,
                cleanState,
                addPassword,
                addDownloads
            }}
        >
            {children}
        </appContext.Provider>
    );
}
 
export default AppState;