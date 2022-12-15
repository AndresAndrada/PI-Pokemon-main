import { CLEAR_POKE, FIND_ID, FIND_NAME, GET_API } from './action'

const initialState = {
    pokemons: [],
    type: [],
    pokeDetail: {}
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
        case CLEAR_POKE: return {
            ...state,
            pokeDetail: {} 
        };
        default: return state;
    }
}

