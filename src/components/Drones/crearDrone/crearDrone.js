// Importar React, componentes de bootstrap y hoja de estilo
import React, {useState} from "react";
import "./crearDrone.css";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

// Funcion CrearDrone
function CrearDrone() {
    let [estado, setEstado] = useState({abierto: false})
    let [datos, setDatos] = useState({
        modelo: '',
        fabricante: '',
        tiempoVueloMax: '',
        tipoFuncionalidad: '',
        velocidadMax: '',
        alturaMax: '',
        conectividad: '',
        almacenamiento: '',
        peso: ''
    });
    function handleInputChange (event) {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    function abrirModal() {
        console.log("a")
        setEstado({abierto: !estado.abierto})
        console.log(estado)
    }
    function enviarDatos(event) {
        event.preventDefault();
        // Manejo de las cookies
        let coookie = document.cookie;
        let cookieJ = coookie.substring(6, coookie.length);
        let JsonCook = JSON.parse(cookieJ);
        let cookieT = JsonCook.token;
        let cookieU = JsonCook.usuario;
        let urlUsuarios = "https://skyplan-uniandes.herokuapp.com/api/usuarios";
        fetch(
            urlUsuarios,
            {
              method: "GET",
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                Authorization: "Bearer " + cookieT,
              },
            }
        ).then((response) => {
            return response.json();
        }).then((data) => {
            let users = [];
            users.push(data);
            let i = 0;
            let id = "";
            users.forEach((element) => {
                if (element[i].nombreUsuario === cookieU) {
                  id = element[i].id;
                }
                i++;
            });
            datos["UsuarioId"] = id + "";
            datos["DimensionId"] = id + "";
            return datos;
        }).then((drone) => {
            droneAdd(drone);
        });

        async function droneAdd (drone) {
            let urlDrones = "https://skyplan-uniandes.herokuapp.com/api/drones"
            fetch(
              urlDrones,
              {
                method: "POST",
                headers: {
                  "Accept": "*/*",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + cookieT
                },
                body: JSON.stringify(drone),
              }
            ).then((response) => {
                console.log(response.json());
                window.location.reload();
            }).catch((e) => console.log(e));
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="d-flex flex-column text-center mt-4 mb-4">
                    <div className="p-2 bd-highlight">
                        <Button className="btn btn-outline-light rounded-pill" id="font-text-buttom-jumbo" onClick={abrirModal}>Añadir más drones a la colección</Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={estado.abierto} className={{ overlay: { backgroundColor: '#8D8E8E' }}}>
                <ModalHeader>
                    <h5 className="modal-title" id="exampleModalLabel">Añadir un nuevo drone</h5>
                </ModalHeader>
                <ModalBody>
                    <form id="myForm" onClick={enviarDatos}>
                        <div className="form-group">
                            <label for="modeloInput" className="labelsDrone">Modelo</label>
                            <input type="text" className="form-control" id="modeloInput" aria-describedby="modeloHelp" placeholder="Ingresa el modelo" name="modelo" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="fabricanteInput" className="labelsDrone">Fabricante</label>
                            <input type="text" className="form-control" id="fabricanteInput" placeholder="Ingresar fabricante" name="fabricante" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="tiempoVueloInput" className="labelsDrone">Tiempo de vuelo máx</label>
                            <input type="number" className="form-control" id="tiempoVueloInput" placeholder="Ingresar tiempo de vuelo máx" name="tiempoVueloMax" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="tipoFuncionalidadInput" className="labelsDrone">Tipo de funcionalidad</label>
                            <input type="text" className="form-control" id="tipoFuncionalidadInput" placeholder="Ingresar tipo de funcionalidad" name="tipoFuncionalidad" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="velocidadMaximaInput" className="labelsDrone">Velocidad máxima</label>
                            <input type="number" className="form-control" id="velocidadMaximaInput" placeholder="Ingresar la velocidad máx" name="velocidadMax" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="alturaMaximaInput" className="labelsDrone">Altura máxima</label>
                            <input type="number" className="form-control" id="alturaMaximaInput" placeholder="Ingresar la altura máx" name="alturaMax" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="conectividadInput" className="labelsDrone">Conectividad</label>
                            <input type="text" className="form-control" id="conectividadInput" placeholder="Ingresar el tipo de conectividad" name="conectividad" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="almacenamientoInput" className="labelsDrone">Almacenamaiento</label>
                            <input type="number" className="form-control" id="almacenamientoInput" placeholder="Ingresar el almacenamiento" name="almacenamiento" onChange={handleInputChange}/>
                        </div>
                        <div className="form-group">
                            <label for="pesoInput" className="labelsDrone">Peso</label>
                            <input type="number" className="form-control" id="pesoInput" placeholder="Ingresar el peso del drone" name="peso" onChange={handleInputChange}/>
                        </div>
                        <div className="mt-3">
                            <button type="cancel" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-dark ml-2" onClick={abrirModal} style={{marginLeft: "10px"}}>Añadir</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

// Exportar Crear Drone para ser utilizado en archivos externos
export default CrearDrone;