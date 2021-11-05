// Importar React, hoja de estilo, componentes y items
import React, { useState, useEffect } from "react";
import "./nosotros.css";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import itemsMenu from "./itemsNosotros";
import BackGround from "../../assets/img/NosotrosWallpaper.jpeg";
import { Link } from "react-router-dom";

// Funcion Nosotros
function Nosotros() {
    let [itemsNosotros, setItemsNosotros] = useState({})
    useEffect(() => {
        if(!navigator.onLine) {
            if(localStorage.getItem("itemsNosotrosDatos") === null) {
                setItemsNosotros("Cargando items de nosotros...")
            } else {
                setItemsNosotros(JSON.parse(localStorage.getItem("itemsNosotrosDatos")));
            }
        }
        else {
            setItemsNosotros(itemsMenu);
            localStorage.setItem("itemsNosotrosDatos", JSON.stringify(itemsMenu));
        }
    }, [])
    return (
        <div style={{ backgroundImage: `url(${BackGround})`}} id="jumbotronNosotros">
            <Navbar/>
            <div className=" py-5 text-center d-flex justify-content-center">
                <div id="nostrosSection" className="rounded">
                    <img className="d-block mx-auto mb-4 mt-5" src={itemsNosotros.urlImg} alt={itemsNosotros.altImg} width={itemsNosotros.width} height={itemsNosotros.height}/>
                    <h1 className="display-5 fw-bold textNosotros">{itemsNosotros.title}</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 textNosotros">{itemsNosotros.description}</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to={{ pathname: itemsNosotros.urlBotton }} target="_blank"><button className="btn btn-outline-light rounded-pill font-text-buttom-jumbo-a">{itemsNosotros.textBotton}</button></Link>
                        </div>
                     </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

// Exportar nosotros para ser utilizado en archivos externos
export default Nosotros;