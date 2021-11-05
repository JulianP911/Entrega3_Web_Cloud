// Importar React, hoja de estilo y items
import React from "react";
import "./jumbotronTerciario.css";
import itemsJumbotron from "./itemsJumbotronTerciario";
import { Link } from "react-router-dom";

// Funcion Jumbotron Terciario
function JumbotronTerciario() {
    return (
        <section>
            <div className="jumbotron-Map container-fluid d-flex justify-content-center align-items-start" id="sectionJumbotronMap">
                <div className="d-flex flex-column text-center mt-4">
                    <div className="p-2 bd-highlight">
                        <h1 className="display-9" id="font-text-jumbo-map">{itemsJumbotron.textFirst}</h1>
                    </div>
                    <div className="p-2 bd-highlight">
                        <h4 className="display-7" id="font-text-jumbo-map"><strong id="text-map-specific">{itemsJumbotron.textSeconday}</strong></h4>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Link to={itemsJumbotron.url}><button className="btn btn-outline-light rounded-pill font-text-buttom-jumbo" id="buttonCrearRuta">{itemsJumbotron.textThird}</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Exportar JumbotronTerciario para ser utilizado en archivos externos
export default JumbotronTerciario;