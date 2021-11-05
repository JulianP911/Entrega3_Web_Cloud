// LogRegItems: Sky Plan, Colombia, Copyright
const HeaderItems = [
    {
        text: "Sky Plan",
        imgLogo: "https://img.icons8.com/color/48/000000/drone.png",
        altLogo: "Sky Plan Logo",
        width: "30",
        height: "32"
    },
    {
        text: "Colombia / Español",
        cName: "text-footer"
    },
    {
        text: "Copyright © 2021 SkyPlan Todos los derechos reservados.",
        cName: "text-footer"
    }
]

// LogosItems: Correo, Facebook, Twitter, Instagram, Github
const LogosItems = [
    {
        name:"Correo",
        url: "#",
        cNameLi: "list-inline-item",
        cNameA: "logo-color",
        cNameI: "fa fa-envelope fa-lg fa-fw"
    },
    {
        name:"Facebook",
        url: "#",
        cNameLi: "list-inline-item",
        cNameA: "logo-color",
        cNameI: "fab fa-facebook-square fa-lg fa-fw"
    },
    {
        name:"Twitter",
        url: "#",
        cNameLi: "list-inline-item",
        cNameA: "logo-color",
        cNameI: "fab fa-twitter-square fa-lg fa-fw"
    },
    {
        name:"Instagram",
        url: "#",
        cNameLi: "list-inline-item",
        cNameA: "logo-color",
        cNameI: "fab fa-instagram fa-lg fa-fw"
    },
    {
        name:"Github",
        url: "#",
        cNameLi: "list-inline-item",
        cNameA: "logo-color",
        cNameI: "fab fa-github-square fa-lg fa-fw"
    }
]

// FootItem
const FootItem = {
    text: "CONTACTUS@SKYPLAN.COM",
    id: "contactus"
}

// Arreglo de subarreglos: HeaderItems, FootItem y LogoItems
const items = [HeaderItems, LogosItems, FootItem];

// Exportar items para ser utilizado en archivos externos
export default items;