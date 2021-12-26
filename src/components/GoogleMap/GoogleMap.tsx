import React from 'react';
import {GoogleApiWrapper, Map, IMapProps} from 'google-maps-react';

export const GoogleMap = (props: IMapProps) => (
  <Map 
    google={props.google}
    
    center={{lat: 58.0064704, lng: 56.188709}}
  />
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjqhILQTjvCtgkT38CZnx1AsfFG2tim8Y'
})(GoogleMap)