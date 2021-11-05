// Importar React, hoja de estilo y componentes
import React from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import BackGround from "../../assets/img/PhotoBackgroundRoutes.jpg";
import CabeceraAmbiente from "./cabeceraAmbiente/cabeceraAmbiente";
import "./rutas.css";
import CabeceraRuta from "./cabeceraRuta/cabeceraRuta";
import BannerMapa from "./bannerMapa/bannerMapa";
import BannerRuta from "./bannerRuta/bannerRuta";

// Funcion Rutas
function rutas () {
    return(
        <div className="contenedor" style={{ backgroundImage: `url(${BackGround})` }}>
            <Navbar />
                <div className="container">
                    <div className="row">
                        <CabeceraRuta/>
                        <CabeceraAmbiente/>
                    </div>
                    <div className="row mt-5">
                        <BannerRuta/>
                        <BannerMapa/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

// Exportar rutas para ser utilizada en archivos externos
export default rutas;