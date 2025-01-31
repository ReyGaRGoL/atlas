import { useEffect, useState } from "react";
import CheckboxList from "../components/CheckboxList";
import "../styles/Capitulo1.css"

const ChapterI = () => {

  useEffect(() => {


    const map = new maplibregl.Map({
      container: 'map', // Div donde se cargará el mapa
      style: 'https://demotiles.maplibre.org/style.json', // Mapa base estilo MapLibre
      center: [-75.5000, 6.2000], // Coordenadas iniciales
      zoom: 7, // Nivel de zoom inicial
      maxZoom: 7.0,
      minZoom: 6.5,
      bearing: -90, // Rotación inicial en grados


    });
    return () => map.remove();


  },[]);

  return (
    <div>
      <div id="map"></div>
      <CheckboxList />
    </div>
  );
}

export default ChapterI;
