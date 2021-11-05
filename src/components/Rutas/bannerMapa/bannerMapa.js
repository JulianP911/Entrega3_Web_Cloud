// Importar React y hoja de estilo
import React from "react";
import "./bannerMapa.css";

// Funcion Banner Mapa
function BannerMapa () {
    return(
        <div className="col-8 rounded mb-5" id="containerMap">
            <div className="d-flex flex-row justify-content-center rounded">
                <div className="row mt-2 text-center">
                            <h3 id="rutaSelected">Ruta</h3>
                        </div>
                        <span></span>
                    </div>
                    <hr/>
                <div id="mapGoogle" className="mb-3"></div>
                <div className="text-center mb-3 mt-3">
                    <div>
                        <button className="btn btn-outline-light rounded-pill font-text-buttom-jumbo-a" id="descarga">Descargar Ruta</button>
                    </div>
            </div>
            <script src="./mapaGoogle.js"></script>
        </div>
    );
}

// Exportar Banner Mapa para ser utilizado en archivos externos
export default BannerMapa;