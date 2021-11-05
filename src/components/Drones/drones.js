// Importar React, componentes, imagenes y hoja de estilo
import React from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import BannerDrones from "./bannerDrones/bannerDrones";
import CabeceraDrones from "./cabeceraDrones/cabeceraDrones";
import BackGround from "../../assets/img/DronesWallpaper.jpg";
import "./drones.css";
import CrearDrone from "./crearDrone/crearDrone";

// Funcion Drones
function drones () {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid d-flex justify-content-center align-items-start" id="cardsDronesT" style={{ backgroundImage: `url(${BackGround})` }}>
                <div className="d-flex flex-column text-center mt-4">
                    <CabeceraDrones/>
                    <BannerDrones/>
                    <CrearDrone/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

// Exportar Drones para ser utilizado en archivos externos
export default drones;