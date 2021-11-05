// LinkItems: Inicio, Nosotros, Contacto
const LinkItems = [
    {
        title: "Inicio",
        url: ".",
        aCurrent: "page",
        cName: "nav-link active font-text",
        iName: "buttonInicio"
    },
    {
        title: "Nosotros",
        url: "/nosotros",
        cName: "nav-link font-text",
        iName: "buttonNosotros"
    },
    {
        title: "Contacto",
        url: "/contacto",
        cName: "nav-link font-text",
        iName: "buttonContacto"
    }
];

// LogRegItems: Iniciar sesión, Registro
const LogRegItems = [
    {
        title: "Iniciar Sesión",
        url: "/login",
        aCurrent: "page",
        cName: "nav-link active font-text",
        iName: "buttonLogin"
    },
    {
        title:"Registrarse",
        url: "/registro",
        cName: "btn btn-outline-light rounded-pill font-text-buttom",
        iName: "buttonRegister"
    }
]

// Header: Titulo, Imagen logo
const Header = {
    title: "Sky Plan",
    imgLogo: "https://img.icons8.com/color/48/000000/drone.png",
    altLogo: "Sky Plan Logo",
    width: "30",
    height: "32"
};

// Arreglo de objetos y subarreglos 
const items = [Header, LinkItems, LogRegItems]

// Exportar items para ser utilizado en archivos externos
export default items;
