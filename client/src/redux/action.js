import axios from "axios";

export const GET_API = 'GET_API';
export const FIND_NAME = 'FIND_NAME';
export const FIND_ID = 'FIND_ID';
export const GET_TYPE = 'GET_TYPE';
export const CREATE_POKE = 'CREATE_POKE';
export const CLEAR_POKE = 'CLEAR_POKE';

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
        // console.log(aux, 'aux findName')
        return dispatch({
            type: FIND_NAME,
            payload: aux
        })
    }
}

export const clearPoke = () => {
    return {
        type: CLEAR_POKE
    }
} 

export const findId = (id) => {
    return async function pedido(dispatch) {
        let aux = await axios.get(`http://localhost:3001/pokemons/${id}`);
        // console.log(aux, 'aux findId')
        return dispatch({
            type: FIND_ID,
            payload: aux.data
        })
    }
}