import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    REGISTER_USERS_REQUEST,
    REGISTER_USERS_SUCCESS,
    REGISTER_USERS_FAIL
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST})

        const config = {
            headers: { 
                'Content-Type': 'application/json'
            }
        }
        console.log(email);
        const {data} = await axios.get('/api/v1/login', {email, password, config})
        
        dispatch({ 
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: "123"
        })
    }
}


export const register = (name,email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USERS_REQUEST})

        const config = {
            headers: { 
                'Content-Type': 'application/json'
            }
        }
        console.log(email);
        const {data} = await axios.get('/api/v1/login', {name,email, password, config})
        
        dispatch({ 
            type: REGISTER_USERS_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: REGISTER_USERS_FAIL,
            payload: "123"
        })
    }
}
export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST})

        const {data} = await axios.get('/api/v1/users')
        console.log(data);
        dispatch({ 
            type: GET_USERS_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: "123"
        })
    }
}