import { FIND_ID, FIND_NAME, GET_API, CREATE_POKE, GET_TYPE, ABC_POKE, DELETE_POKE, DELETE_CARDS, API_POKE, TYPE_FILTER } from './action'

const initialState = {
    pokemons: [],
    type: [],
    pokeDetail: [],
    pokeName: [],
    pokeFilters: [],
}

export default function rootReducer(state = initialState, action) {
    // console.log(action.payload, 'PAYLOAD');
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
        case DELETE_CARDS: return {
                ...state,
                pokeDetail: initialState.pokemons
            };
        case DELETE_POKE: return {
            ...state,
            pokeDetail: initialState.pokeDetail
        };
        case ABC_POKE: 
            let filter;
            if(action.payload === 'a-z') {
                console.log(action.payload, 'ACTION A-Z');
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    else return -1; 
                })
                // console.log(filter, 'Reduce');
                // console.log(state.pokeFilters, 'State filter')
            };
            if(action.payload === 'z-a') {
                console.log(action.payload, 'ACTION Z-A');
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    else return 1;
                })
                // console.log(filter, 'Reduce');
                // console.log(state.pokemons, 'State filter')
            };
            if(action.payload === 'attack2') {
                console.log(action.payload, 'ACTION ATTACK2');
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.attack > b.attack) return 1;
                    else return -1;
                })
                console.log(filter, 'Reduce');
                // console.log(state.pokemons, 'State filter')
            };
            if(action.payload === 'attack1') {
                console.log(action.payload, 'ACTION ATTACK1');
                filter = state.pokeFilters.sort((a, b) => {
                    if(a.attack > b.attack) return -1;
                    else return 1;
                })
                console.log(filter, 'Reduce');
                // console.log(state.pokemons, 'State filter')
            };
            if(action.payload === 'todo') {
                console.log(state.pokemons, 'TODOS LOS POKE');
                console.log(action.payload, 'ACTION TODO');
                filter = state.pokeFilters
            };
            return {
                ...state,
                pokeFilters: filter,
            };
        case API_POKE:
            let cards;
            if(action.payload === 'api') {
                console.log(action.payload, 'ACTION API');
                cards = state.pokemons.filter(pk => pk.id < 41)
                // console.log(cards, 'Reduce');
                // console.log(state.pokemons, 'State filter')
            };
            if(action.payload === 'db') {
                // console.log(action.payload, 'ACTION DB');
                cards = state.pokemons.filter(pk => pk.id.length > 3)
                // console.log(cards, 'Reduce');
                // console.log(state.pokemons, 'State filter')
            };
            if(action.payload === 'todo') {
                // console.log(state.pokemons, 'TODOS LOS POKE');
                // console.log(action.payload, 'ACTION TODO');
                cards = state.pokemons
            };
            return {
                ...state,
                pokeFilters: cards,
            };
        case TYPE_FILTER: 
            let arr = [];
            // console.log(action.payload, 'ACTION TYPER');
            state.pokemons.map(pk => pk.types.forEach(e => {
                // console.log(e, 'EEEEE');
                if(e === action.payload) arr.push(pk);
            }));
            // console.log(arr, 'ARRAY TYPO');
            return {
                ...state,
                pokeFilters: arr
            }
        default: return state;
    }
}