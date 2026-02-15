import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import FeaturedVehicleCard from './FeaturedVehicleCard';

const FeaturedVehiclesSection = ({ vehicles }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Vehículos Destacados</h2>
                <p className="mt-4 text-gray-600">Explora nuestra selección de autos más populares.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {vehicles.map((vehicle) => (
                    <FeaturedVehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>

            <div className="mt-10 text-center">
                <Link to="/vehiculos" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center gap-2">
                    Ver todo el catálogo <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
};

FeaturedVehiclesSection.propTypes = {
    vehicles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            // other props validation handled by FeaturedVehicleCard
        })
    ).isRequired,
};

export default FeaturedVehiclesSection;
