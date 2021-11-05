// Importar React, imagenes y hoja de estilo
import React, { useState } from "react";
import "./droneCard.css";
import DroneImage from "../../../../assets/img/ANAFI_AI.jpg";

// Funcion DroneCard
function DroneCard(props) {
    let [drone] = useState(props.drone)
    return(
        <div class="col-lg-4">
            <div class="bg-light rounded text-center" id="drones">
                <span class="drones-title">{drone.modelo}</span>
                <br/>
                <img src={DroneImage} width="177px" height="130px" class="mt-3 rounded" alt="Drone Imagen"/>
                <br class="br2"/>
                <span class="drones-text">Fabricante: {drone.fabricante}</span>
                <br/>
                <span class="drones-text">Tiempo Máx Vuelo: {drone.tiempoVueloMax}min</span>
                <br/>
                <span class="drones-text">Tiempo Funcionalidad: {drone.tipoFuncionalidad}</span>
                <br/>
                <span class="drones-text">Velocidad Máx: {drone.velocidadMax}km/s</span>
                <br/>
                <span class="drones-text">Altura Máx: {drone.alturaMax}m</span>
            </div>
        </div>
    );
}

// Exportar DroneCard para ser utilizado en archivos externos
export default DroneCard;