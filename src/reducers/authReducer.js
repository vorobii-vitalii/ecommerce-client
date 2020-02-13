import {USER_LOGIN_FAILURE,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGOUT} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

export default (state = initialState, action ) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                logginIn: true,
                user: action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.payload
            }
        case USER_LOGIN_FAILURE:
            return {}
        case USER_LOGOUT:
            return {}
        default: 
            return {...state}
    }
}