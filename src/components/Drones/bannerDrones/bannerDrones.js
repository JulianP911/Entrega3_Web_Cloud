// Importar React y componentes
import React, { useState, useEffect } from "react";
import DroneCard from "./droneCard/droneCard";

// Funcion BannerDrones
function BannerDrones() {
    const [drones, setDrones] = useState([]);
    useEffect(() => {
      if(!navigator.onLine)
      {
        if(localStorage.getItem("dronesData") === null) {
          setDrones("Cargando drones...")
        } else {
          setDrones(JSON.parse(localStorage.getItem("dronesData")));
        }
      } else {
        // Manejo de las cookies
        let coookie = document.cookie;
        let cookieJ = coookie.substring(6, coookie.length);
        let JsonCook = JSON.parse(cookieJ);
        let cookieT = JsonCook.token;
        let cookieU = JsonCook.usuario;
        // Url del api de usuarios y drones
        let urlDrones = "https://skyplan-uniandes.herokuapp.com/api/drones";
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
            drones(id);
        }).catch((e) => console.log(e));
        // Fecth para obtener los drones correspondientes
        async function drones(id) {
            return fetch(
              urlDrones,
              {
                method: "GET",
                headers: {
                  Accept: "*/*",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + cookieT,
                },
              }
            )
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                let dronesU = [];
                data.forEach((element) => {
                  if (element.UsuarioId === id) {
                    dronesU.push(element);
                  }
                });
                setDrones(dronesU);
                localStorage.setItem("dronesData", JSON.stringify(dronesU));
              })
              .catch((e) => console.warn(e));
        };
      };
    }, [])
    return(
        <div className="container">
            <div className="row align-items-center">
              {drones.map((d) => <DroneCard drone={d} key={d.id}/>)}
            </div>
        </div>
    );
}

// Exportar BannerDrones para ser utilizado en archivos externos
export default BannerDrones;