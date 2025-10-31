import { Link } from "react-router-dom";

const AdopcionMascotas = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
            <section className="bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Adopción de Mascotas y Apoyo a Refugios</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Una plataforma que conecta personas que encuentran animales callejeros con adoptantes comprometidos, fomentando el cambio social.
                    </p>
                </div>
            </section>
            <section className="py-8 border-t border-gray-200" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-center mb-6">
                        <svg className="text-skollars-accent icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Características Principales</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Conexión entre rescatistas y adoptantes</li>
                            <li>Gestión de refugios y animales</li>
                            <li>Sistema de seguimiento de adopciones</li>
                            <li>Perfiles detallados de mascotas</li>
                            <li>Herramientas para refugios y voluntarios</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Impacto Social</h2>
                        <p className="text-gray-700 mb-6">
                            Esta plataforma tiene como objetivo facilitar el proceso de adopción y ayudar a los refugios a gestionar mejor sus recursos, 
                            contribuyendo así al bienestar animal y al cambio social positivo.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/#contacto" className="btn-primary-gradient">
                                Contactar Ahora
                            </Link>
                            <Link to="/" className="btn-contacto">
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default AdopcionMascotas;
