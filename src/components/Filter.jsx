import React, { useEffect, useState} from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter = ({busqueda, setBusqueda, tablaPersons, setTablaPersons}) => {    
    
    const [value, setValue] =useState('')
    const [inputValue, setInputValue] = useState('');

    var tablaHospitals= [];
    const ListaSinRepeticiones=()=> {
        for (let x=0;x<tablaPersons.length;x++){
            tablaHospitals.push(tablaPersons[x].nomhospital)
        }
        let result = tablaHospitals.filter((item,index)=>{
        return tablaHospitals.indexOf(item) === index;
    })
    tablaHospitals = result;
    }
    ListaSinRepeticiones();   

    const filtrar=(terminoBusqueda)=>{
      var resultadosBusqueda=tablaPersons.filter((elemento)=>{
        if(elemento.nomhospital.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ){
          return elemento;
        }
      });
      setBusqueda(resultadosBusqueda);
    }

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    if (newValue != null) {
                        filtrar(newValue);
                    } else {
                        setBusqueda(tablaPersons)
                    }
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={tablaHospitals.map((option) => option)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Busqueda de hospitales" />}
            />
        </div>        
    )
}

export default Filter;
