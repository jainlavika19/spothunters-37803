import React, { Component, useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export const Parkingmap = (props) => {
  const [selectedPark, setSelectedPark] = useState(null);
  // const history = useHistory();

  const bookparking = (selpark) => {
    console.log("selpark", selpark);
    // props?.history?.push("/Contact");
  };

  const parkData = {
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: { name: "Event Data: EDM Night Toronto" },
    },
    features: [
      {
        type: "Feature",
        properties: {
          PARK_ID: 960,
          FACILITYID: 28014,
          NAME: "Stage and Backstage Area",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO: "This area is only for Staff and Artists",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.38011, 43.656148],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1219,
          FACILITYID: 28001,
          NAME: "Entry 1 (General Admission)",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO:
            "Entry for General admission tickets only. All access to Staff and Vendors",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.380633, 43.655857],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1157,
          FACILITYID: 28002,
          NAME: "Entry 2 (VVIP and VIP tickets)",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO:
            "Entry for VVIP/VIP tickets only. All access to Staff and Artists",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.380301, 43.655807],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 9,
          FACILITYID: 28006,
          NAME: "General Admission(GA) Area",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO:
            "Only for General admission (GA). Full access to Staff and Vendors",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.380496, 43.655925],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1160,
          FACILITYID: 28007,
          NAME: "VVIP/ VIP Area",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO:
            "Only for VIP and VVIP guests. Full access to Staff and Artists.",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.380292, 43.65603],
        },
      },
      {
        type: "Feature",
        properties: {
          PARK_ID: 1693,
          FACILITYID: 28016,
          NAME: "Bar Area",
          DATE: "27th January 2020",
          LOCATION: "Yonge-Dundas Square Toronto",
          HOURS: "6PM-10PM",
          ACCESS_TYPES: "STAFF and ARTISTS ONLY",
          ZONE_TYPE: "IN",
          ENTRACE_CONNCTED: true,
          NEAREST_ENTRANCE: "1",
          BAR: true,
          FOOD: true,
          LANES: 10,
          DESCRIPTIO:
            "Alcoholic beverages served to only 19+ after looking at a photo ID.",
        },
        geometry: {
          type: "Point",
          coordinates: [-79.380423, 43.656132],
        },
      },
    ],
  };
  return (
    <>
      <Map
        google={props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
          lat: -32.2884,
          lng: 16.8233,
        }}
      >
      <>
        {parkData?.features?.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
            onClick={() => {
              setSelectedPark(park);
            }}
            icon={{
              url: "https://img.icons8.com/color/48/000000/map-pin.png",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        ))}

        {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: selectedPark.geometry.coordinates[1],
              lng: selectedPark.geometry.coordinates[0],
            }}
          >
            <div>
              <h2>I am Selected</h2>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
              <button onClick={() => bookparking(selectedPark)}>
                Book Now
              </button>
            </div>
          </InfoWindow>
        )}
      </>
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAzo9Xzk5QwuAixqF8Kxdxp1zgMfL2DtKA",
})(Parkingmap);
