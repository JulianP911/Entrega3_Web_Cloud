// Importar React, componentes, fondo y hoja de estilo
import React from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import "./contacto.css";
import FormularioContacto from "./formularioContacto/formularioContacto";
import FormularioCabecera from "./folmularioCabecera/formularioCabecera";
import BackGround from "../../assets/img/ContactWallpaper.jpeg";

// Funcion Contacto
function contacto () {
    return (
        <div id="formCon" style={{ backgroundImage: `url(${BackGround})` }}>
            <Navbar/>
            <div className="mb-5">
                <FormularioCabecera/>
                <FormularioContacto/>
            </div>
            <Footer/>
        </div>
    );
}

// Exportar Contacto para ser utilizado en archivos externos
export default contacto;