import { CHAT_GET_FAIL, CHAT_GET_REQUEST, CHAT_GET_SUCCESS } from "../constants/constants"



export const chatListReducer = (state = {chats:[]}, action)=>{

    switch(action.type){
        case CHAT_GET_REQUEST:
            return {loading: true, chats:[]}
        case CHAT_GET_SUCCESS: 
            return {loading: false, chats: action.payload}
        case CHAT_GET_FAIL:
            return {loading: false, error:  action.payload}
        default:
            return state
    }


}