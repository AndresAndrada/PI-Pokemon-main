import React from "react";
import { Link } from "react-router-dom";
// import style from './ApiDB.module.css'


const ApiDB = () => {
    return (
        <div>
            <Link to='/home/datail/api/datos'><button>API</button></Link>
            <Link to='/home/datail/DataBase/datos'><button>DB</button></Link>
        </div>
    )
}

export default ApiDB;