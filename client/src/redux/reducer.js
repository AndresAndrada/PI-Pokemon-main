import { FIND_ID, FIND_NAME, GET_API, CREATE_POKE, GET_TYPE } from './action'

const initialState = {
    pokemons: [],
    type: [],
    pokeDetail: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_API: return {
            ...state,
            pokemons: action.payload
        }; 
        case FIND_NAME: return {
            ...state,
            pokemons: action.payload 
        };
        case FIND_ID: return {
            ...state,
            pokeDetail: action.payload
        };
        case CREATE_POKE: return {
            ...state,
            pokeDetail: action.payload
        };
        case GET_TYPE: return {
            ...state,
            type: action.payload
        };
        default: return state;
    }
}

