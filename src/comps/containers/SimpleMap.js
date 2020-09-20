import React from "react";
import {
  GoogleMap,
  LoadScript
} from "@react-google-maps/api";

const containerStyle = {
  marginTop: " 5%",
  marginLeft: "51.5%",
  height: "60vh",
  width: "35vw",
};

const center = {
  lat: 3.079881,
  lng: 101.670285,
};

function SimpleMap() {
  return ( <
    LoadScript googleMapsApiKey = "API_KEY_HERE" >
    <
    GoogleMap mapContainerStyle = {
      containerStyle
    }
    center = {
      center
    }
    zoom = {
      18
    } >
    <
    /GoogleMap> < /
    LoadScript >
  );
}

export default React.memo(SimpleMap);