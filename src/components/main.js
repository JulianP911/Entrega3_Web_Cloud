// Importar React, hoja de estilo y componentes
import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Principal from "./Principal/principal";
import Nosotros from "./Nosotros/nosotros";
import Contacto from "./Contacto/contacto";
import Registro from "./Registro/registro";
import Login from "./Login/login";
import Menu from "./Menu/menu";
import Drones from "./Drones/drones";
import Rutas from "./Rutas/rutas"
import LibreriaRutas from "./LibreriaRutas/libreriaRutas";
import Disponibilidad from "./Disponibilidad/disponibilidad";

// Funcion Main
function Main() {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Principal}></Route>
                <Route exact path="/nosotros" component={Nosotros}></Route>
                <Route exact path="/contacto" component={Contacto}></Route>
                <Route exact path="/registro" component={Registro}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/menu" component={Menu}></Route>
                <Route exact path="/drones" component={Drones}></Route>
                <Route exact path="/rutas" component={Rutas}></Route>
                <Route exact path="/libreriaRutas" component={LibreriaRutas}></Route>
                <Route component={Disponibilidad}></Route>
            </Switch>
        </HashRouter>
    )
}

// Exportar Main para ser utilizada en archivos externos
export default Main;