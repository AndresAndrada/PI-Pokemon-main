import { FIND_ID, FIND_NAME, GET_API, CREATE_POKE, GET_TYPE, ABC_POKE } from './action'

const initialState = {
    pokemons: [],
    type: [],
    pokeDetail: [],
    pokeName: [],
    pokeFilters: [],
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_API: return {
            ...state,
            pokemons: action.payload,
            pokeFilters: action.payload
        }; 
        case FIND_NAME: return {
            ...state,
            pokeName: action.payload 
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
        case ABC_POKE: 
            let filter;
            if(action.payload === 'a-z') {
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    else return -1; 
                })
                console.log(filter, 'Reduce');
                console.log(state.pokeFilters, 'State filter')
            }
            if(action.payload === 'z-a') {
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    else return 1;
                })
                console.log(filter, 'Reduce');
                console.log(state.pokeFilters, 'State filter')
            }
            if(action.payload === 'attack1') {
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.attack > b.attack) return 1;
                    else return -1;
                })
                console.log(filter, 'Reduce');
                console.log(state.pokeFilters, 'State filter')
            }
            if(action.payload === 'attack2') {
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.attack > b.attack) return -1;
                    else return 1;
                })
                console.log(filter, 'Reduce');
                console.log(state.pokeFilters, 'State filter')
            }
            if(action.payload === 'todo') {
                filter = [...state.pokeFilters]
                return filter;
            }
            return {
                ...state,
                pokeFilters: filter,
            }
        default: return state;
    }
}

