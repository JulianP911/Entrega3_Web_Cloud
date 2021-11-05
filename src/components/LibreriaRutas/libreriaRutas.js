// Importar React, componentes, imagenes y hoja de estilo
import React, { useState, useEffect, Fragment } from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "../LibreriaRutas/libreriaRutas.css";
import RutaCard from "./RutaCard/rutaCard";
import BackGround from "../../assets/img/libreriaRutas.png";
import { Link } from "react-router-dom";

// Funcion Libreria Rutas
function LibreriaRutas() {
  // Manejo de las cookies para obtener el token
  let coookie = document.cookie;
  let cookieJ = coookie.substring(6, coookie.length);
  let JsonCook = JSON.parse(cookieJ);
  // eslint-disable-next-line no-unused-vars
  let [cookies, setCookies] = useState(
    JsonCook.token
  );
  let [rutas, setRutas] = useState([]);
  useEffect(() => {
    if(!navigator.onLine) {
      if(localStorage.getItem("libreriaRutasData") === null) {
        setRutas("Cargando libreria de rutas...");
      } else {
        setRutas(JSON.parse(localStorage.getItem("libreriaRutasData")));
      }
    } else {
      const getRutas = async () => {
        let rutasFromSever = await fetchRutas();
        console.log("prueba", rutasFromSever.length);
        setRutas(rutasFromSever);
        localStorage.setItem("libreriaRutasData", JSON.stringify(rutasFromSever));
        console.log("rutas inside get rutas", rutas)
      };
      getRutas();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchRutas = async () => {
    const res = await fetch(
      "https://skyplan-uniandes.herokuapp.com/api/rutas",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + cookies,
        },
      }
    );
    const data = await res.json();
    return data;
  };
  return (
    <Fragment>
      <Navbar/>
      <div className="background container-fluid justify-content-center align-items-start" style={{ backgroundImage: `url(${BackGround})` }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-6 rutasHeader mt-4" id="contenedorRutas">
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/book-shelf.png" alt="Libreria Imagen" width="35" height="35"/>
                <spam className="letra font-text-jumbo mt-2">Libreria de Rutas</spam>
              </div>
              <div>
                <spam className="letraCenter">Ultima actualización hace 10 minutos</spam>
              </div>
            </div>
            <div className="col-6 mt-4 d-flex justify-content-end" id="contendorBotonSuscribirse">
              <div>
                <Link to="/contacto"><button id="buttonSuscribirse" href="." className="btn btn-outline-light rounded-pill font-text-buttom mt-3">
                Suscríbite y recibe notifiaciones
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-4 d-flex justify-content-center">
            <div className="col-6 rutas mt-4">
              <div className="mt-3">
                <h4 id="titulosLibrerias">RUTAS MÁS POPULARES</h4>
              </div>
              <hr></hr>
              <div className="row">
                {rutas.length> 0 ? (<RutaCard rutas={rutas} linkLike="https://img.icons8.com/ios/50/000000/facebook-like--v1.png" linkReview="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-rating-reputation-bearicons-flat-bearicons.png"/>): <span>"No hay rutas disponibles"</span>}
              </div>
              <div className="text-center">
                <button className="btn btn-outline-light rounded-pill black-buttom mt-3" type="submit">
                  Ver más
                </button>
              </div>
            </div>
            <div className="col-6 rutas mt-4" id="colMed">
              <div className="mt-3">
                <h4 id="titulosLibrerias">RUTAS NUEVAS</h4>
              </div>
              <hr></hr>
              <div className="row">
                {rutas.length> 0 ? (<RutaCard rutas={rutas} linkLike="https://img.icons8.com/wired/64/000000/map.png" linkReview="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-rating-reputation-bearicons-flat-bearicons.png"/>): <span>"No hay rutas disponibles"</span>}
              </div>
              <div className="text-center mb-3">
                <button className="btn btn-outline-light rounded-pill black-buttom mt-3" type="submit">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

// Exportar Libreria Rutas para ser utilizado en archivos externos
export default LibreriaRutas;
