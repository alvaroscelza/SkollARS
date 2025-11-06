import { Link } from "react-router-dom";
import ContactFormSection from "../components/ContactFormSection/ContactFormSection.jsx";
import SEO from "../components/SEO.jsx";

const TurnoYa = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="TurnoYa - Sistema de Agendamiento para Profesionales"
                description="La agenda que usan peluqueras, terapeutas y consultores en Uruguay y Latam. Gestiona tus turnos, reduce no shows y aumenta tus ingresos. Agenda digital profesional que funciona desde tu celular."
                keywords="agenda digital, sistema de turnos, agendamiento online, software para peluquerías, software para terapeutas, agenda para consultores, turnos online, reserva de citas, gestión de turnos, Uruguay, Latinoamérica"
                canonical="/productos/turnoya"
                ogImage="/img/products/turno_ya.png"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "TurnoYa",
                    "applicationCategory": "BusinessApplication",
                    "description": "Sistema de agendamiento digital para profesionales independientes. Usado por peluqueras, terapeutas y consultores en Uruguay y Latinoamérica.",
                    "operatingSystem": "Web, Mobile",
                    "featureList": [
                        "Agenda Digital",
                        "Reserva de Turnos Online",
                        "Recordatorios Automáticos",
                        "Gestión de Clientes",
                        "Calendario en Tiempo Real",
                        "Reducción de No Shows"
                    ],
                    "provider": {
                        "@type": "Organization",
                        "name": "SkollARS",
                        "url": "https://skollars.dev"
                    }
                }}
                breadcrumbs={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Inicio",
                            "item": "https://skollars.dev"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Productos",
                            "item": "https://skollars.dev/#productos"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "TurnoYa",
                            "item": "https://skollars.dev/productos/turnoya"
                        }
                    ]
                }}
            />
            <main id="hero" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-skollars-accent-light text-skollars-accent mb-4">TurnoYa</span>
                        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
                            La Agenda que Usan los emprendedores más exitosos.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Gestiona tus turnos desde tu celular, reduce no shows y aumenta tus ingresos. La plataforma de agendamiento que transforma la forma en que trabajan peluqueras, terapeutas y consultores en Uruguay y Latam.
                        </p>
                        <Link to="/#contacto" className="btn-primary-gradient">
                            Empieza a Agendar Hoy
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <img src="/img/products/turno_ya.png" alt="TurnoYa - Sistema de agendamiento digital para profesionales" className="rounded-xl shadow-2xl" loading="lazy" />
                    </div>
                </div>
            </main>
            <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Olvídate de los No Shows y Duplica tu Productividad</h2>
                <p className="text-xl text-gray-500 mb-16 text-center max-w-4xl mx-auto">
                    Miles de profesionales ya confían en TurnoYa para gestionar sus turnos. Únete a la revolución digital.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Agenda Disponible 24/7</h3>
                        <p className="text-gray-600">Tus clientes reservan turnos cuando quieran, desde cualquier lugar. No más llamadas perdidas ni mensajes que se olvidan responder.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Recordatorios Automáticos</h3>
                        <p className="text-gray-600">Reduce los no shows hasta en un 80%. Tus clientes reciben recordatorios por WhatsApp y email antes de cada cita.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Aumenta tus Ingresos</h3>
                        <p className="text-gray-600">Menos turnos perdidos, más clientes satisfechos y más tiempo para atender. Gestiona múltiples servicios y profesionales desde una sola plataforma.</p>
                    </div>
                </div>
            </section>
            <section id="beneficios" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Hecho para Profesionales que Crecen</h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Ya sea que trabajes solo o con un equipo, TurnoYa se adapta a tu negocio.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Peluquerías y Salones</h3>
                            <p className="text-gray-600">Gestiona cortes, tinturas, tratamientos y más. Múltiples profesionales, múltiples servicios, una sola agenda.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Terapeutas y Psicólogos</h3>
                            <p className="text-gray-600">Organiza sesiones individuales y grupales, respeta tiempos de terapia y mantén la confidencialidad de tus pacientes.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Consultores y Asesores</h3>
                            <p className="text-gray-600">Administra consultorías, reuniones y seguimientos. Bloquea horarios, gestiona disponibilidad y optimiza tu tiempo.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Gestión desde el Celular</h3>
                            <p className="text-gray-600">Atiende tu negocio desde donde estés. Agrega turnos, modifica horarios y responde a tus clientes al instante.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Historial de Clientes</h3>
                            <p className="text-gray-600">Conoce el historial completo de cada cliente: servicios, frecuencia y preferencias. Ofrece una atención personalizada.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Reportes y Estadísticas</h3>
                            <p className="text-gray-600">Visualiza tus ingresos, servicios más solicitados y horarios pico. Toma decisiones basadas en datos reales.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="proceso" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">En 3 Pasos Simplifica tu Agenda</h2>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="text-skollars-accent icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                                <span className="text-3xl font-bold">1</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Configura tu Perfil</h3>
                                <p className="text-gray-600">Define tus servicios, horarios disponibles y duración de cada turno. En minutos, tu agenda estará lista para recibir reservas.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="text-skollars-accent icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                                <span className="text-3xl font-bold">2</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Comparte tu Link</h3>
                                <p className="text-gray-600">Envía tu enlace personalizado a tus clientes por WhatsApp, redes sociales o inclúyelo en tu tarjeta. Ellos reservan cuando quieran.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="text-skollars-accent icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                                <span className="text-3xl font-bold">3</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Gana Más y Trabaja Menos</h3>
                                <p className="text-gray-600">Recibe notificaciones de cada reserva, gestiona tus turnos desde tu celular y disfruta de menos no shows y más ingresos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFormSection
                buttonText="Comenzar con TurnoYa"
                title="¿Listo para revolucionar tu agenda?"
                description="Únete a miles de profesionales que ya están usando TurnoYa para gestionar sus turnos. Completa el formulario y te contactaremos para configurar tu agenda digital."
                showEmailLink={false}
            />
        </div>
    );
};

export default TurnoYa;

