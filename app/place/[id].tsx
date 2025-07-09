import { useLocalSearchParams } from 'expo-router';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams();

  const openInMaps = () => {
    const lat = 37.3886;
    const lng = -5.9823;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del lugar: {id}</Text>
      <Text>Descripción, fotos, etc.</Text>

      <Pressable style={styles.button} onPress={openInMaps}>
        <Text style={styles.buttonText}>🧭 Navegar con Google Maps</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  button: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
