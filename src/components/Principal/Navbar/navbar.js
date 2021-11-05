// Importar React, hoja de estilo y items
import React from 'react'
import "./navbar.css";
import items from "./navbarItems";
import { Link } from "react-router-dom";

// Funcion navbar
function Navbar() {
    const LinkItems = items[1]
    const LogRegItems = items[2]
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-secondary" id="navbar">
                <div className="container d-flex justify-content-between">
                    <div>
                        <Link className="navbar-brand font-text" id="text-main" to=".">
                            <img src={items[0]['imgLogo']} alt={items[0]['altLogo']} width={items[0]['widht']} height={items[0]['height']}/>
                            {items[0]['title']}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {LinkItems.map(item => {
                                    if(String(item.title) === "Inicio") {
                                        return(
                                            <li className="nav-item" key={item.title}>
                                                <Link className={item.cName} aria-current={item.aCurrent} to={item.url} id={item.iName}>{item.title}</Link>
                                            </li>
                                        )
                                    } else {
                                        return(
                                            <li className="nav-item" key={item.title}>
                                                <Link className={item.cName} to={item.url} id={item.iName}>{item.title}</Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {LogRegItems.map(item => {
                                    if(String(item.title) === "Iniciar Sesión") {
                                        return (
                                            <li className="nav-item" key={item.title}>
                                                <Link className={item.cName} aria-current={item.aCurrent} to={item.url} id={item.iName}>{item.title}</Link>
                                            </li>
                                        )
                                    }
                                    else {
                                        return(
                                            <li className="nav-item" key={item.title}>
                                                <Link to={item.url}><button className={item.cName} id={item.iName}>Registrarse</button></Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

// Exportar navbar para ser utilizado en archivos externos
export default Navbar;