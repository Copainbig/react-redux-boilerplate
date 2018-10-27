export const ACTION1 = 'ACTION1';
export const ACTION2 = 'ACTION2';

export function emit_action1(data){
    return dispatch => {
        dispatch({
            type: ACTION1,
            data
        })
    }
}

export function emit_action2(){
    return dispatch => {
        dispatch({
            type: ACTION2
        })
    }
}