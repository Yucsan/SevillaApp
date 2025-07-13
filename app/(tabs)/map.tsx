import { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

import { getIconForPlace } from '@/constants/iconMap';
import { places } from '@/constants/mockData';

export default function MapScreen() {
  // Limites geográficos de Sevilla
  const SEVILLA_BOUNDS = {
    north: 37.4500,  // latitud máxima
    south: 37.3500,  // latitud mínima
    east: -5.9200,   // longitud máxima
    west: -6.0500,   // longitud mínima
  };

  const mapRef = useRef<MapView | null>(null);

  const isInsideSevilla = (region: Region) => {
    return (
      region.latitude >= SEVILLA_BOUNDS.south &&
      region.latitude <= SEVILLA_BOUNDS.north &&
      region.longitude >= SEVILLA_BOUNDS.west &&
      region.longitude <= SEVILLA_BOUNDS.east
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 37.3886,
          longitude: -5.9823,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onRegionChangeComplete={(region) => {
          if (!isInsideSevilla(region)) {
            mapRef.current?.animateToRegion({
              latitude: 37.3886,
              longitude: -5.9823,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }, 500);
          }
        }}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.lat, longitude: place.lng }}
            title={place.nombre}
            description={place.descripcion}
            image={getIconForPlace(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
