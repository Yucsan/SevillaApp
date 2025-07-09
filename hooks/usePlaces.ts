import { places } from '@/constants/mockData';

export function usePlaces() {
  // Simulamos llamada al backend
  const getAll = () => {
    return places;
  };

  const getByCategory = (category: string) => {
    return places.filter((p) => p.categoria === category);
  };

  const getById = (id: string) => {
    return places.find((p) => p.id === id);
  };

  return { getAll, getByCategory, getById };
}
