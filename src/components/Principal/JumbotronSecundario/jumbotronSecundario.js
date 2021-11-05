// Importar React, hoja de estilo y items
import React from "react";
import "./jumbotronSecundario.css";
import itemsJumbotron from "./itemsJumbotronSecundario";
import { Link } from "react-router-dom";

// Funcion Jumbotron Secundario
function JumbotroSecundario() {
    const itemJumbotron1 = itemsJumbotron[0];
    const itemJumbotron2 = itemsJumbotron[1];
    return(
        <section>
        <div className="container-fluid py-3">
            <div className="row align-items-md-stretch">
                <div className="col-md-6" id="jumbotron-left">
                    <div className="h-100 p-5 text-white rounded-3 text-center">
                        <h3 className="text-jumbotron-lr">{itemJumbotron1.textFirst}</h3>
                        <Link to={itemJumbotron1.url}><button className="btn btn-outline-light rounded-pill font-text-buttom mt-3">{itemJumbotron2.textSeconday}</button></Link>
                    </div>
                </div>
                <div className="col-md-6" id="jumbotron-right">
                    <div className="h-100 p-5 text-white rounded-3 text-center">
                        <h3 className="text-jumbotron-lr text-center">{itemJumbotron2.textFirst}</h3>
                        <Link to={itemJumbotron2.url}><button className="btn btn-outline-light rounded-pill font-text-buttom mt-3">{itemJumbotron2.textSeconday}</button></Link>
                    </div>
                </div>
            </div>
          </div>
    </section>
    )
}

// Exportar JumbotronSecundario para ser utilizado en archivos externos
export default JumbotroSecundario;