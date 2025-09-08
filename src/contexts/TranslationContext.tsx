import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.studioStation.title': 'StudioStation Photo Booth',
    'hero.studioStation.subtitle': 'Our flagship service',
    'hero.studioStation.price': 'From $498',
    'hero.studioStation.duration': '2-5 hours',
    'hero.studioStation.description': 'Professional DSLR camera with glamorous sequin backdrops, goofy props, QR code sharing and unlimited custom prints',
    'hero.studioStation.cta': 'Book StudioStation',
    'hero.professional.title': 'Professional Photo Booth Services',
    'hero.professional.subtitle': 'Award-winning experiences in the DMV area',
    'hero.professional.cta': 'Book Your Event',
    'hero.wedding.title': 'Wedding Packages',
    'hero.wedding.subtitle': 'Make your special day unforgettable',
    'hero.wedding.price': 'From $998',
    'hero.wedding.duration': '4-6 hours',
    'hero.wedding.description': 'Custom wedding backdrops with guest book integration and same-day photo delivery',
    'hero.wedding.cta': 'Book Wedding Package',
    'hero.corporate.title': 'Corporate Events',
    'hero.corporate.subtitle': 'Professional fun for business',
    'hero.corporate.price': 'From $750',
    'hero.corporate.duration': '3-8 hours',
    'hero.corporate.description': 'Branded backdrops with social media integration for corporate events and team building',
    'hero.corporate.cta': 'Book Corporate Event',
    'hero.viewWork': 'View Our Work',
    'hero.duration': 'Duration',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional photo booth experiences tailored to your event',
    'services.studioStation.title': 'StudioStation Photo Booth',
    'services.studioStation.description': 'Our flagship service featuring professional DSLR cameras, glamorous sequin backdrops, fun props, and instant custom prints with QR code sharing.',
    'services.studioStation.features.camera': 'Professional DSLR Camera',
    'services.studioStation.features.backdrops': 'Glamorous Sequin Backdrops',
    'services.studioStation.features.props': 'Fun Props Collection',
    'services.studioStation.features.prints': 'Unlimited Custom Prints',
    'services.studioStation.features.sharing': 'QR Code Photo Sharing',
    'services.studioStation.features.attendant': 'Professional Attendant',
    'services.wedding.title': 'Wedding Packages',
    'services.wedding.description': 'Make your special day unforgettable with our premium wedding photo booth packages featuring custom backdrops and guest book integration.',
    'services.wedding.features.custom': 'Custom Wedding Backdrops',
    'services.wedding.features.guestbook': 'Guest Book Integration',
    'services.wedding.features.delivery': 'Same-Day Photo Delivery',
    'services.wedding.features.unlimited': 'Unlimited Photo Sessions',
    'services.wedding.features.coordination': 'Wedding Day Coordination',
    'services.wedding.features.setup': 'Professional Setup & Breakdown',
    'services.corporate.title': 'Corporate Events',
    'services.corporate.description': 'Professional photo booth services for corporate events, trade shows, and team building activities with branded customization options.',
    'services.corporate.features.branding': 'Custom Branded Backdrops',
    'services.corporate.features.social': 'Social Media Integration',
    'services.corporate.features.networking': 'Professional Networking Tool',
    'services.corporate.features.analytics': 'Event Analytics & Reports',
    'services.corporate.features.coordination': 'Event Coordination',
    'services.corporate.features.equipment': 'Premium Equipment Package',
    'services.celebration.title': 'Celebration Packages',
    'services.celebration.description': 'Perfect for birthdays, bar mitzvahs, and quinceañeras featuring colorful balloon arches and custom themed props.',
    'services.celebration.features.balloons': 'Custom Balloon Arches',
    'services.celebration.features.themes': 'Themed Props & Backdrops',
    'services.celebration.features.age': 'Age-Appropriate Entertainment',
    'services.celebration.features.music': 'Music & Entertainment Integration',
    'services.celebration.features.favors': 'Custom Photo Favors',
    'services.celebration.features.coordination': 'Party Coordination',
    'services.bookNow': 'Book Now',

    // Gallery Section
    'gallery.title': 'See Our Work in Action',
    'gallery.subtitle': 'Real moments captured at real events. Here\'s what our clients are saying about their Party Favor Photo experience.',
    'gallery.theKnot': 'on The Knot',
    'gallery.weddingWire': 'on WeddingWire',
    'gallery.viewAllReviews': 'View all reviews on The Knot',
    'gallery.verifiedReviews': '10+ verified reviews',
    'gallery.readyToCreate': 'Ready to create your own unforgettable moments?',
    'gallery.bookToday': 'Book Your Photo Booth Today',
    'gallery.readFullReview': 'Read full review →',

    // Booking Section
    'booking.title': 'Book Your Photo Booth Experience',
    'booking.subtitle': 'Ready to make your event unforgettable? Get in touch with us today!',
    'booking.phone': 'Call Us',
    'booking.email': 'Email Us',
    'booking.quote': 'Get Quote',
    'booking.phoneNumber': '(202) 798-0610',
    'booking.emailAddress': 'info@partyfavorphoto.com',

    // Footer
    'footer.tagline': 'Creating unforgettable memories, one photo at a time.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.gallery': 'Gallery',
    'footer.booking': 'Booking',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.allRightsReserved': '© 2024 Party Favor Photo. All rights reserved.',
  },
  es: {
    // Hero Section
    'hero.studioStation.title': 'Cabina de Fotos StudioStation',
    'hero.studioStation.subtitle': 'Nuestro servicio principal',
    'hero.studioStation.price': 'Desde $498',
    'hero.studioStation.duration': '2-5 horas',
    'hero.studioStation.description': 'Cámara DSLR profesional con fondos glamorosos de lentejuelas, accesorios divertidos, compartir código QR e impresiones personalizadas ilimitadas',
    'hero.studioStation.cta': 'Reservar StudioStation',
    'hero.professional.title': 'Servicios Profesionales de Cabina de Fotos',
    'hero.professional.subtitle': 'Experiencias galardonadas en el área DMV',
    'hero.professional.cta': 'Reserva Tu Evento',
    'hero.wedding.title': 'Paquetes de Boda',
    'hero.wedding.subtitle': 'Haz que tu día especial sea inolvidable',
    'hero.wedding.price': 'Desde $998',
    'hero.wedding.duration': '4-6 horas',
    'hero.wedding.description': 'Fondos personalizados para bodas con integración de libro de invitados y entrega de fotos el mismo día',
    'hero.wedding.cta': 'Reservar Paquete de Boda',
    'hero.corporate.title': 'Eventos Corporativos',
    'hero.corporate.subtitle': 'Diversión profesional para negocios',
    'hero.corporate.price': 'Desde $750',
    'hero.corporate.duration': '3-8 horas',
    'hero.corporate.description': 'Fondos con marca con integración de redes sociales para eventos corporativos y team building',
    'hero.corporate.cta': 'Reservar Evento Corporativo',
    'hero.viewWork': 'Ver Nuestro Trabajo',
    'hero.duration': 'Duración',

    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Experiencias profesionales de cabina de fotos adaptadas a tu evento',
    'services.studioStation.title': 'Cabina de Fotos StudioStation',
    'services.studioStation.description': 'Nuestro servicio principal con cámaras DSLR profesionales, fondos glamorosos de lentejuelas, accesorios divertidos e impresiones personalizadas instantáneas con código QR.',
    'services.studioStation.features.camera': 'Cámara DSLR Profesional',
    'services.studioStation.features.backdrops': 'Fondos Glamorosos de Lentejuelas',
    'services.studioStation.features.props': 'Colección de Accesorios Divertidos',
    'services.studioStation.features.prints': 'Impresiones Personalizadas Ilimitadas',
    'services.studioStation.features.sharing': 'Compartir Fotos con Código QR',
    'services.studioStation.features.attendant': 'Asistente Profesional',
    'services.wedding.title': 'Paquetes de Boda',
    'services.wedding.description': 'Haz que tu día especial sea inolvidable con nuestros paquetes premium de cabina de fotos para bodas con fondos personalizados e integración de libro de invitados.',
    'services.wedding.features.custom': 'Fondos Personalizados para Boda',
    'services.wedding.features.guestbook': 'Integración de Libro de Invitados',
    'services.wedding.features.delivery': 'Entrega de Fotos el Mismo Día',
    'services.wedding.features.unlimited': 'Sesiones de Fotos Ilimitadas',
    'services.wedding.features.coordination': 'Coordinación del Día de la Boda',
    'services.wedding.features.setup': 'Montaje y Desmontaje Profesional',
    'services.corporate.title': 'Eventos Corporativos',
    'services.corporate.description': 'Servicios profesionales de cabina de fotos para eventos corporativos, ferias comerciales y actividades de team building con opciones de personalización de marca.',
    'services.corporate.features.branding': 'Fondos Personalizados con Marca',
    'services.corporate.features.social': 'Integración de Redes Sociales',
    'services.corporate.features.networking': 'Herramienta de Networking Profesional',
    'services.corporate.features.analytics': 'Análisis e Informes del Evento',
    'services.corporate.features.coordination': 'Coordinación del Evento',
    'services.corporate.features.equipment': 'Paquete de Equipos Premium',
    'services.celebration.title': 'Paquetes de Celebración',
    'services.celebration.description': 'Perfect para cumpleaños, bar mitzvahs y quinceañeras con arcos coloridos de globos y accesorios temáticos personalizados.',
    'services.celebration.features.balloons': 'Arcos de Globos Personalizados',
    'services.celebration.features.themes': 'Accesorios y Fondos Temáticos',
    'services.celebration.features.age': 'Entretenimiento Apropiado para la Edad',
    'services.celebration.features.music': 'Integración de Música y Entretenimiento',
    'services.celebration.features.favors': 'Recuerdos Fotográficos Personalizados',
    'services.celebration.features.coordination': 'Coordinación de Fiesta',
    'services.bookNow': 'Reservar Ahora',

    // Gallery Section
    'gallery.title': 'Ve Nuestro Trabajo en Acción',
    'gallery.subtitle': 'Momentos reales capturados en eventos reales. Esto es lo que nuestros clientes dicen sobre su experiencia con Party Favor Photo.',
    'gallery.theKnot': 'en The Knot',
    'gallery.weddingWire': 'en WeddingWire',
    'gallery.viewAllReviews': 'Ver todas las reseñas en The Knot',
    'gallery.verifiedReviews': '10+ reseñas verificadas',
    'gallery.readyToCreate': '¿Listo para crear tus propios momentos inolvidables?',
    'gallery.bookToday': 'Reserva Tu Cabina de Fotos Hoy',
    'gallery.readFullReview': 'Leer reseña completa →',

    // Booking Section
    'booking.title': 'Reserva Tu Experiencia de Cabina de Fotos',
    'booking.subtitle': '¿Listo para hacer que tu evento sea inolvidable? ¡Ponte en contacto con nosotros hoy!',
    'booking.phone': 'Llámanos',
    'booking.email': 'Envíanos un Email',
    'booking.quote': 'Obtener Cotización',
    'booking.phoneNumber': '(202) 798-0610',
    'booking.emailAddress': 'info@partyfavorphoto.com',

    // Footer
    'footer.tagline': 'Creando recuerdos inolvidables, una foto a la vez.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.gallery': 'Galería',
    'footer.booking': 'Reservas',
    'footer.contact': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.allRightsReserved': '© 2024 Party Favor Photo. Todos los derechos reservados.',
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};