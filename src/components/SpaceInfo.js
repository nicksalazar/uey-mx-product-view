import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = {
  width: "500px",
  height: "400px",
};

const SpaceInfo = ({ product }) => {
  const location = product.location ? JSON.parse(product.location) : null;

  if (!location || !location.latitude || !location.longitude) {
    return <p>Location not available</p>;
  }

  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={containerStyle}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} />
    </MapContainer>
  );
};

export default SpaceInfo;
