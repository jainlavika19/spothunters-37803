import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import InfoWindowEx from './InfoWindowEx.js';
// import mapStyles from "./mapStyles.js";

const mapStyles = {
  width: "50%",
  height: "50%",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click.
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) => {
    console.log("props", props);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  bookparking = (props) => {
    console.log('bookparking clicked', props)
  }

  render() {
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
      <Map
        google={this.props.google}
        zoom={19}
        style={mapStyles}
        initialCenter={{ lat: 43.6561, lng: -79.3802 }}
        // initialCenter={{
        //   lat: -1.2884,
        //   lng: 36.8233,
        // }}
      >
        {parkData?.features?.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
            onClick={this.onMarkerClick}
            icon={{
              url: "https://img.icons8.com/color/48/000000/map-pin.png",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            name={park.properties.NAME}
          />
        ))}
        {this.state.selectedPlace && (
          <InfoWindowEx
            className="infowindow"
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div
              className="selectedinfowindow"
              style={{ height: "auto", width: "300px" }}
            >
              <h2>I am Selected</h2>
              <h2>{this.state.selectedPlace.NAME}</h2>
              <p>{this.state.selectedPlace.DESCRIPTIO}</p>
              <button
                type="button"
                onClick={this.bookparking.bind(this, this.state.selectedPlace)}
              >
                Show details
              </button>
            </div>
          </InfoWindowEx>
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAzo9Xzk5QwuAixqF8Kxdxp1zgMfL2DtKA",
})(MapContainer);
