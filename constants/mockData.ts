export type Place = {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  lat: number;
  lng: number;
  imagen: any;
  icono?: any; 
  direccion: string;
  rating: number;
  opiniones: number;
  abierto: boolean;
  estado: string;
  tipos: string[];
};


export const places: Place[] = [
  {
    id: 'catedral',
    nombre: 'Catedral de Sevilla',
    categoria: 'monumentos',
    lat: 37.3861,
    lng: -5.9920,
    descripcion: 'Una de las catedrales góticas más grandes del mundo.',
    imagen: require('@/assets/images/catedral.jpg'),
    direccion: 'Av. de la Constitución, s/n, 41004 Sevilla',
    rating: 4.8,
    opiniones: 15893,
    abierto: true,
    estado: 'OPERATIONAL',
    tipos: ['church', 'place_of_worship', 'tourist_attraction'],
  },
  {
    id: 'alcazar',
    nombre: 'Real Alcázar de Sevilla',
    categoria: 'monumentos',
    lat: 37.3831,
    lng: -5.9903,
    descripcion: 'Palacio real con jardines y arquitectura mudéjar.',
    imagen: require('@/assets/images/alcazar.jpg'),
    direccion: 'Patio de Banderas, s/n, 41004 Sevilla',
    rating: 4.7,
    opiniones: 12450,
    abierto: true,
    estado: 'OPERATIONAL',
    tipos: ['museum', 'tourist_attraction', 'point_of_interest'],
  },
  {
    id: 'plaza-espana',
    nombre: 'Plaza de España',
    categoria: 'parques',
    lat: 37.3771,
    lng: -5.9869,
    descripcion: 'Plaza monumental con canales, azulejos y parques.',
    imagen: require('@/assets/images/plazaespana.jpg'),
    direccion: 'Av. Isabel la Católica, 41004 Sevilla',
    rating: 4.9,
    opiniones: 32000,
    abierto: true,
    estado: 'OPERATIONAL',
    tipos: ['park', 'tourist_attraction', 'point_of_interest'],
  },
  {
    id: 'museo-bellas-artes',
    nombre: 'Museo de Bellas Artes',
    categoria: 'museos',
    lat: 37.3935,
    lng: -5.9956,
    descripcion: 'Museo con pinturas del barroco sevillano.',
    imagen: require('@/assets/images/bellasartes.jpg'),
    direccion: 'Plaza del Museo, 9, 41001 Sevilla',
    rating: 4.6,
    opiniones: 8560,
    abierto: false,
    estado: 'OPERATIONAL',
    tipos: ['museum', 'art_gallery', 'point_of_interest'],
  },
  {
    id: 'metropol-parasol',
    nombre: 'Setas de Sevilla',
    categoria: 'monumentos',
    lat: 37.3937,
    lng: -5.9916,
    descripcion: 'Estructura moderna con mirador y mercado.',
    imagen: require('@/assets/images/setas.jpg'),
    direccion: 'Pl. de la Encarnación, s/n, 41003 Sevilla',
    rating: 4.4,
    opiniones: 21000,
    abierto: true,
    estado: 'OPERATIONAL',
    tipos: ['store', 'tourist_attraction', 'market', 'point_of_interest'],
  },
];

