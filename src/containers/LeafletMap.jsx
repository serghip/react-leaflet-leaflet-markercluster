import React, { useContext } from "react";
import AppContext from '../context/AppContext'
import '@styles/LeafletMap.scss';
import useGetPersons from "@hooks/useGetPersons";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';


const LeafletMap = ({ busqueda }) => {
    return (
        <section className="mapContainer">
            <MapContainer className="map" center={[-37.500, -60.000]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                    {busqueda.map((row) => (
                        <Marker key={row.id} position={[row.latitud, row.longitud]}>
                            <Popup>
                                <div className='popup'>
                                    <p><b>Hospital: </b>{row.nomyape}</p>
                                    <p><b>Nombre del paciente: </b>{row.nomhospital}</p>
                                    <p><a href='#personList'>Ver mas detalles..</a></p>
                                </div>
                            </Popup></Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>;
        </section>
    );
}

export default LeafletMap;
