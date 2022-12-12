import axios from "axios";

export const GET_API = 'GET_API';
export const FIND_NAME = 'FIND_NAME';
export const FIND_ID = 'FIND_ID';
export const GET_TYPE = 'GET_TYPE';
export const CREATE_POKE = 'CREATE_POKE';

export const getApi = () => {
    return async function pedido(dispatch) {
        let aux = await axios.get('http://localhost:3001/pokemons');
        // console.log(aux, 'aux')
        return dispatch({
            type: GET_API,
            payload: aux.data
        });
    };
};

export const findeName = (name) => {
    return async function pedido(dispatch) {
        let aux = await axios.get('http://localhost:3001/pokemons?name=charmander');
        return dispatch({
            type: FIND_NAME,
            payload: aux.data 
        })
    }
}