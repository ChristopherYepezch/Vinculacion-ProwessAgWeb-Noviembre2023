import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIcon from "../imagenes/marcador.png";

const customMarkerIcon = new L.Icon({
  iconUrl: customIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = () => {
  const [clickedLocation, setClickedLocation] = useState(null);

  return (
    <div>
      <MapContainer
        center={[-1.8312, -78.1834]}
        zoom={6}
        style={{ width: "100%", height: "400px", zIndex: 1 }}
        maxBounds={[
          // Coordenadas del límite suroeste de Ecuador
          [-5, -92],
          // Coordenadas del límite noreste de Ecuador
          [2, -75],
        ]}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setClickedLocation={setClickedLocation} />
        {clickedLocation && (
          <Marker position={clickedLocation} icon={customMarkerIcon}>
            <Popup>
              Latitud: {clickedLocation.lat.toFixed(4)}, Longitud:{" "}
              {clickedLocation.lng.toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

const LocationMarker = ({ setClickedLocation }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      // Verificar si la ubicación está dentro de los límites de Ecuador
      if (lat >= -5 && lat <= 2 && lng >= -92 && lng <= -75) {
        setClickedLocation(e.latlng);
      } else {
        alert("Selecciona una ubicación dentro de Ecuador.");
      }
    },
  });
  return null;
};

export default Map;