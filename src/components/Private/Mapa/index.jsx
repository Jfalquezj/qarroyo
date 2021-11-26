import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import marker from "./marcador2.png";
import { Icon } from "leaflet";
import { useState, useEffect } from "react";

export default function Mapa() {
  const [markers, setMarkers] = useState([]);
  const position = [10.96854, -74.78132];
  const [markposition, setMarkposition] = useState(null);
  const markersarr = [];
  const myIcon = new Icon({
    iconUrl: marker,
    iconSize: [32, 32],
  });

  //    useEffect(() => {
  //     // async function getAllMarkers(){
  //     //     await fetch('https://tic2021.herokuapp.com/api/v1/reporte/')
  //     //     .then(response => response.json())
  //     //     .then(data => {

  //     //       for(i=0;i<data.reporte.length;i++) {
  //     //         var newMarker = new L.marker([data.reporte[i].latitud,data.reporte[i].longitud]).addTo(map);
  //     //         map.addLayer(newMarker)
  //     //         newMarker.bindPopup(`Nivel: Arroyo ${data.reporte[i].nivelArroyo},  Trafico: ${data.reporte[i].nivelTrafico} , Descripcion: ${data.reporte[i].descripcion}`);
  //     //       }
  //     //     });
  //     //   }
  //     //   getAllMarkers()
  // }, [])

  useEffect(() => {
    async function getAllMarkers() {
      await fetch("https://qarroyo.herokuapp.com/api/v1/reporte/")
        .then((response) => response.json())
        .then((data) => {
          const elems = data.reporte.map((data, index) => {
            const pos = [data.latitud, data.longitud];
            return (
              <Marker position={pos} icon={myIcon} key={index}>
                <Popup>
                  Nivel: Arroyo {data.nivelArroyo}, Trafico: {data.nivelTrafico}{" "}
                  , Descripcion: {data.descripcion}
                </Popup>
              </Marker>
            );
          });

          setMarkers(elems);
        });
    }
    getAllMarkers();
  }, []);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setMarkposition(e.latlng);
      },
    });

    return markposition === null ? null : (
      <Marker position={markposition} icon={myIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  //   function addMarker(e){
  //     console.log("e.latlng",e.latlng)
  //     var newMarker = new L.marker(e.latlng).addTo(map);
  //     map.addLayer(newMarker)
  //     markers.push(newMarker)
  //     newMarker.bindPopup("Arroyo Alto");
  //   }

  function deleteMarkers(e) {
    console.log("proximo");
  }

  async function sendReport() {
    const nivelArroyo = document.getElementById("nivelArroyo").value;
    const nivelBasura = document.getElementById("nivelBasura").value;
    const nivelTrafico = document.getElementById("nivelTrafico").value;
    const descripcion = document.getElementById("descripcion").value;
    if (markposition != null) {
      const { lat, lng } = markposition;
      await fetch("https://qarroyo.herokuapp.com/api/v1/reporte/create", {
        method: "POST",
        body: JSON.stringify({
          nivelArroyo,
          nivelBasura,
          nivelTrafico,
          longitud: lng,
          latitud: lat,
          descripcion,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setMarkers(
           [ ...markers,
            <Marker position={markposition} icon={myIcon}>
              <Popup>
                Nivel: Arroyo {nivelArroyo}, Trafico: {nivelTrafico} ,
                Descripcion: {descripcion}
              </Popup>
            </Marker>]
          );
          console.log(json);
          alert("Reporte enviado, muchas gracias");
        })
        .catch((error) => {
            
          alert("Un error con el servidor ha ocurrido");
        });
    } else {
      alert("Seleccione el arroyo en el mapa");
    }
  }

  //   map.on('click', addMarker);

  return (
    <div>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "100wh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=f3ePDK7mOfdrsKDU0ZgW"
        />
        {markers}
        <LocationMarker />
      </MapContainer>
      <div className="form-group">
        <label> Nivel arroyo (Estimado)</label>
        <br />
        <select id="nivelArroyo" className="form-select">
          <option value="bajo" defaultValue>
            Bajo
          </option>
          <option value="medio">Medio</option>
          <option value="alto">Alto</option>
        </select>
        <br />

        <label> ¿Contiene basura u otro elementos?</label>
        <br />
        <select id="nivelBasura" className="form-select">
          <option value="no" defaultValue>
            {" "}
            No
          </option>
          <option value="si">Si</option>
        </select>
        <br />

        <label> ¿Nivel de trafico?</label>
        <br />
        <select id="nivelTrafico" className="form-select">
          <option value="bajo" defaultValue>
            {" "}
            Bajo (1 carros inmovilizados){" "}
          </option>
          <option value="medio">Medio (3 carros inmovilizados)</option>
          <option value="alto">Alto (6 carros inmovilizados)</option>
        </select>
        <br />

        <label>Descripción del arroyo</label>
        <textarea id="descripcion" className="form-control" rows="3"></textarea>
        <br />

        <button onClick={sendReport} type="submit" className="btn btn-primary">
          Generar Reporte
        </button>
        <br />
        <br />

        <button onClick={deleteMarkers} className="btn btn-warning">
          Borrar puntos seleccionados
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}
