// Importar React, hoja de estilo y items
import React from "react";
import "./jumbotronPrincipal.css";
import itemsJumbotron from "./itemsJumbotronPrincipal";
import { Link } from "react-router-dom";

// Funcion Jumbotron Principal
function JumbotroPrincipal() {
    return(
        <section>
            <div className="jumbotron container-fluid d-flex justify-content-center align-items-start" id="sectionJumbotron">
                <div className="d-flex flex-column text-center mt-5">
                    <div className="p-2 bd-highlight">
                        <h1 className="display-9" id="font-text-jumbo">{itemsJumbotron.textFirst}</h1>
                    </div>
                    <div className="p-2 bd-highlight">
                        <Link to={itemsJumbotron.url}><button className="btn btn-outline-light rounded-pill font-text-buttom-jumbo" id="buttonJumbotronRegistro">{itemsJumbotron.textSeconday}</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Exportar JumbotronPrincipal para ser utilizado en archivos externos
export default JumbotroPrincipal;