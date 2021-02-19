/* Same things like there are in authState */
import { 
    CLEAN_ALERT,
    SHOW_ALERT,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_LINK_SUCCESS,
    UPLOADING_FILE,
    CLEAN_STATE,
    ADD_PASSWORD,
    ADD_DOWNLOADS
} from '../../types';


const authReducer = (state, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                file_msg: action.payload 
            }
        case CLEAN_ALERT:
            return {
                ...state,
                file_msg: null
            }
        case UPLOADING_FILE:
            return {
                ...state,
                loading: true
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                original_name: action.payload.original_name,
                loading: null
            }
        case UPLOAD_FILE_ERROR:
            return {
                ...state,
                file_msg: action.payload,
                loading: null
            }
        case CREATE_LINK_SUCCESS:
            return {
                ...state,
                url: action.payload
            }
        case CLEAN_STATE:
            return {
                ...state,
                file_msg: null,
                name: '',
                original_name: '',
                loading: null,
                downloads: 1,
                password: '',
                author: null,
                url: ''
            }
        case ADD_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case ADD_DOWNLOADS:
            return {
                ...state,
                downloads: action.payload
            }
        default:
            return state
    }
}
 
export default authReducer;