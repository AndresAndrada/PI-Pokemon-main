import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findId } from "../redux/action";

const Detail = (props) => {
  // console.log(props, 'PROSPS')
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {    // se ejecuta la accion cuando semonta el componente
    dispatch(findId(id))
  }, [dispatch, id]);
  
  const state = useSelector(state => state.pokeDetail);
  // console.log(typeof state, state, 'state DET');

  if(state) {
    return (
      <div>
        <h1>Detail the Pokemon</h1>
          <div>
            <img src={state.sprites} alt={state.name} />
            <h3>Name: {state.name}</h3>
            <h4>Type: {state.types}</h4>
            <h4>Height: {state.height}</h4>
            <h4>Attack: {state.attack}</h4>
            <h4>Defending: {state.defending}</h4>
            <h4>Speed: {state.speed}</h4>
          </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>LOADING</h3>
      </div>
    )
  }

};

export default Detail;