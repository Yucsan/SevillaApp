import type { Place } from '@/constants/mockData'; // Asegúrate de importar el tipo
import { places } from '@/constants/mockData'; // o donde tengas ese array

import { useState } from 'react';
import { Button, Dialog, Text as PaperText, Portal } from 'react-native-paper';

import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import {
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();
  const navigation = useNavigation();

// 🟡 Estado para el Dialog de Paper
  const [visible, setVisible] = useState(false);
  const [lugarSeleccionado, setLugarSeleccionado] = useState<Place | null>(null);

  const mostrarDialogo = (lugar: Place) => {
    setLugarSeleccionado(lugar);
    setVisible(true);
  };

  const cerrarDialogo = () => {
    setVisible(false);
  };

  const abrirEnGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    Linking.openURL(url);
  };

  // ✅ Cambiar el título del header dinámicamente
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Volver a categorías", // ← aquí cambias el título del botón atrás
    });
  }, [navigation]);

  const lugaresFiltrados = places.filter(
    (place) => place.categoria === category
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lugares de{' '}
        <Text style={styles.categoryName}>
          {String(category).charAt(0).toUpperCase() + String(category).slice(1)}
        </Text>
      </Text>

      <FlatList
        data={lugaresFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => mostrarDialogo(item)}>
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

      {/* ✅ Diálogo de Paper */}
<Portal>
  <Dialog visible={visible} onDismiss={cerrarDialogo}>
    <Dialog.Title>{lugarSeleccionado?.nombre}</Dialog.Title>

    <Dialog.Content>

   {lugarSeleccionado?.imagen && (
    <>
      <View style={dialogStyles.imageWrapper}>
        <Image
          source={lugarSeleccionado?.imagen}
          style={dialogStyles.image}
          resizeMode="cover"
        />
      </View>

      <PaperText>{lugarSeleccionado?.descripcion}</PaperText>

      {lugarSeleccionado && (
        <>
          {[
            { icon: '📍', label: 'Dirección', value: lugarSeleccionado.direccion },
            { icon: '⭐', label: 'Rating', value: lugarSeleccionado.rating },
            { icon: '🗣', label: 'Opiniones', value: lugarSeleccionado.opiniones },
            { icon: '⏰', label: 'Abierto ahora', value: lugarSeleccionado.abierto ? 'Sí' : 'No' },
            { icon: '📌', label: 'Estado', value: lugarSeleccionado.estado },
            { icon: '🏷️', label: 'Tipos', value: lugarSeleccionado.tipos.join(', ') },
          ].map((item) => (
            <PaperText key={item.label} style={dialogStyles.infoLine}>
              {item.icon} {item.label}: {item.value}
            </PaperText>
          ))}
        </>
      )}
    </>
   )}

    </Dialog.Content>
    <Dialog.Actions>
      <Button onPress={cerrarDialogo}>Cerrar</Button>
      <Button
        icon="navigation"
        onPress={() => {
          if (lugarSeleccionado) {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${lugarSeleccionado.lat},${lugarSeleccionado.lng}`;
            Linking.openURL(url);
          }
        }}
      >
        Ir con Google Maps
      </Button>
    </Dialog.Actions>
  </Dialog>
</Portal>

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

const dialogStyles = StyleSheet.create({
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: '98%',
    height: 180,
    marginBottom: 12,
  },
  infoLine: {
    marginBottom: 6,
  },
});
