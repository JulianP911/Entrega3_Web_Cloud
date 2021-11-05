// Importar React, hoja de estilo y items
import React from "react";
import "./jumbotronCuaternario.css";
import itemsJumbotron from "./itemsJumbotronCuaternario";

// Funcion Jumbotron Cuaternario
function JumbotronCuaternario() {
    return(
        <section id="map-div" className="mb-3">
            <div className="container col-xl-10 col-xxl-8">
                <div className="row align-items-center  py-3">
                    <div className="col-lg-7 text-center text-lg-start rounded" id="map">
                    </div>
                    <div className="col-md-10 mx-auto col-lg-5 rounded">
                        <div className="bg-light rounded text-center" id="map-user">
                            <img className={itemsJumbotron.classImg} alt={itemsJumbotron.altImg} src={itemsJumbotron.srcImg} width={itemsJumbotron.widthImg} height={itemsJumbotron.heightImg}/>
                            <br></br>
                            <span className={itemsJumbotron.classSpan}>{itemsJumbotron.textFirst}</span>
                            <br></br>
                            <span className={itemsJumbotron.classSpan}>{itemsJumbotron.textSecond}</span>
                            <br></br>
                            <span className={itemsJumbotron.classSpan}>{itemsJumbotron.textThird}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Exportar JumbotronCuaternario para ser utilizado en archivos externos
export default JumbotronCuaternario;