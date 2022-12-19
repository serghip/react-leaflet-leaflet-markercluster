import React, { useEffect, useState, useContext} from 'react';

import Filter from '../components/Filter'
import PersonList from '../containers/PersonList';
import LeafleatMap from '../containers/LeafletMap';
import data from '../data.json';

import axios from 'axios';

export default function HomeContent() {  
 
  ////////// DATOS DINAMICOS DESDE BASE DE DATOS PREDEFINIDA //////////
  /*
  //Colocar aqui la API GET
  const API = 'http://localhost:3000/getpostspacientes';

  const [tablaPersons, setTablaPersons]= useState();
  const [busqueda, setBusqueda]= useState();

  const useGetPersons = (API) => { 
    useEffect(async () => {
      const response = await axios(API);
      setTablaPersons(response.data);
      setBusqueda(response.data);
    }, []);
  };
  useGetPersons(API);
  */
  //////////////////////////////////////////////////////////////////////
  ////////// DATOS ESTATICOS DESDE BASE DE DATOS LOCAL //////////
  const [tablaPersons, setTablaPersons]= useState(data);
  const [busqueda, setBusqueda]= useState(data);
  //////////////////////////////////////////////////////////////////////
  
  return (
    <>
    <Filter busqueda={busqueda} setBusqueda={setBusqueda} tablaPersons={tablaPersons} setTablaPersons={setTablaPersons}></Filter>    
    <LeafleatMap busqueda={busqueda}></LeafleatMap>
    <PersonList busqueda={busqueda} ></PersonList> 
    </>
  );
}
