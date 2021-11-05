// Importar React, hoja de estilo y componentes
import React, { useState, useEffect } from "react";
import RutaCard from "./rutaCard/rutaCard";
import "./bannerRuta.css"

// Funcion Banner Ruta
function BannerRuta () {
    const [rutas, setRutas] = useState([]);
    useEffect(() => {
      if(!navigator.onLine)
      {
        if(localStorage.getItem("rutasData") === null) {
          setRutas("Cargando rutas...")
        } else {
          setRutas(JSON.parse(localStorage.getItem("rutasData")));
        }
      } else {
        // Manejo de las cookies
        let coookie = document.cookie;
        let cookieJ = coookie.substring(6, coookie.length);
        let JsonCook = JSON.parse(cookieJ);
        let cookieT = JsonCook.token;
        let cookieU = JsonCook.usuario;
        // Url del api de usuarios y drones
        let urlRutas = "https://skyplan-uniandes.herokuapp.com/api/rutas";
        let urlUsuarios = "https://skyplan-uniandes.herokuapp.com/api/usuarios";
        // Fecth para obtener el id correspondiente del usuario
        fetch(
            urlUsuarios,
            {
              method: "GET",
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: "Bearer " + cookieT,
              },
            }
          ).then((response) => {
            return response.json();
          }).then((data) => {
            let users = [];
            users.push(data);
            let i = 0;
            let id = "";
            users.forEach((element) => {
              if (element[i].nombreUsuario === cookieU) {
                id = element[i].id;
              }
              i++;
            });
            rutas(id);
          }).catch((e) => console.log(e));

          // Fecth para obtener las rutas correspondientes
          async function rutas(id) {
            return fetch(
              urlRutas,
              {
                method: "GET",
                headers: {
                  Accept: "*/*",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + cookieT,
                },
              }
            ).then((response) => {
                return response.json();
              }).then((data) => {
                let rutasUser = [];
                data.forEach((element) => {      
                  rutasUser.push(element);
                });
                setRutas(rutasUser);
                localStorage.setItem("dronesData", JSON.stringify(rutasUser));
              })
              .catch((e) => console.warn(e));
          }
      }
    }, [])

    return(
    <div className="col-4 flex-row justify-content-center rounded"  id="listadoRutas">            
        <div className="row mt-2 text-center">
            <h3>Rutas Creadas</h3>
            <hr/>
        </div>
        <div className="row" id="contenidoRutas">
          {rutas.map((d) => <RutaCard ruta={d}/>)}
          <div className="text-center mb-3">
            <button className="btn btn-outline-light rounded-pill black-buttom mt-3" type="submit">
              Ver más
            </button>
          </div>
        </div>
    </div>
    )
}

// Exportar banner ruta para ser utilizada en archivos externos
export default BannerRuta;