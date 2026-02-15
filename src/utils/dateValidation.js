/**
 * Validates the start and end dates/times for a booking.
 * @param {string} startDate - The start date string (YYYY-MM-DD).
 * @param {string} startTime - The start time string (HH:MM).
 * @param {string} endDate - The end date string (YYYY-MM-DD).
 * @param {string} endTime - The end time string (HH:MM).
 * @returns {{ isValid: boolean, error: string | null }} - Result object.
 */
export const validateBookingDates = (startDate, startTime, endDate, endTime) => {
    if (!startDate || !endDate) {
        return { isValid: false, error: 'Por favor selecciona ambas fechas.' };
    }

    // Initialize dates with times
    const start = new Date(`${startDate}T${startTime || '00:00'}`);
    const end = new Date(`${endDate}T${endTime || '00:00'}`);
    const now = new Date();

    // Check validity
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return { isValid: false, error: 'Fechas u horas inválidas.' };
    }

    // Validation: Start time must be in the future (with a small buffer, e.g., 5 mins, or strict 'now')
    // We allow a 5 minute grace period for "now" to account for slow user interaction
    if (start < new Date(now.getTime() - 5 * 60000)) {
        return { isValid: false, error: 'La fecha y hora de inicio no pueden ser en el pasado.' };
    }

    // Validation: End time must be after start time
    // Let's enforce a minimum rental duration, say 1 hour? Or just > start.
    // "mismo dia" implies end >= start.
    if (end <= start) {
        return { isValid: false, error: 'La fecha de fin debe ser posterior a la de inicio.' };
    }

    return { isValid: true, error: null };
};
