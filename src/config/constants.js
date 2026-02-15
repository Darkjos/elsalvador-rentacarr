export const COMPANY_INFO = {
    name: "El Salvador Rent a Car",
    phone: "+503 6891 4606",
    email: "carpio.1999.m@gmail.com",
    address: "San Luis Talpa, La Paz, El Salvador",
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "50368914606"
};

export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/share/18HbLSzVVB/",
    instagram: "https://www.instagram.com/josuealexxcarpio?igsh=czM5cjB4ODhqZ3Nv"
};

export const NAV_LINKS = [
    { path: "/", label: "Inicio" },
    { path: "/vehiculos", label: "Vehículos" },
    { path: "/servicios", label: "Servicios" },
    { path: "/contacto", label: "Contacto" }
];
