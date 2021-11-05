// Importar React, hoja de estilo y items
import React from 'react'
import "./footer.css";
import items from "./footItems";

// Funcion footer
function Footer() {
    const HeaderItems = items[0]
    const LogosItems = items[1]
    const FootItem = items[2]
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col mt-3">
                        <a className="navbar-brand font-text-footer" id="text-main" href=".">
                            <img src={HeaderItems[0]['imgLogo']} alt={HeaderItems[0]['altLogo']} width={HeaderItems[0]['widht']} height={HeaderItems[0]['height']}/>
                            {HeaderItems[0]['text']}
                        </a>
                        <ul>
                            {HeaderItems.map(item => {
                                while (item.text !== "Sky Plan") {
                                    return (
                                        <li className={item.cName} key={item.text}>
                                            {item.text}
                                        </li>
                                    );
                                 }
                                return ("");
                            })}
                        </ul>
                    </div>
                    <div className="col mt-3 d-flex flex-row-reverse">
                        <div className="d-flex flex-column bd-highlight">
                            <div className="bd-highlight" id="logos">
                                <ul className="list-inline">
                                    {LogosItems.map(item => {
                                        return (
                                            <li className={item.cNameLi} key={item.name}>
                                                <a className={item.cNameA} href={item.url}>
                                                    <i className={item.cNameI}></i>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="bd-highlight text-footer">
                                <span id={FootItem['id']}>{FootItem['text']}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Exportar footer para ser utilizado en archivos externos
export default Footer;