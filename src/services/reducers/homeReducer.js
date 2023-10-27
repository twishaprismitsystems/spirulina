import {ADD_HOME_DATA,ADD_NEWS_DATA} from '../constants'
const initialState = {
    homeData:[],
    newsData:[],
    contactData:[]
}

export default function homedata(state = initialState,action){
    switch (action.type) {
        case ADD_HOME_DATA:
            return {
                ...state,
                homeData:action.data
            }
        case ADD_NEWS_DATA:
            return {
            ...state,
            newsData:action.data
        }
        default:
            return{
                ...state
            }
    }
} 