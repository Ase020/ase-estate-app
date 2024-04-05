import { MapContainer, TileLayer } from "react-leaflet";

import "./map.scss";
import "leaflet/dist/leaflet.css";
import { Pin } from "..";

function Map({ properties }) {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((property) => (
        <Pin key={property.id} property={property} />
      ))}
    </MapContainer>
  );
}

export default Map;
