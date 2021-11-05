// Importar React, hoja de estilo y componentes
import React, { useState, useEffect } from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import { useHistory } from "react-router";
import "./login.css";
import BackGround from "./../../assets/img/LoginRegister.png";
import Alert from "./alert";
import * as Joi from "joi";
import { JoiPassword } from "joi-password";

// Funcion Login
function Login() {
    // Hook de history para el redireccionamiento
    let history = useHistory();
    // Hook de estado para el manejo de alertas
    const [alertState, setAlertState] = useState({state:"no",name:"",message:""})
    // Hooks de estado para el manejo de los datos de usuario
    const [dataForm, setData] = useState({
        username: "",
        password: ""
    })
    // Hook de efecto para conocer el estado de alertas
    useEffect(() => {
        console.log(alertState);
     });
    // Validacion de las entradas de datos
    const schema = Joi.object({
        username: Joi.string()
        .required()
        .min(5),
        password: JoiPassword.string()
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
        .min(8)
    })
    // Funcion handleSubmit para enviar la informacion de login
    function handleSubmit(event) {
        event.preventDefault();
        const {
            error
        } = schema.validate(dataForm)
        if (error) {
            console.log("Error in form")
            console.log(typeof(error))
            setAlertState({state:"error",name:"Error! ",message:error.message})
        } else {
            setAlertState({state:"info",name:"Verificando! ",message:"Estamos validando las credenciales."});
            console.log("Sending data")
            fetch(
                "https://skyplan-uniandes.herokuapp.com/api/login", {
                    method: "POST",
                    headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: dataForm.username,
                        password: dataForm.password,
                    }),
                }
            )
            .then((response) => {
                setAlertState("info")
                return response.json();
            })
            .then((data) => {
                if (data["success"]) {
                    data["usuario"] = dataForm.username;
                    setData({
                        password: "",
                        username: ""
                    })
                    setAlertState({state:"success",name:"Exito! ",message:"Redirigiendo en 1 seg."});
                    console.log("succes")
                    document.cookie = "token=" + JSON.stringify(data);
                    setTimeout(() => {
                        history.push("/menu");
                    }, 1000);
                } else {
                    setAlertState({state:"error",name:"Error! ",message:"Las credenciales no son correctas."});
                }
            })
            // eslint-disable-next-line no-console
            .catch((e) => console.log(e));
        }
    }
    // Funcion handleInputChange para obtener los datos del form
    function handleInputChange(event) {
        setData({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    return(
        <div className="contenedor" style={{ backgroundImage: `url(${BackGround})` }}>
            <Navbar />
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Iniciar Sesion</h3>
                        </div>
                        <div className="card-body" id="bodyC">
                            <Alert state={alertState}/>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nombre de usuario" name="username"
                                        onChange={handleInputChange} />
                                </div>
                                <div className="input-group form-group mt-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Clave" name="password"
                                        onChange={handleInputChange} />
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-outline-success" id="login">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                ¿No tienes cuenta? &nbsp; <a href="/registro">Registrate</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="/">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

// Exportar Login para ser utilizada en archivos externos
export default Login;