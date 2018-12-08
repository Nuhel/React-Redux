import {combineReducers} from 'redux';
import state from './reducer-hour';

const allReducers = combineReducers({
    state : state
});
export default allReducers;