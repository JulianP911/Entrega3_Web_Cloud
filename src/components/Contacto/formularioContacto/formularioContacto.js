// Importar React, useState y hoja de estilo
import React, { useState } from "react";
import "./formularioContacto.css"

// Funcion Formulario Contacto
function FormularioContacto () {
    let [datos, setDatos] = useState({
        nombre: '',
        email: '',
        emailCon: ''
    });
    function handleInputChange (event) {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    function enviarDatos(event) {
        event.preventDefault();
        console.log("Enviando los datos del formulario " + datos.nombre + " " + datos.email + " " + datos.emailCon);
    }
    return(
        <div className="container formularioDatos d-flex justify-content-center rounded" id="dataUser">
            <div className="row" id="formSky">
                <form onSubmit={enviarDatos}>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="nombre" className="mt-3 tagName">Nombre</label>
                                <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Ingrese su nombre" name="nombre" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="email" className="tagName">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingrese su email" name="email" onChange={handleInputChange}/>
                                <small id="emailHelp" className="form-text text-muted">Recuerde que por este medio recibirá las notificaciones.</small>
                            </div>
                            <div className="col">
                                <label htmlFor="emailCon" className="tagName">Confirmacion Email</label>
                                <input type="email" className="form-control" id="emailCon" placeholder="Ingrese su email nuevamente" name="emailCon" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3 mb-3">
                        <button type="submit" className="btn btn-dark">Enviar Información</button>
                        <span id="enviar"></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Exportar Formulario Contacto para ser utilizado en archivos externos
export default FormularioContacto;