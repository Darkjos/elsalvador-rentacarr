import PropTypes from 'prop-types';

const FeaturesSection = ({ features }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
                <p className="mt-4 text-gray-600">Nos esforzamos por brindar el mejor servicio del país.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                            <div className="flex justify-center mb-4">
                                <Icon className="h-10 w-10 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

FeaturesSection.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FeaturesSection;
