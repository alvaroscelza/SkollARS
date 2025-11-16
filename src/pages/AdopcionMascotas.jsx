import { Link } from "react-router-dom";
import ContactFormSection from "../components/ContactFormSection/ContactFormSection.jsx";
import SEO from "../components/SEO.jsx";

const AdopcionMascotas = () => {
    return (
        <div className="min-h-screen">
            <SEO
                title="Plataforma de Adopción de Mascotas"
                description="Conecta corazones y dale un hogar a una mascota. Plataforma que facilita el encuentro entre animales rescatados y familias responsables, promoviendo la adopción y el bienestar animal en Uruguay."
                keywords="adopción de mascotas, adopción de perros, adopción de gatos, animales rescatados, bienestar animal, plataforma de adopción, Uruguay, refugio de animales"
                canonical="/productos/adopcion-mascotas"
                ogImage="/img/products/mascotas.webp"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "Plataforma de Adopción de Mascotas",
                    "description": "Plataforma que conecta animales rescatados con familias responsables, promoviendo la adopción y el bienestar animal en Uruguay.",
                    "applicationCategory": "SocialNetworkingApplication",
                    "operatingSystem": "Web",
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
                            "name": "Adopción de Mascotas",
                            "item": "https://skollars.dev/productos/adopcion-mascotas"
                        }
                    ]
                }}
            />
            <main id="hero" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-skollars-accent-light text-skollars-accent mb-4">Misión Social</span>
                        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
                            Conecta Corazones. Dale un Hogar a una Mascota.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Nuestra plataforma facilita el encuentro entre animales rescatados y familias responsables, promoviendo la adopción y el bienestar animal en Uruguay.
                        </p>
                        <Link to="#contacto" className="btn-primary-gradient">
                            Averigua cómo puedes ayudar
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <img src="/img/products/mascotas.webp" alt="Plataforma de adopción de mascotas - Conectando animales rescatados con familias responsables en Uruguay" className="rounded-xl shadow-2xl" loading="lazy" />
                    </div>
                </div>
            </main>
            <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Sé parte del cambio, conectando vidas</h2>
                <p className="text-xl text-gray-500 mb-16 text-center max-w-4xl mx-auto">
                    Ayudamos a los rescatistas independientes a encontrar la familia perfecta para cada animal, de forma segura y eficiente.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="pet-icon icon-lg mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-6-8h6m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Visibilidad Máxima</h3>
                        <p className="text-gray-600">Publica los animales que rescataste en minutos y llega a miles de posibles adoptantes en todo el país.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="pet-icon icon-lg mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Búsqueda Inteligente</h3>
                        <p className="text-gray-600">Filtra por especie, tamaño, ubicación y temperamento para encontrar la mascota que mejor se adapte a tu hogar.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card text-center">
                        <div className="pet-icon icon-lg mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.16a12.186 12.186 0 01-1.395-3.16c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Contacto Directo y Seguro</h3>
                        <p className="text-gray-600">Facilitamos la comunicación directa entre rescatistas y adoptantes, asegurando un proceso transparente y responsable.</p>
                    </div>
                </div>
            </section>
            <section id="proceso" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Nuestro Proceso de Adopción Responsable</h2>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="pet-icon icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-skollars-accent">
                                <span className="text-3xl font-bold">1</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Publicación o Búsqueda</h3>
                                <p className="text-gray-600">Si rescatas un animal, publica su perfil con fotos e historia. Si quieres adoptar, usa nuestros filtros avanzados para encontrar a tu compañero ideal.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="pet-icon icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-skollars-accent">
                                <span className="text-3xl font-bold">2</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Contacto y Entrevista</h3>
                                <p className="text-gray-600">El adoptante contacta al rescatista directamente. Se realizan las preguntas necesarias para asegurar que el entorno sea adecuado.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:text-left text-center max-w-4xl mx-auto">
                            <div className="pet-icon icon-xl flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-skollars-accent">
                                <span className="text-3xl font-bold">3</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900">Finalización de la Adopción</h3>
                                <p className="text-gray-600">Una vez que ambas partes están de acuerdo, se formaliza la adopción, dándole una segunda oportunidad al animal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactFormSection
                buttonText="Enviar Mensaje"
                title="¿Cómo puedes ayudar?"
                description="Cuéntanos sobre ti y cómo te gustaría colaborar con nuestra misión de conectar mascotas con hogares responsables."
                showEmailLink={false}
            />
        </div>
    );
};

export default AdopcionMascotas;
