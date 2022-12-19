import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { findType } from '../redux/action';

const Type = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findType())
    })

    return (
        <div>
            <button></button>
        </div>
    )
}

export default Type;