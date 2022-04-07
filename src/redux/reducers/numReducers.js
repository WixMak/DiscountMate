import * as types from '../actions/types';

const initalState = {
    number : 0,
}

const numReducer = (state = initalState, action) =>{
    switch(action.type){
        case (types.ADD):
            state = {...state, number: number + action.data}
        default:
            return state
    }
}

export default numReducer