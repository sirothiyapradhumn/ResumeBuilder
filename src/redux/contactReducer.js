import * as contactActions from '../actions/action';
import initailState from './intialState.json';

const contactReducer = (state = initailState.contact, action) =>{
    switch(action.type){
        case contactActions.SET_CONTACT:
            return {...action.payload};
        case contactActions.UPDATE_CONTACT:
            return {...action.payload}; 
        default: return state
    }
}

export default contactReducer