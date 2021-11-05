// Importar React, hoja de estilo y items
import React from "react";
import "./jumbotronOpciones.css";
import itemsJumbotron from "./itemsJumbotronOpciones";
import { Link } from "react-router-dom";

// Funcion Jumbotron Opciones
function JumbotronOpciones() {
    return(
        <section>
            <div className="container marketing mt-5">
                <div className="row">
                    {itemsJumbotron.map(item => {
                        return(
                            <div className="col-lg-4" key={item.textFirst}>
                                <img className={item.classImg} width={item.widthImg} height={item.heightImg} alt={item.altImg} src={item.srcImg}/>
                                <h2>{item.textFirst}</h2>
                                <p>{item.textSecond}</p>
                                <p>
                                    <Link to={item.url}><button className={item.classButton}>{item.textThird}</button></Link>
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

// Exportar JumbotronOpciones para ser utilizado en archivos externos
export default JumbotronOpciones;