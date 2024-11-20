"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308, 
};

export default function GoogleMaps() {
  return (
    <div className="container mx-auto py-5" id="map">
      <div className="flex gap-2 flex-col">
        <div className="flex flex-col gap-3 items-center my-6">
          <h4 className="text-brand2 font-medium text-2xl">Nos encontramos aqui:</h4>
          <p className="text-gray-800 font-light text-lg">Rua das Andorinhas, 112 - São Paulo/SP</p>
        </div>
        <div className="lg:mx-0 mx-2">
          <LoadScript googleMapsApiKey={process.env.GOOGLE_USER_KEY!}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} title="São Paulo, Brasil" />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
