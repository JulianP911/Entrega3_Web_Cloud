// LinkItems: Inicio, Nosotros, Contacto
const LinkItems = [
    {
        title: "Inicio",
        url: "#",
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

// Header: Titulo, Imagen logo
const HeaderRight = {
    title: "Sky Plan",
    imgLogo: "https://img.icons8.com/color/48/000000/drone.png",
    altLogo: "Sky Plan Logo",
    width: "30",
    height: "32"
};

// Header: Titulo, Imagen logo
const HeaderLeft = {
    imgLogo: "/user-profile-pic.png",
    altLogo: "Sky Plan Usuario",
    width: "45",
    height: "45"
};

// Arreglo de objetos y subarreglos 
const items = [HeaderRight, LinkItems, HeaderLeft]

// Exportar items para ser utilizado en archivos externos
export default items;
