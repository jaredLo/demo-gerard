import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDsP-g9qU2nPV4h5ab3YhAGfLCEQEdv65I">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
