import Immutable from 'immutable';
import {
    ACTION1,
    ACTION2
} from "./data1Actions";

const initialState = Immutable.fromJS({
    data: undefined
});

export default function data1Reducer(state = initialState, action) {
    const {type, data} = action;
    state = Immutable.fromJS(state);

    switch(type){
        case ACTION1:
            return state.set('data', data);
        case ACTION2:
            return initialState;
        default:
            return state;
    }
}