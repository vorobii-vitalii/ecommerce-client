import {combineReducers} from 'redux'
import auth from './authReducer'

export default combineReducers({
    authReducer: auth
})