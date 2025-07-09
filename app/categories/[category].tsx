import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function CategoryScreen() {
  const { category } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoría: {category}</Text>
      <Text>Aquí se mostrarán los lugares filtrados por categoría.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
