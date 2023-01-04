import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPoke } from "../redux/action";
import style from './CreatePoke.module.css';

const validate = (state) => {
  const err = {};
  if(state.name === '') err.name = 'Name is required';
    else if(state.name.length < 3) err.name= 'Name is short';
  if(!state.life) err.life = 'Life is required';
    else if(state.life < 0 || state.life > 100) err.life('Life is incorrect');
  if(!state.attack) err.attack = 'Attack is required';
    else if(state.attack < 0 || state.attack > 100) err.attack = 'Attack is incorrect';
  if(!state.defending) err.defending = 'Defending is required';
    else if(state.defending < 0 || state.defending > 100) err.defending = 'Defending is incorrect';
  if(!state.speed) err.speed = 'Speed is required';
    else if(state.speed < 0 || state.speed > 100) err.speed = 'Speed is incorrect';
  if(!state.height) err.height = 'height is required';
    else if(state.height < 0 || state.height > 100) err.height= 'Height is incorrect';
  if(!state.weight) err.weight = 'weight is required';
    else if(state.weight < 0 || state.weight > 100) err.weight ='Height is incorrect';
  if(!state.sprites) err.sprites = 'height is required';
  // if(state.types.length < 0) err.types = 'Types is required';
  // console.log(state.types.length, 'TYPE IF');
  return err;
}

const CreatePoke = () => {
  const [type, setTypes] = useState([]);
  // console.log(types, 'TYPE STATE');
  const [poke, setPoke] = useState({
    name: '',
    life:0,
    attack: 0,
    defending: 0,
    speed: 0,
    height: 0,
    weight: 0,
    sprites: '',
  });
  // console.log(poke.types, 'POKETYPE')
  const [error, setError] = useState({
    name: '',
    life:0,
    attack: 0,
    defending: 0,
    speed: 0,
    height: 0,
    weight: 0,
    sprites: '',
    type,
  });

 
  

  const handleChange = (e) => {
    // console.log(e.target, 'NAME')
    // if(e.target.name === 'type') {console.log(e.target.name);}
    setPoke(state => { 
      const newState = {
        ...state,
        [e.target.name]: e.target.value,
      };
      // console.log(poke.types, 'TYPES')
      setError(validate(newState));
      return newState;
    });
  };

  const handleDelete = (e) => {
    // console.log(e.target.outerText, 'EEEE');
    setTypes(type.filter(tp => tp !== e.target.outerText))
  }

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPoke(poke.type = type)
    // setError(validate(poke));
    console.log(poke,'poke');
    dispatch(createPoke(poke));
  };

  return (
    <div className={ style.create }>
        <h1>Create a Pokemon</h1>
        <form onSubmit={ handleOnSubmit }>
          <label className={ style.label }>Name:
            <input 
              className={ error.name === '' ? style.danger : style.input } 
              type="text" 
              name="name" 
              onChange={ handleChange }
              // value={ poke.name } 
            // onChange={(e) => setName(e.target.value)} 
            />
            { error.name ? <h5>{ error.name }</h5> : '' }
          </label>
          <label className={ style.label }>Life:
            <input 
              // className={ error.life === 0 ? style.danger : style.input} 
              type="range"
              min='0'
              max='100'
              step='1'
              name="life" 
              // value={ poke.life } 
              // onChange={(e) => setLife(e.target.value)} 
              onChange={ handleChange }
              />{ poke.life }
            { error.life ? <h5>Life is required</h5> : '' }
          </label>
          <label className={ style.label }>Attack:
            <input 
              // className={ error.attack === 0 ? style.danger : style.input }
              type="range"
              min='0'
              max='100'
              step='1' 
              name="attack" 
              // value={ poke.attack } 
              // onChange={(e) => setAttack(e.target.value)} 
              onChange={ handleChange }
              />{ poke.attack }
            { error.attack ? <h5>Attack is required</h5> : '' }
          </label>
          <label className={ style.label }>Defending:
            <input 
              // className={ error.defending === 0 ? style.danger : style.input }   
              type="range"
              min='0'
              max='100'
              step='1'  
              name="defending" 
              // value={ poke.defending } 
              // onChange={(e) => setDefending(e.target.value)} 
              onChange={ handleChange }
              />{ poke.defending }
            { error.defending ? <h5>Defending is required</h5> : '' }
          </label>
          <label className={ style.label }>Speed:
            <input 
              // className={ error.speed === 0 ? style.danger: style.input }  
              type="range"
              min='0'
              max='100'
              step='1'
              name="speed" 
              // value={ poke.speed } 
              // onChange={(e) => setSpeed(e.target.value)} 
              onChange={ handleChange }
              />{ poke.speed }
            { error.speed ? <h5>{ error.speed }</h5> : '' }
          </label>
          <label className={ style.label }>Height:
            <input 
              // className={ error.height === 0 ? style.danger : style.input } 
              type="range"
              min='0'
              max='100'
              step='1'
              name="height" 
              // value={ poke.height } 
              // onChange={(e) => setHeight(e.target.value)} 
              onChange={ handleChange }
              />{ poke.height }
            { error.height ? <h5>Heigth is required</h5> : '' }
          </label>
          <label className={ style.label }>Weight:
            <input 
              // className={ error.weight === 0 ? style.danger : style.input } 
              type="range"
              min='0'
              max='100'
              step='1' 
              name="weight" 
              // value={ poke.weight } 
              // onChange={(e) => setWeight(e.target.value)} 
              onChange={ handleChange }
              />{ poke.weight }
            { error.weight ? <h5>Weigth is required</h5> : '' }
          </label>
          <label className={ style.label }>Type:
          <select onChange={ (e) => setTypes([ ...type, e.target.value ]) } name="">
          <option>TYPES</option>
              {!type.includes("bug") && <option name="bug" >bug</option>}
              {!type.includes("ghost") && <option name="ghost">ghost</option>}
              {!type.includes("steel") && <option name="steel">steel</option>}
              {!type.includes("fire") && <option name="fire">fire</option>}
              {!type.includes("water") && <option name="water">water</option>}
              {!type.includes("grass") && <option name="grass">grass</option>}
              {!type.includes("electric") && (<option name="electric">electric</option>)}
              {!type.includes("psychic") && (<option name="psychic">psychic</option>)}
              {!type.includes("ice") && <option name="ice">ice</option>}
              {!type.includes("dragon") && (<option name="dragon">dragon</option>)}
              {!type.includes("dark") && <option name="dark">dark</option>}
              {!type.includes("fairy") && <option name="fairy">fairy</option>}
              {!type.includes("unknown") && (<option name="unknown">unknown</option>)}
              {!type.includes("shadow") && (<option name="shadow">shadow</option>)}  
              </select>
          </label>
          {type.map(pk => {
            return (
              <div onClick={ handleDelete } key={ pk }>{ pk }</div>
              )
            })} 
            { !error.type ? <h5>{ error.type }</h5> : '' }
          <br />
          <label className={ style.label }>Sprites: 
           <input 
            // className={ error.types === '' ? style.danger : style.input } 
            type="text" 
            name="sprites" 
            // onChange={(e) => setSprites(e.target.value)} 
            onChange={ handleChange }
            />
            { error.sprites ? <h5>Sprites is required</h5> : '' }
          </label>
          <input className={ style.boton } type="submit" name="agregar" placeholder="Agregar"  />
        </form>
    </div>
  );
};

export default CreatePoke;