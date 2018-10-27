import { combineReducers } from 'redux';
import data1Reducer from './data1/data1Reducer'

export default combineReducers({
        user : data1Reducer(),
    }
)