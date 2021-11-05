// Importar React, items formulario y estilo
import React, { useState, useEffect } from "react";
import "./formularioCabecera.css";
import itemsFormulario from "./itemsFormularioCabecera";

// Funcion Formulario Cabecera
function FormularioCabecera() {
    let [itemsForm, setItemsForm] = useState({})
    useEffect(() => {
        if(!navigator.onLine) {
            if(localStorage.getItem("itemsFormDatos") === null) {
                setItemsForm("Cargando items de contacto...")
            } else {
                setItemsForm(JSON.parse(localStorage.getItem("itemsFormDatos")));
            }
        }
        else {
            setItemsForm(itemsFormulario);
            localStorage.setItem("itemsFormDatos", JSON.stringify(itemsFormulario));
        }
    }, [])
    return(
        <div className="container d-flex justify-content-center text-center">
            <div id="dataUserHead" className="justify-content-center rounded mt-5">
                <div className="logo">
                    <a className="navbar-brand" href="."><img src={itemsForm.srcImg} alt={itemsForm.altImg} width={itemsForm.width} height={itemsForm.height}/></a>
                </div>          
                <div>
                    <a className="navbar-brand font-weight-normal text-dark nombreLogo2" href=".">{itemsForm.title}</a>
                </div>   
                <div>
                    <p className="lead">{itemsForm.description}</p>
                </div>
            </div>
        </div>
    );
}

// Exportar Formulario Cabecera para ser utilizado en archivos externos
export default FormularioCabecera;