import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
            <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold rotate-12 absolute shadow-lg">
                Página No Encontrada
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                ¡Ups! Parece que te has perdido.
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8 text-lg">
                La página que estás buscando no existe o ha sido movida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                    <Home className="h-5 w-5 mr-2" />
                    Volver al Inicio
                </Link>
                <Link
                    to="/vehiculos"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                    <Search className="h-5 w-5 mr-2" />
                    Ver Vehículos
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
