import * as allornothing from "../allornothing.json";
import { SELECTED_ENTRY, ADD_ENTRY, DELETE_ENTRY, MODIFY_ENTRY } from '../actions/actionCreator'

const INITIAL_DATA = {
    list: Object.values(allornothing)
};

const ListReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_ENTRY:
        return [
            ...state,{
                id: action.id,
                text: action.text,
                replies: object.replies,
                payloads: object.payloads,
                routes: object.routes,
                tag: object.start,
                lesson: "allornothing"
            }
        ]
        case SELECTED_ENTRY:
        return state.filter(entry => entry.id === action.id);

        case MODIFY_ENTRY:
        return state.filter(entry => entry.id === action.id);

        case DELETE_ENTRY:
        return state.filter(entry => entry.id === action.id);
        
        default:
        return state
    }
}

export default ListReducer