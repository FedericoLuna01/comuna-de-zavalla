import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'

const Map = () => {
  return (
    <MapContainer center={[-33.021178, -60.881400]} zoom={13}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '.7rem'
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-33.021178, -60.881400]} icon={new Icon({ iconUrl : '/icons/map-marker-4.svg', iconSize: [50, 70], iconAnchor: [23, 60] })}>
      </Marker>
    </MapContainer>
  );
}

export default Map;