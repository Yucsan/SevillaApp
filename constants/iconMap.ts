const iconMap: Record<string, any> = {
  acuario: require('@/assets/icons/acuario.png'),
  alcazar: require('@/assets/icons/alcazar.png'),
  'art-gallery': require('@/assets/icons/art_galery.png'),
  ayuntamiento: require('@/assets/icons/ayuntamiento.png'),
  bus: require('@/assets/icons/bus.png'),
  cafe: require('@/assets/icons/cafe.png'),
  casino: require('@/assets/icons/casino.png'),
  catedral: require('@/assets/icons/catedral.png'),
  cine: require('@/assets/icons/cine.png'),
  custom: require('@/assets/icons/custom.png'),
  estadio: require('@/assets/icons/estadio.png'),
  giralda: require('@/assets/icons/giralda.png'),
  hotel: require('@/assets/icons/hotel.png'),
  jardines: require('@/assets/icons/jardines.png'),
  'museo-bellas-artes': require('@/assets/icons/museum.png'),
  'night-club': require('@/assets/icons/night_club.png'),
  'plaza-espana': require('@/assets/icons/plaza.png'),
  restaurant: require('@/assets/icons/restaurant.png'),
  selected: require('@/assets/icons/selected.png'),
  shopping: require('@/assets/icons/shopping.png'),
  tree: require('@/assets/icons/tree.png'),
  tren: require('@/assets/icons/tren.png'),
  'turist-attraction': require('@/assets/icons/turistatraction.png'),
};

// ✅ Función pública
export const getIconForPlace = (placeId: string) =>
  iconMap[placeId] || iconMap['custom'];
