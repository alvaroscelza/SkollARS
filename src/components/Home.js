import ContactForm from "./ContactForm/ContactForm";
import Portfolio from "./Portfolio";

const Home = () => {
    return (
        <>
            <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 leading-tight text-gray-800">
                    SkollARS
                </h1>
                <p className="text-2xl sm:text-3xl font-light text-gray-600 mb-10">
                    Innovación y Soluciones Tecnológicas a tu medida.
                </p>
                <a href="#contacto" className="btn-primary-gradient text-lg">Hablemos de tu proyecto</a>
            </main>
            <Portfolio />
            <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nuestros Servicios de Ingeniería y Consultoría</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1v-3.25m-7.25 0h14.5a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7.75a2 2 0 002 2h.25zm5-10a2 2 0 100 4 2 2 0 000-4zm-4 7h8m-4-4v8"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Soluciones Estándar</h3>
                        <p className="text-gray-500">Software funcional, listo para usarse. Soporta pequeñas personalizaciones. Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta, entre otros.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1v-3.25m-7.25 0h14.5a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7.75a2 2 0 002 2h.25zm5-10a2 2 0 100 4 2 2 0 000-4zm4 7h-8m4-4v8"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Soluciones Prediseñadas</h3>
                        <p className="text-gray-500">Software semi-funcional para modelos de negocios estándar. Soporta personalizaciones medianas. Software que suele requerir ciertas personalizaciones para quedar funcional (e-commerce, blogs, landing pages).</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Desarrollo A Medida</h3>
                        <p className="text-gray-500">Desarrollo de Software completamente a medida. Incluye ingeniería de requerimientos, donde le ayudaremos a explorar las mejores ideas para que su nuevo software potencie su negocio.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Design Thinking</h3>
                        <p className="text-gray-500">Le ayudamos a entender y definir los problemas de su negocio. Metodología para explorar ideas y mejorarlas con bajo costo y de forma temprana.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4h-3m3 4h3m0-3v3m0 0a2 2 0 100 4m0-4v3m0 0h-3m3 4h3m0 0a2 2 0 100 4m0-4v3m0 0h-3m-3-3V6m0 0a2 2 0 100 4m0-4H9m0 4h3m0-3v3m0 0a2 2 0 100 4m0-4v3m0 0h-3"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Optimización de Negocios</h3>
                        <p className="text-gray-500">Análisis exhaustivo de la Unidad Estratégica de su Negocio (UEN). Enfocado en pequeñas empresas o emprendimientos personales.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="icon-lg text-gray-800 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l2-2 2 2 2-2 2 2M15 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-2m-2-5h-2"></path>
                        </svg>
                        <h3 className="text-xl font-semibold mb-2">Sistemas de Información</h3>
                        <p className="text-gray-500">Análisis estratégico, cadena de valor, posición en TI/IS, análisis FODA, etc. Pensado para medianos o grandes negocios.</p>
                    </div>
                </div>
            </section>
            <ContactForm />
        </>
    );
};

export default Home;
