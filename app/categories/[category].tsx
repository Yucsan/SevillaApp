import type { Place } from '@/constants/mockData'; // Asegúrate de importar el tipo
import { places } from '@/constants/mockData'; // o donde tengas ese array
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const navigation = useNavigation();

  // ✅ Cambiar el título del header dinámicamente
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Volver a categorías", // ← aquí cambias el título del botón atrás
    });
  }, [navigation]);

  const lugaresFiltrados = places.filter(
    (place) => place.categoria === category
  );

  // ✅ Función para abrir alerta y Google Maps
  const mostrarAlertaLugar = (lugar: Place) => {
    Alert.alert(
      lugar.nombre,
      lugar.descripcion,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Ir con Google Maps',
          onPress: () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${lugar.lat},${lugar.lng}`;
            Linking.openURL(url);
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lugares de{" "}
        <Text style={styles.categoryName}>
          {String(category).charAt(0).toUpperCase() + String(category).slice(1)}
        </Text>
      </Text>

      <FlatList
        data={lugaresFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <Pressable onPress={() => mostrarAlertaLugar(item)}>
            <View style={styles.card}>
              <Image source={item.imagen} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text>{item.descripcion}</Text>
              </View>
            </View>
          </Pressable>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  name: { fontWeight: 'bold', fontSize: 16 },

  categoryName: {
  color: '#c42e2e', // o el color que prefieras
},
});
