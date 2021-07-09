import axios from 'axios';
import { CHAT_GET_FAIL, CHAT_GET_REQUEST, CHAT_GET_SUCCESS } from '../constants/constants';


export const listChat = () => async(dispatch) => {
    try {
        dispatch({type: CHAT_GET_REQUEST})

        const {data} = await axios.get('https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=2v87a8V1ECW7')

        console.log(data);

       

        dispatch({
            type: CHAT_GET_SUCCESS,
            payload: data
        })




    } catch (error) {

        dispatch({
            type: CHAT_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
};