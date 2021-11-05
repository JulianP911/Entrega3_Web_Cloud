// Importar React y hoja de estilo
import React, { useState, useEffect } from "react";
import "./cabeceraAmbiente.css";

// Funcion Cabecera Ambiente
function CabeceraAmbiente () {
    let [ambienteBog, setAmbienteBog] = useState({});
    let [ambienteCar, setAmbienteCar] = useState({});
    let [ambienteBuc, setAmbienteBuc] = useState({});
    useEffect(() => {
        if(!navigator.onLine)
        {
            if(localStorage.getItem("ambienteBog") === null) {
                setAmbienteBog("Cargando ambiente Bogota...")
            } else {
                setAmbienteBog(JSON.parse(localStorage.getItem("ambienteBog")));
            }
        } else {
            // Obtener condiciones climaticas de Bogota
            let urlWeatherBo = "https://goweather.herokuapp.com/weather/Bogota";
            fetch(urlWeatherBo).then((response) => {
                return response.json();
            }).then(data => {
                setAmbienteBog(data);
                localStorage.setItem("ambienteBog", JSON.stringify(data));
            });
        }
    }, []);
    useEffect(() => {
        if(!navigator.onLine)
        {
            if(localStorage.getItem("ambienteCar") === null) {
                setAmbienteBog("Cargando ambiente Cartagena...")
            } else {
                setAmbienteBog(JSON.parse(localStorage.getItem("ambienteCar")));
            }
        } else {
            // Obtener condiciones climaticas de Cartagena
            let urlWeatherC = "https://goweather.herokuapp.com/weather/Cartagena";
            fetch(urlWeatherC).then((response) => {
                return response.json();
            }).then(data => {
                setAmbienteCar(data);
                localStorage.setItem("ambienteCar", JSON.stringify(data));
            });
         }
    }, []);
    useEffect(() => {
        if(!navigator.onLine)
        {
            if(localStorage.getItem("ambienteMed") === null) {
                setAmbienteBog("Cargando ambiente Medellin...")
            } else {
                setAmbienteBog(JSON.parse(localStorage.getItem("ambienteMed")));
            }
        } else {
            // Obtener condiciones climaticas de Bogota
            let urlWeatherBu = "https://goweather.herokuapp.com/weather/Medellin";
            fetch(urlWeatherBu).then((response) => {
                return response.json();
            }).then(data => {
                setAmbienteBuc(data);
                localStorage.setItem("ambienteMed", JSON.stringify(data));
            });
        }
    }, []);
    let date = new Date();
    let minutes = "";
    if(date.getMinutes().toString().length === 1)
    {
        minutes = "0" + date.getMinutes().toString();
    } else {
        minutes = date.getMinutes().toString();
    }
    return(
        <div className="col-8 mt-5 text-center rounded" id="containerClima">
            <div className="row">
                <div className="col-4">
                    <div className="d-flex flex-row justify-content-center mt-3">
                        <img src="https://img.icons8.com/wired/64/000000/sun.png" id="imgRutas" alt=""/>
                        <h3>CLIMA</h3>
                    </div>
                    <div>
                        <span>El tiempo en vivo {date.getHours()}:{minutes}</span>
                    </div>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <h6 className="mt-2">Bogotá</h6>
                                <span>{ambienteBog.temperature}</span>
                            </div>
                            <div>
                                <span>{ambienteBog.wind}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <h6 className="mt-2">Cartagena</h6>
                                <span>{ambienteCar.temperature}</span>
                            </div>
                            <div>
                                <span>{ambienteCar.wind}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <h6 className="mt-2">Medellin</h6>
                                <span>{ambienteBuc.temperature}</span>
                            </div>
                            <div>
                                <span>{ambienteBuc.wind}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportar CabeceraAmbiente para ser utilizado en archivos externos
export default CabeceraAmbiente;