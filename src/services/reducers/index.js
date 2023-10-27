import { combineReducers } from "redux";
import homeReducer from '../reducers/homeReducer'
import contactReducer from '../reducers/contactReducer'

export default combineReducers({
    homeReducer,
    contactReducer
});