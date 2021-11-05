import React, { useState } from "react";
import Navbar from "../Principal/Navbar/navbar";
import Footer from "../Principal/Footer/footer";
import { useHistory } from "react-router";
import "./registro.css";
import BackGround from "./../../assets/img/LoginRegister.png";
import Alert from "../Login/alert";
import * as Joi from "joi";
import { JoiPassword } from "joi-password";


function Registro() {
    // Hook de history para el redireccionamiento
    let history = useHistory();
    // Hook de estado para el manejo de alertas
    const [alertState, setAlertState] = useState({state:"no",name:"",message:""})
    // Hooks de estado para el manejo de los datos de usuario
    const [dataForm, setData] = useState({
        name: "",
        lName: "",
        user: "",
        city: "",
        country: "",
        age: "18",
        hours: "0",
        gender: "Masculino",
        terms: false,
        url: "",
        username: "",
        password: ""
    })
    // Validacion de las entradas de datos
    const schema = Joi.object({
        user: Joi.string()
        .required()
        .min(5),
        password: JoiPassword.string()
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
        .min(8),
        name: Joi.string()
        .required()
        .min(2),
        lName: Joi.string()
        .required()
        .min(2),
        city: Joi.string()
        .required()
        .min(2),
        country: Joi.string()
        .required()
        .min(5),
        age: Joi.number()
        .integer()
        .required()
        .min(16)
        .max(200),
        hours: Joi.number()
        .integer()
        .min(0)
        .required(),
        url: Joi.string()
        .required()
        .min(2)
    }).unknown(true)
    // Funcion handleSubmit para enviar la informacion de login
    function handleSubmit(event) {
        event.preventDefault();
        const {
            error
        } = schema.validate(dataForm)
        if (error) {
            setAlertState({state:"error",name:"Error! ",message:error.message})
        } 
        else if(!dataForm.terms){
            setAlertState({state:"error",name:"Error! ",message:"Debe aceptar los terminos y condiciones."})
        }
        else {
            setAlertState({state:"info",name:"Registrando! ",message:"Espere un momento."});
            fetch(
                "https://skyplan-uniandes.herokuapp.com/api/usuarios",
                {
                  method: "POST",
                  headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    nombreUsuario: dataForm.user,
                    nombreCompleto: dataForm.name + " " + dataForm.lName,
                    contrasenia: dataForm.password,
                    linkFotoPerfil: dataForm.url,
                    tipoUsuario: "Admin",
                    edad: parseInt(dataForm.age),
                    sexo: dataForm.gender,
                    pais: dataForm.country,
                    ciudad: dataForm.city,
                    horasVuelo: parseInt(dataForm.hours),
                  }),
                }
              )
                .then((response) => {
                    setAlertState("info");
                  return response.json();
                })
                .then((data) => {
                console.log(data)
                  if (data["id"]) {
                    setAlertState({state:"success",name:"Exito! ",message:"Redirigiendo en 1 seg."});
                    document.cookie = "token=" + data["token"];
                    setTimeout(() => {
                        history.push("/login");
                    }, 1000);
                  } else {
                    setAlertState({state:"error",name:"Error! ",message:"No es posible hacer el registro en este momento."})
                  }
                })
                // eslint-disable-next-line no-console
                .catch((e) => console.log(e));
        }
    }
    // Funcion handleInputChange para obtener los datos del form
    function handleInputChange(event) {
        if (event.target.name === "terms"){
            setData({
                ...dataForm,
                [event.target.name]: event.target.checked
            })
        }else{
        setData({
            ...dataForm,
            [event.target.name]: event.target.value
        })}
    }
    return(
        <div className="contenedor" style={{ backgroundImage: `url(${BackGround})` }}>
            <Navbar />
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Registarse</h3>
                        </div>
                        <div className="card-body" id="bodyC">
                            <Alert state={alertState}/>
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-4">
                                    <label for="validationCustom01" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="validationCustom01" name="name" onChange={handleInputChange}  requiered />
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustom02" className="form-label">Apellido</label>
                                    <input type="text" className="form-control" id="validationCustom02" name="lName" onChange={handleInputChange}  requiered />
                                </div>
                                <div className="col-md-4">
                                    <label for="validationCustomUsername" className="form-label">Nombre de usuario</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="user" onChange={handleInputChange}  requiered />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label for="validationCustom03" className="form-label">Ciudad</label>
                                    <input type="text" className="form-control" id="validationCustom03" name="city" onChange={handleInputChange}  requiered />
                                </div>
                                <div className="col-md-3">
                                    <label for="validationCustom04" className="form-label">Pais</label>
                                    <input type="text" className="form-control" id="validationCustom04" name="country" onChange={handleInputChange}  requiered />
                                </div>
                                <div className="col-md-2">
                                    <label for="validationCustom05" className="form-label">Edad</label>
                                    <input type="number" value={dataForm.age} min="16" max="120" className="form-control" id="validationCustom05" name="age" onChange={handleInputChange}  requiered />
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"  name="password" onChange={handleInputChange}  requiered />
                                    </div>      
                                </div>
                                <div className="col-md-6">
                                    <label for="validationCustom06" className="form-label">Horas de vuelo</label>
                                    <input type="range" value={dataForm.hours} min="0" max="5000" className="form-control" id="validationCustom06" name="hours" onChange={handleInputChange}  requiered />
                                    <output>0</output>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Sexo</label>
                                    <div className="form-check selecSexo">
                                        <input className="form-check-input checkmark" type="radio"  id="exampleRadios1" value="Masculino" checked={dataForm.gender === "Masculino"} name="gender" onChange={handleInputChange}  requiered />
                                        <label className="form-check-label" for="exampleRadios1">
                                        Masculino
                                        </label>
                                    </div>
                                    <div className="form-check selecSexo">
                                        <input className="form-check-input checkmark" type="radio"  id="exampleRadios2" value="Femenino" checked={dataForm.gender === "Femenino"} name="gender" onChange={handleInputChange}  requiered />
                                        <label className="form-check-label" for="exampleRadios2">
                                        Femenino
                                        </label>
                                    </div>
                                    <div className="form-check selecSexo">
                                        <input className="form-check-input checkmark" type="radio"  id="exampleRadios3" value="Otro" checked={dataForm.gender === "Otro"} name="gender" onChange={handleInputChange}  requiered />
                                        <label className="form-check-label" for="exampleRadios3">
                                        Otro
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label for="basic-url" className="form-label">URL Imagen</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"
                                                id="basic-addon3"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="url" onChange={handleInputChange}  requiered />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" name="terms" onChange={handleInputChange}  requiered />
                                        <label className="form-check-label" for="invalidCheck">
                                            Acepta los terminos y condiciones.
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark" type="submit">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

// Exportar Registro para ser utilizada en archivos externos
export default Registro;

