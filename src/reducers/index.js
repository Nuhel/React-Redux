import {combineReducers} from 'redux';
import Hour from './reducer-hour';

const allReducers = combineReducers({
    hour : Hour
});
export default allReducers;