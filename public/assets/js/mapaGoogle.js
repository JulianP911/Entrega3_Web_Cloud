/* eslint-disable no-undef */

// Funcion para insertar el mapa de google maps
// eslint-disable-next-line no-unused-vars
function initMap() {
  const map = new google.maps.Map(document.getElementById("mapGoogle"), {
    center: { lat: 4.60971, lng: -74.08175 },
    zoom: 8,
  });
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
  });
  
  drawingManager.setMap(map);
  
  google.maps.event.addListener(drawingManager, "polylinecomplete", function(line) {
    let polylineG = [];
    let coord = line.getPath().getArray().toString();
    let coordA = coord.split(",");
    let coordenadas = [];
    coordA.forEach(element => {
      let elemento = String(element);
      elemento = elemento.replace("(","");
      elemento = elemento.replace(")","");
      coordenadas.push(elemento);
    });
    let i = 0;
    let j = 0;
    let coorde = {};
    coordenadas.forEach(elementoC => {
      coorde["posicion"] = j;
      if(i === 0)
      {
        coorde["latitud"] = elementoC;
        i+=1;
      } else if (i === 1) {
        coorde["longitud"] = elementoC;
        polylineG.push(coorde);
        coorde = {};
        i = 0;
        j += 1;
      }
    });
    download(polylineG);
  });
};

// Funcion para descargar las coordenadas del mapa
function download (coordenas) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(coordenas));
  let dlAnchorElem = document.getElementById("descarga");
  dlAnchorElem.addEventListener("click", function () {
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "Ruta.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
};