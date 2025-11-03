import { Link } from "react-router-dom";
import ContactFormSection from "../components/ContactFormSection/ContactFormSection";

const FinanzasPersonales = () => {
    return (
        <div className="min-h-screen">
            <main id="hero" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-skollars-accent-light text-skollars-accent mb-4">FinApp</span>
                        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight text-gray-900">
                            Toma el Control de tu Dinero. Sin Complicaciones.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            La herramienta que convierte el estrés financiero en claridad. Ve en qué gastas tu dinero y alcanza tus metas de ahorro más rápido.
                        </p>
                        <Link to="/#contacto" className="btn-primary-gradient">
                            Empieza a Organizarte Gratis
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <img src={`${process.env.PUBLIC_URL || ''}/img/finapp.png`} alt="Dashboard de Finanzas Personales" className="rounded-xl shadow-2xl border-4 border-gray-800" />
                    </div>
                </div>
            </main>
            <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Cómo FinApp simplifica tu vida</h2>
                <p className="text-xl text-gray-500 mb-16 text-center max-w-4xl mx-auto">
                    Diseñada para ser intuitiva y poderosa, FinApp te da la visión completa de tu economía personal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0h4m-4 0v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4-6h4m-4 0v-4m4 4v-4m0 4h2a2 2 0 002-2V7a2 2 0 00-2-2h-5a2 2 0 00-2 2v2"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Visión 360° en un solo lugar</h3>
                        <p className="text-gray-600">Conecta tus cuentas y ve el panorama completo de tus ingresos y gastos al instante. Adiós a las múltiples planillas de cálculo.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-1.343 2-3 2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Presupuestos</h3>
                        <p className="text-gray-600">Establece límites de gasto por categoría (ej. "Ocio"), ayudándote a mantenerte en el camino correcto.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 feature-card">
                        <div className="text-skollars-accent icon-lg mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Gestión de Inversiones</h3>
                        <p className="text-gray-600">Visualiza y sigue el rendimiento de tus inversiones en acciones, criptomonedas y más, todo desde un solo lugar.</p>
                    </div>
                </div>
            </section>
            <ContactFormSection
                buttonText="Empezar Gratis"
                title="¿Listo para cambiar tu relación con el dinero?"
                description="Únete a FinApp hoy y empieza a construir un futuro financiero más sólido. Es simple, rápido y gratuito."
                showEmailLink={false}
            />
        </div>
    );
};

export default FinanzasPersonales;