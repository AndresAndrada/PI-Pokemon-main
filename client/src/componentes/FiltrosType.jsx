import React from "react";
import  Select  from 'react-select';
// import { getApi } from "../redux/action";
// import { useDispatch } from "react-redux";



const Filtros = () => {
    // const [state, setStat ] = useState(getApi())

    // const dispatch = useDispatch();
    
    
        
        const suppliers = [
            { label: 'A - Z', value: 'A - Z' },
            { label: 'Attack', value: 'Attack' }
        ]
    
    return(
        <div>
            <Select 
            defaultValue = { { label: 'Select filter' } }
            options = { suppliers }  />
        </div>
    )
}

export default Filtros;