// Importar React, hoja de estilo y hooks
import React, { useState } from "react";
import './rutaCard.css';

// Funcion Ruta Card
function RutaCard(props) {
    let [ruta] = useState(props.ruta)
    return(
        <div className="row">
           <div className = "col-3"> 
                <img src="https://img.icons8.com/wired/64/000000/map.png" alt="Mapa Imagen" className="centrada" width="40" height="40"/>
           </div>
           <div className = "col-9 mb-3"> 
                <div className="row">
                        <h6 className="letraRutas">{ruta.nombre}</h6>
                </div>
                <div className="row">
                        <span>{ruta.ciudad} - ({ruta.distancia} mts.)</span>
                </div>
           </div>    
           <hr/>
        </div>
    );
}

// Exportar Ruta Card para ser utilizada en archivos externos
export default RutaCard;
