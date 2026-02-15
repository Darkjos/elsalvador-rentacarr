import { SERVICES_DATA } from '../data/services';
import { useWhatsApp } from '../hooks/useWhatsApp';

const Services = () => {
    const { openWhatsApp } = useWhatsApp();

    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Nuestros Servicios
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Más que solo un auto, te ofrecemos una experiencia de viaje completa y sin preocupaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES_DATA.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-8">
                                    <div className="flex justify-center mb-6">
                                        <div className="p-3 bg-blue-50 rounded-full">
                                            <Icon className="h-12 w-12 text-blue-600" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-center">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-20 bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
                    <div className="px-6 py-12 md:p-16 text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            ¿Listo para tu viaje en El Salvador?
                        </h2>
                        <p className="mt-4 text-xl text-blue-100 mb-8">
                            Contáctanos hoy mismo y reserva el auto perfecto para tus necesidades.
                        </p>
                        <button
                            onClick={() => openWhatsApp('Hola, estoy interesado en sus servicios de renta de autos.')}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:text-lg transition-colors cursor-pointer"
                        >
                            Contactar por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

