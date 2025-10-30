const Portfolio = () => {
    return (
        <section id="productos" className="py-16 bg-gray-50 border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Portafolio de Soluciones</h2>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                    Desde servicios de consultoría B2B hasta plataformas de impacto social y herramientas para el usuario final.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]">
                        <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Software Integral para Negocios</h3>
                        <p className="text-gray-500 mb-2">
                            Centralice ventas, inventario, facturación y clientes en un solo lugar. Ofrecemos implementación, hosting y mantenimiento para su crecimiento.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">Impulsado por Odoo</p>
                        <a href="#servicios" className="text-skollars-accent hover:text-red-900 font-medium mt-3 inline-block">Explorar Servicios →</a>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]">
                        <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Finanzas Personales</h3>
                        <p className="text-gray-500 mb-4">
                            Una aplicación web para ayudarte a gestionar ingresos, gastos e inversiones de forma simple y efectiva.
                        </p>
                        <a href="#contacto" className="text-skollars-accent hover:text-red-900 font-medium">Ir a la Aplicación →</a>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]">
                        <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Conexión de Adoptantes y Rescatistas</h3>
                        <p className="text-gray-500 mb-4">
                            Una plataforma que conecta personas que encuentran animales callejeros con adoptantes comprometidos, fomentando el cambio social.
                        </p>
                        <a href="#contacto" className="text-skollars-accent hover:text-red-900 font-medium">Conocer el Proyecto →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

