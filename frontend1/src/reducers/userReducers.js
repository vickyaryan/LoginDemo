import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USERS_REQUEST,
    REGISTER_USERS_SUCCESS,
    REGISTER_USERS_FAIL,
} from '../constants/userConstants'

export const userReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USERS_REQUEST:
            return{
                loading: true
            }
        
        case REGISTER_USERS_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        
        case REGISTER_USERS_FAIL:
        case LOGIN_FAIL:
            return{
                loading: false,
                payload: 'failling'
            }
           
    
        default:
            return state;
    }
}