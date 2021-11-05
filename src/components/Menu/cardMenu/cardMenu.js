// Importar React, hoja de estilo y link
import React, {useState} from "react";
import "./cardMenu.css";
import { Link } from "react-router-dom";

// Funcion Card Menu
function CardMenu(props) {
    let [card] = useState(props.card)
    return(
        <div className="col-4 mt-5">
            <div className="card cardsMenu" style={{width: "20rem"}}>
                <img className="card-img-top cardsImg" src={card.srcImg} alt={card.altImg}/>
                        <div className="card-body">
                            <h5 className="card-title">{card.titleCard}</h5>
                            <p className="card-text-menu">
                                <ul>
                                    <li className="card-li">{card.itemOne}</li>
                                    <li className="card-li">{card.itemTwo}</li>
                                    <li className="card-li">{card.itemThree}</li>
                                </ul> 
                            </p>
                        <Link to={card.url}><button className="btn btn-outline-light rounded-pill font-text-buttom-jumbo-a" id="buttonDrone">{card.bottonCard}</button></Link>
                </div>
            </div>
        </div>
    )
}

// Exportar CardMenu para ser utilizado en archivos externos
export default CardMenu;