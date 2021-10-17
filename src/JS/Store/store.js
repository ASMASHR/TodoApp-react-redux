import { createStore,applyMiddleware } from "redux";
import rootRedrucers from '../Reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

const store =createStore(rootRedrucers, composeWithDevTools(applyMiddleware(logger)))
export default store
