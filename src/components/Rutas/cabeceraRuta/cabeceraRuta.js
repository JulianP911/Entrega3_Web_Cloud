// Importar React y hoja de estilo
import React from "react";
import RutaImage from "../../../assets/img/external-flag-outdoor-kiranshastry-lineal-kiranshastry-1.png"
import "./cabeceraRuta.css";

// Funcion Cabecera Ruta
function CabeceraRuta () {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;;
    return(
        <div className="col-4 d-flex flex-column mt-5 text-center rounded" id="containerRutas">
            <div className="d-flex flex-row justify-content-center mt-3">
                <img src={RutaImage} id="imgRutas" alt="Ruta Imagen"/>
                <h3>MIS RUTAS</h3>
            </div>
            <div>
                <span>Ultima actualización: {today}</span>
            </div>
        </div>
    );
}

// Exportar CabeceraRuta para ser utilizado en archivos externos
export default CabeceraRuta;