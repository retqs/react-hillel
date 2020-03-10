import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const DEV_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, compose(applyMiddleware(thunk), DEV_TOOLS));
