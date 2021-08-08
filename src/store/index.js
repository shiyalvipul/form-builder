import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchForm } from "./sagas";
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
);

sagaMiddleware.run(watchForm);

export default store;

