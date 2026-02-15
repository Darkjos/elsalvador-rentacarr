import { vehicles } from '../data/vehicles';
import { useSearchParams } from 'react-router-dom';
import { useWhatsApp } from '../hooks/useWhatsApp';

const Vehicles = () => {
    const [searchParams] = useSearchParams();
    const startDate = searchParams.get('start');
    const endDate = searchParams.get('end');
    const { openWhatsApp } = useWhatsApp();

    const handleReserve = (vehicle) => {
        let message = `Hola, estoy interesado en rentar el vehículo: ${vehicle.name} (${vehicle.type})`;

        if (startDate && endDate) {
            message += ` del ${startDate} al ${endDate}`;

            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 0) {
                message += ` (${diffDays} días)`;
                message += `. Precio estimado: $${vehicle.price * diffDays}`;
            }
        } else {
            message += ` por $${vehicle.price}/día`;
        }

        message += `. ¿Me podrían dar más información?`;

        openWhatsApp(message);
    };

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Nuestra Flota
                    </h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Encuentra el vehículo perfecto para tu aventura.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                    ${vehicle.price}/día
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                                        <p className="text-sm text-gray-500 uppercase tracking-wide">{vehicle.type}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {vehicle.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {vehicle.features.slice(0, 4).map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleReserve(vehicle)}
                                        className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
                                    >
                                        Reservar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vehicles;

