import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { validateBookingDates } from '../../utils/dateValidation';

const QuickSearchSection = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('09:00');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('09:00');
    const [error, setError] = useState('');

    const validationResult = useMemo(() => {
        if (!startDate && !endDate) return { isValid: false, error: null };
        return validateBookingDates(startDate, startTime, endDate, endTime);
    }, [startDate, startTime, endDate, endTime]);

    const handleSearch = useCallback(() => {
        const { isValid, error: validationError } = validateBookingDates(startDate, startTime, endDate, endTime);

        if (!isValid) {
            setError(validationError);
            return;
        }

        setError('');
        const params = new URLSearchParams();
        if (startDate) params.append('start', startDate);
        if (startTime) params.append('startTime', startTime);
        if (endDate) params.append('end', endDate);
        if (endTime) params.append('endTime', endTime);

        navigate(`/vehiculos?${params.toString()}`);
    }, [startDate, startTime, endDate, endTime, navigate]);

    // Validation for disabling button: strictly check validity if dates are selected
    const isButtonDisabled = !startDate || !endDate || (!validationResult.isValid && validationResult.error !== null);

    // Get today's date for min attribute
    const todayStr = new Date().toISOString().split('T')[0];

    return (
        <section className="-mt-24 relative z-20 max-w-6xl mx-auto px-4 w-full">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">

                    {/* Location */}
                    <div className="space-y-2 lg:col-span-1">
                        <label htmlFor="location" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-blue-500" /> Recogida
                        </label>
                        <select
                            id="location"
                            className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option>Aeropuerto (AIES)</option>
                        </select>
                    </div>

                    {/* Start Date & Time */}
                    <div className="space-y-2 lg:col-span-2">
                        <label htmlFor="startDate" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-500" /> Fecha y Hora Inicio
                        </label>
                        <div className="flex gap-2">
                            <input
                                id="startDate"
                                type="date"
                                min={todayStr}
                                className={`w-full p-2.5 bg-gray-50 border rounded-lg focus:ring-2 outline-none ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'}`}
                                value={startDate}
                                onChange={(e) => {
                                    setStartDate(e.target.value);
                                    setError('');
                                }}
                            />
                            <input
                                id="startTime"
                                type="time"
                                className="w-32 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                aria-label="Hora de inicio"
                            />
                        </div>
                    </div>

                    {/* End Date & Time */}
                    <div className="space-y-2 lg:col-span-2">
                        <label htmlFor="endDate" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-500" /> Fecha y Hora Fin
                        </label>
                        <div className="flex gap-2">
                            <input
                                id="endDate"
                                type="date"
                                min={startDate || todayStr}
                                className={`w-full p-2.5 bg-gray-50 border rounded-lg focus:ring-2 outline-none ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-blue-500'}`}
                                value={endDate}
                                onChange={(e) => {
                                    setEndDate(e.target.value);
                                    setError('');
                                }}
                            />
                            <input
                                id="endTime"
                                type="time"
                                className="w-32 p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                aria-label="Hora de fin"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 relative">
                    <button
                        onClick={handleSearch}
                        disabled={isButtonDisabled}
                        className={`w-full font-medium p-3 rounded-lg transition-colors text-center block border-none ${isButtonDisabled ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'}`}
                        aria-label="Buscar vehículos disponibles"
                    >
                        Ver disponibilidad y precios
                    </button>
                    {error && (
                        <div className="absolute top-full left-0 mt-2 w-full text-center">
                            <span className="inline-block px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-full shadow-sm">
                                {error}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QuickSearchSection;
