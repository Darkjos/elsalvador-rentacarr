import React from 'react';
import PropTypes from 'prop-types';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const FeaturedVehicleCard = React.memo(({ vehicle }) => {
    const { openWhatsApp } = useWhatsApp();

    const handleReserve = () => {
        const message = `Hola, vi su página web y estoy interesado en el ${vehicle.name} (${vehicle.type}) por $${vehicle.price}/día. ¿Tienen disponibilidad?`;
        openWhatsApp(message);
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                    <span className="text-white font-semibold">{vehicle.type}</span>
                </div>
            </div>
            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                    <span className="text-blue-600 font-bold">${vehicle.price}/día</span>
                </div>
                <button
                    onClick={handleReserve}
                    className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                    aria-label={`Reservar ${vehicle.name} vía WhatsApp`}
                >
                    Reservar
                </button>
            </div>
        </div>
    );
});

FeaturedVehicleCard.displayName = 'FeaturedVehicleCard';

FeaturedVehicleCard.propTypes = {
    vehicle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default FeaturedVehicleCard;

