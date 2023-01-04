import axios from "axios";

export const GET_API = 'GET_API';
export const FIND_NAME = 'FIND_NAME';
export const FIND_ID = 'FIND_ID';
export const GET_TYPE = 'GET_TYPE';
export const CREATE_POKE = 'CREATE_POKE';
export const CLEAR_POKE = 'CLEAR_POKE';
export const ABC_POKE = 'ABC_POKE';

export const getApi = () => {
    return async function pedido(dispatch) {
        let aux = await axios.get('http://localhost:3001/pokemons');
        // console.log(aux.data, 'aux get')
        return dispatch({
            type: GET_API,
            payload: aux.data
        });
    };
};

export const findName = (name) => {
    return async function pedido(dispatch) {
        let aux = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        // console.log(aux.data, 'aux findName')
        return dispatch({
            type: FIND_NAME,
            payload: aux.data
        })
    }
}

export const findId = (id) => {
    return async function pedido(dispatch) {
        let aux = await axios.get(`http://localhost:3001/pokemons/${id}`);
        console.log(typeof aux, aux.data, 'aux findId')
        return dispatch({
            type: FIND_ID,
            payload: aux.data
        });
    };
};

export const createPoke = (pokemon) => {
    return async function pedido(dispatch) {
        console.log(typeof pokemon, pokemon, 'aux create');
        let aux = await axios.post(`http://localhost:3001/pokemons/pokemon`, {pokemon: pokemon});
        // console.log(aux, 'AUX CREATE')
        return dispatch({
            type: CREATE_POKE,
            payload: aux
        })
    };
};

export const findType = () => {
    return async function pedido (dispatch) {
        let aux = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: GET_TYPE,
            payload: aux.data
        })
    }
}

export const filterPokemons = (payload) => {
    // console.log(payload, 'ABC')
    return {
      type: ABC_POKE,
      payload,
    };
  };