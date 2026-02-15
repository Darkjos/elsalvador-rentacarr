import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative bg-slate-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                {/* Placeholder for background image */}
                <div className="w-full h-full bg-gradient-to-r from-blue-900 to-slate-900"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    Descubre El Salvador <br />
                    <span className="text-blue-500">A tu propio ritmo</span>
                </h1>
                <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Renta de vehículos confiables, modernos y económicos. La mejor experiencia para tu viaje comienza aquí.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/vehiculos" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all">
                        Ver Vehículos
                    </Link>
                    <Link to="/contacto" className="inline-flex items-center justify-center px-8 py-3 border border-gray-500 text-base font-medium rounded-lg text-gray-200 hover:bg-gray-800 md:text-lg transition-all">
                        Contáctanos
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
