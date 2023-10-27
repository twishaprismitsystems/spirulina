import {ADD_CONTACT_DATA} from '../constants'
import axios from 'axios'

export const contactAction = (contact_id) => {
    let data = [];
    return(dispatch) =>{
        axios.get("wp-json/wp/v2/getcontactdata?contact_id="+contact_id).then((res)=>{
            data = res.data;
            dispatch({
                type:ADD_CONTACT_DATA,
                data:data
            })
        });
    }
}