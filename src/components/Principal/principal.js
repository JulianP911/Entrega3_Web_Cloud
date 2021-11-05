// Importar React y componentes
import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";
import JumbotronPrincipal from "./JumbotronPrincipal/jumbotronPrincipal";
import JumbotronSecundario from "./JumbotronSecundario/jumbotronSecundario";
import JumbotronTerciario from "./JumbotronTerciario/jumbotronTerciario";
import JumbotronOpciones from "./JumbotronOpciones/jumbotronOpciones";
import JumbotronCuaternario from "./JumbotronCuaternario/jumbotronCuaternario";

// Funcion Principal
function principal() {
    const backGround = "#C4C4C4";
    return(
        <div style={{ background: backGround }}>
            <Navbar/>
            <JumbotronPrincipal/>
            <JumbotronSecundario/>
            <JumbotronTerciario/>
            <JumbotronOpciones/>
            <JumbotronCuaternario/>
            <Footer/>
        </div>
    )
}

// Exportar Principal para ser utilizado en archivos externos
export default principal;