// Importar React
import React from "react";

// Funcion Alert
function Alert(props){
    // Manejo de alertas para cada caso que se presenta en el login
    console.log(props.state)
    if (props.state.state === "error"){
        return(
            <div id="alert" className="alert alert-danger">
                <strong>{props.state.name}</strong> 
                {props.state.message}
            </div>
        )
    }
    else if (props.state.state === "info"){
        return(
            <div id="alert" className="alert alert-info">
                <strong>{props.state.name}</strong> 
                {props.state.message}
            </div>
        )
    }
    else if (props.state.state === "success"){
        return(
            <div id="alert" className="alert alert-success">
                <strong>{props.state.name}</strong> 
                {props.state.message}
            </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}

// Exportar Alert para ser utilizada en archivos externos
export default Alert;