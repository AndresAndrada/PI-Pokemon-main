import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPoke } from "../redux/action";

const CreatePoke = () => {
  const [poke, setPoke] = useState({
    name: '',
    life: '',
    attack: '',
    defending: '',
    speed: 0,
    height: 0,
    weight: 0,
    sprites: '',
    type: '',
  });

  const handleChange = (e) => {
    // console.log(e.target.name)
    setPoke({
      ...poke,
      [e.target.name]: e.target.value
    })
  };

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(poke,'poke')
    dispatch(createPoke(poke))
  };

  return (
    <div>
        <h1>Create a Pokemon</h1>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="">Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>*
          <br />
          <label htmlFor="">Life:
            <input type="text" name="life" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Attack:
            <input type="text" name="attack" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Defending:
            <input type="text" name="defending" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">speed:
            <input type="text" name="speed" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Height:
            <input type="text" name="height" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Weight:
            <input type="text" name="weight" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Type:
            <input type="text" name="type" onChange={handleChange} />
          </label>
          <br />
          <label htmlFor="">Sprites: <input type="file" name="sprites" onChange={handleChange} />
          </label>
          <br />
          <input type="submit" name="agregar" placeholder="Agregar"  />
        </form>
    </div>
  );
};

export default CreatePoke;