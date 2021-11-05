// Importar React y funciones de google api maps
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Contenedor del mapa con sus caracteristicas
const containerStyle = {
    width: '38.5rem',
    height: '30rem'
};

// Centrar el mapa en la ubicacion de bogota
const center = { lat: 4.60971, lng: -74.08175 };

// Funcion Mapa
function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAJI9j8dSokjOHHH6qJqLTKo9omB_OVcfE"
  })
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {}
        <></>
      </GoogleMap>
  ) : <></>
}

// Exportar Mapa para ser utilizado en archivos externos
export default React.memo(Mapa)