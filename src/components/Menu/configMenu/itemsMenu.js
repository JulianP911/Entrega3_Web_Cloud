// Importar las imagenes correspondientes de las cards
import CardDrones from "./../../../assets/img/CardDrone2.jpeg";
import CardRutas from "./../../../assets/img/CardRuta2.png";
import CardLibreria from "./../../../assets/img/CardLibrary.jpeg";

// ItemsMenu: Drones, rutas y librerias
const itemsMenu = [
    {
        titleCard: "Drones",
        itemOne: "Buscar tus drones registrados\n con sus especificaciones.",
        itemTwo: "Podras añadir nuevos drones.",
        itemThree: "Eliminar un drone registrado.",
        bottonCard: "Ver mis drones", 
        url: "/drones",
        srcImg: CardDrones,
        altImg: "Card Drones"

    },
    {
        titleCard: "Rutas",
        itemOne: "Buscar tus rutas registradas con sus especificaciones.",
        itemTwo: "Podras añadir nuevas rutas.",
        itemThree: "Eliminar una ruta registrada.",
        bottonCard: "Ver mis rutas", 
        url: "/rutas",
        srcImg: CardRutas,
        altImg: "Card Rutas"
    },
    {
        titleCard: "Librerias",
        itemOne: "Explorar las librerias de rutas privadas y públicas.",
        itemTwo: "Encuentrar las rutas populares.",
        itemThree: "Valorar las rutas nuevas.",
        bottonCard: "Ver librerias", 
        url: "/libreriaRutas",
        srcImg: CardLibreria,
        altImg: "Card Rutas"
    }
]

// Exportar items para ser utilizado en archivos externos
export default itemsMenu;