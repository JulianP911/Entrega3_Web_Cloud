// Importar React y hoja de estilo
import React from "react";
import "./disponibilidad.css";

// Funcion Disponibilidad
function disponibilidad() {
    return(
        <div className="d-flex justify-content-center">
            <div className="px-4 py-5 my-5 text-center border border-4 rounded" id="contenedor">
                <h1 className="display-8">Sky Plan</h1>
                <img className="d-block mx-auto mb-4" src="https://img.icons8.com/color/48/000000/drone.png" alt="" width="100" height="100"/>
                <h3 className="display-5 fw-bold">404. Archivo no encontrado.</h3>
                <p className="lead mb-3">La URL solicitada no se encontró en este servidor.</p>
            </div>
        </div>
    )
}

// Exportar Disponbilidad para ser utilizado en archivos externos
export default disponibilidad;