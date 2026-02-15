import { Car, Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SOCIAL_LINKS, NAV_LINKS } from '../config/constants';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Car className="h-8 w-8 text-blue-500" />
                            <span className="font-bold text-xl">{COMPANY_INFO.name}</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Tu mejor opción para recorrer El Salvador con comodidad y seguridad. Vehículos modernos y precios competitivos.
                        </p>
                        <div className="flex space-x-4">
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-gray-400">
                            {NAV_LINKS.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="hover:text-blue-500 transition-colors">{link.label}</Link>
                                </li>
                            ))}
                            <li><Link to="/vehiculos" className="hover:text-blue-500 transition-colors">Catálogo de Vehículos</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>{COMPANY_INFO.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>{COMPANY_INFO.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Working Hours */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Horarios</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex justify-between items-center">
                                <span>Lunes - Domingo:</span>
                                <span className="font-bold text-green-400">24 Horas / 7 Días</span>
                            </li>
                            <li className="text-sm text-gray-500 mt-2">
                                * Atención y entregas previa reserva
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

