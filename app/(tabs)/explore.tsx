import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

const categorias = [
  { nombre: 'monumentos', emoji: '🕌' },
  { nombre: 'museos', emoji: '🖼️' },
  { nombre: 'parques', emoji: '🌳' },
  { nombre: 'gastronomia', emoji: '🍽️' }, // OJO: sin acento en ruta
] as const;


export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Explorar por categoría</Text>

      {categorias.map((cat) => (
        <Pressable
          key={cat.nombre}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/categories/[category]",
              params: { category: cat.nombre },
            })
          }
        >
          <Text style={styles.buttonText}>
            {cat.emoji}{" "}
            {cat.nombre.charAt(0).toUpperCase() + cat.nombre.slice(1)}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#EEE',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});
