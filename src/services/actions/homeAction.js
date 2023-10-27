import {ADD_HOME_DATA,ADD_NEWS_DATA} from '../constants'
import axios from 'axios'

export const homeAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get('wp-json/wp/v2/pages?slug=home').then((res)=>{
            data = res.data[0];
            dispatch({
                type:ADD_HOME_DATA,
                data:data
            })
        });
    }
}

export const newsAction = () => {
    let data = [];
    return(dispatch) =>{
        axios.get("wp-json/wp/v2/posts").then((res)=>{
            data = res.data;
            dispatch({
                type:ADD_NEWS_DATA,
                data:data
            })
        });
    }
}
