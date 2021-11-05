// Importar React, itemsCabecera y hoja de estilo
import React from "react";
import itemsCabecera from "./itemsCabecerDrones";
import "./cabeceraDrones.css";

// Funcion CabeceraDrones
function CabeceraDrones() {
    return(
        <div className="container">
            <div className="row">
                <div className="bg-light rounded text-center" id="my-drones">
                    <div id="drones-head">
                        <img src={itemsCabecera.srcImg} alt={itemsCabecera.altImg} width={itemsCabecera.widthImg} height={itemsCabecera.heightImg}/>
                        <spam className={itemsCabecera.classTitle}>{itemsCabecera.title}</spam>
                    </div>
                    <div>
                        <spam className={itemsCabecera.classDescription}>{itemsCabecera.description}</spam>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportar Cabecera Drones para ser utilizado en archivos externos
export default CabeceraDrones;