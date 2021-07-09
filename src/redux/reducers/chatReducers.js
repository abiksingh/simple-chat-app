import { CHAT_GET_FAIL, CHAT_GET_REQUEST, CHAT_GET_SUCCESS, CHAT_POST_FAIL, CHAT_POST_REQUEST, CHAT_POST_SUCCESS } from "../constants/constants"



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


};

export const addMessageReducer = (state = {} , action)=>{

    switch(action.type){

        case CHAT_POST_REQUEST: 
        return {
            loading: true
        }
        case CHAT_POST_SUCCESS:
            return{
             loading: false, chatInfo: action.payload
            }
        case CHAT_POST_FAIL:
            return {
                loading: false, error: action.payload
            }
       
        
        default:
            return state
    }


};