import React, { useEffect } from 'react';
import style from './Type.module.css'
// import  Select  from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findType } from '../redux/action';

const Type = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findType());
    }, [dispatch]);

    const state = useSelector(state => state.type);
    // console.log(state, 'STATE TYPE')
    
  return (
    <div className={ style.link1 }>
      { state.map(tp => {
        return (
          <div key={ tp.id }>
            <Link key={ tp.id } className={ style.link } to={`/home/detail/type/${tp.name}`}><h3>{ tp.name }</h3></Link>
          </div>
        )
      }) }
    </div>
  )
    // }) : <div>LOADING</div>}

}

export default Type;