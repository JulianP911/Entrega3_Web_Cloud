// Importar React, componentes y hoja de estilo
import React, { Fragment } from "react";
import './../libreriaRutas.css';

// Funcion Ruta Card
const RutaCard = ({ rutas, linkLike, linkReview  }) => {
    return (
        <>
            {rutas.map((ruta, index) => (
                <div key={index} className="row" style={{paddingLeft:5, paddingRight:5}}>
                    <div className="col-2">
                        <img src={linkLike} alt="Imagen Columna" width="35" height="35"/>
                    </div>
                    <div className="col-8">
                        <span className="rutas-spam">{ruta.nombre}</span>
                        <br/>
                        <span className="rutas-spam">Ciudad: {ruta.ciudad}</span>
                        <br/>
                        <span className="rutas-spam">Distancia: {ruta.distancia}km</span>
                    </div>
                    <div className="col-2 mb-2">
                        <img src={linkReview} alt="Calificacion Imagen" width="35" height="35"/>
                        <div className="text-center">
                            <span className="rutas-spam">{ruta.valoracion} Estrellas</span>
                        </div>
                    </div>
                    <hr/>
                </div>))
            }
        </>
    )
}

// Exportar RutaCard para ser utilizado en archivos externos
export default RutaCard;
