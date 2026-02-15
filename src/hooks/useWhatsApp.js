import { useCallback } from 'react';
import { COMPANY_INFO } from '../config/constants';

/**
 * Custom hook to generate WhatsApp links and handle clicks.
 * @returns {Object} - { getWhatsAppLink, openWhatsApp }
 */
export const useWhatsApp = () => {

    const getWhatsAppLink = useCallback((message = '') => {
        const text = encodeURIComponent(message);
        return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
    }, []);

    const openWhatsApp = useCallback((message = '') => {
        const url = getWhatsAppLink(message);
        window.open(url, '_blank', 'noopener,noreferrer');
    }, [getWhatsAppLink]);

    return { getWhatsAppLink, openWhatsApp };
};
