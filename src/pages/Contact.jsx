import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { COMPANY_INFO } from '../config/constants';
import { useWhatsApp } from '../hooks/useWhatsApp';

const Contact = () => {
    const { openWhatsApp } = useWhatsApp();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const text = `Hola, mi nombre es ${formData.name}. Mensaje: ${formData.message}`;
        openWhatsApp(text);
    };

    const handleEmail = (e) => {
        e.preventDefault();
        const subject = `Consulta de ${formData.name} - ${COMPANY_INFO.name}`;
        const body = `Nombre: ${formData.name}%0D%0ACorreo: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Contáctanos</h1>
                    <p className="mt-4 text-xl text-gray-500">Estamos aquí para ayudarte en tu próximo viaje.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Phone className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Teléfono / WhatsApp</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.phone}</p>
                                    <p className="text-sm text-gray-500">Atención 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Mail className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Correo Electrónico</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                                    <p className="text-gray-600 mt-1">{COMPANY_INFO.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15525.021008670498!2d-89.0963889!3d13.4736111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63566113824f8b%3A0x6e768e7343468598!2sSan%20Luis%20Talpa%2C%20La%20Paz!5e0!3m2!1ses!2ssv!4v1709849200000!5m2!1ses!2ssv"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="¿En qué podemos ayudarte?"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                                >
                                    WhatsApp
                                    <Send className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={handleEmail}
                                    className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
                                >
                                    Correo
                                    <Mail className="h-4 w-4" />
                                </button>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                * Al hacer clic, se abrirá la aplicación correspondiente con tu mensaje.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

