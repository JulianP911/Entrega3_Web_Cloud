// Importar React, hoja de estilos, componentes y items
import React, {useState} from "react";
import "./configMenu/menu.css";
import itemsMenu from "./configMenu/itemsMenu";
import CardMenu from "./cardMenu/cardMenu";
import NavbarUsuario from "../Principal/NavbarUsuario/navbarUsuario";
import Footer from "../Principal/Footer/footer";
import BackGround from "../../assets/img/MenuWalppaper.jpeg";

// Funcion Menu
function Menu() {
    let [cards] = useState(itemsMenu)
    return (
        <main>
            <NavbarUsuario/>
            <div id="jumbotronCards" style={{ backgroundImage: `url(${BackGround})` }}>
                <div className="container">
                    <div className="row">
                        {cards.map(c => <CardMenu card={c} key={c.titleCard}/>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

// Exportar Menu para ser utilizado en archivos externos
export default Menu;