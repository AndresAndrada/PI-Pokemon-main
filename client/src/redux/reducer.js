import { GET_API } from './action'

const initialState = {
    pokemons: [],
    type: {}
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_API: 
        return {
            ...state,
            pokemons: action.payload
        }; 
        default: return state;
    }
}

