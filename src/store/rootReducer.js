import { combineReducers } from 'redux';
import formReducer from '../components/redux/reducer';

const appReducer = combineReducers({
    form: formReducer,
});
export default appReducer;
