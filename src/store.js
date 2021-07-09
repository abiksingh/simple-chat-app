import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from  'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers} from 'redux';
import { chatListReducer } from './redux/reducers/chatReducers';

const reducer = combineReducers({
chatList: chatListReducer,
});


const initialState = {};


const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;