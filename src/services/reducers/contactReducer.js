import {ADD_CONTACT_DATA} from '../constants'
const initialState = {
    contactData:[]
}

export default function contactdata(state = initialState,action){
    switch (action.type) {
        case ADD_CONTACT_DATA:
            return {
            ...state,
            contactData:action.data
            }
        default:
            return{
                ...state
            }
    }
} 