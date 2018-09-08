import React from 'react'
import { compose, withProps } from 'recompose'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_TOKEN}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{height: '100%'}}/>,
    containerElement: <div style={{height: '100vh'}}/>,
    mapElement: <div style={{height: '100%'}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{lat: -34.397, lng: 150.644}}
    >
      {props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
    </GoogleMap>
  </div>
)

export default MyMapComponent