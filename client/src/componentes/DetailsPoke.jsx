import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findId } from "../redux/action";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {    // se ejecuta la accion cuando semonta el componente
    dispatch(findId(id))
  }, [dispatch, id]);
  const state = useSelector(state => state.pokeDetail);
  console.log(id, 'ID');
  return (
    <div>
      <h1>Detail the Pokemon</h1>
          <div>
            <img src={state.sprites} alt="" />
            <h3>Name: {state.name}</h3>
            <h4>Type: {state.types}</h4>
            <h4>Height: {state.height}</h4>
            <h4>Attack: {state.attack}</h4>
            <h4>Defending: {state.defending}</h4>
            <h4>Speed: {state.speed}</h4>
          </div>
    </div>
  );
};

export default Detail;