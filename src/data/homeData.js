import { Car, CheckCircle, ArrowRight } from 'lucide-react';
import { vehicles } from './vehicles';

// Filter or select specific vehicles for the home page
export const FEATURED_VEHICLES = vehicles.slice(0, 3).map(v => ({
    id: v.id,
    name: v.name,
    price: v.price,
    image: v.image,
    type: v.type
}));


export const FEATURES = [
    {
        id: 'feature-1',
        icon: Car,
        title: "Flota Moderna",
        desc: "Vehículos nuevos y revisados constantemente para tu seguridad."
    },
    {
        id: 'feature-2',
        icon: CheckCircle,
        title: "Sin Costos Ocultos",
        desc: "Precios transparentes desde el inicio. Lo que ves es lo que pagas."
    },
    {
        id: 'feature-3',
        icon: ArrowRight,
        title: "Reserva Fácil",
        desc: "Proceso de reserva simplificado online o por teléfono."
    }
];
