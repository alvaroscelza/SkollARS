import ContactForm from "../components/ContactForm/ContactForm";
import Portfolio from "../components/Portfolio";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";

const Home = () => {
    const services = [
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            title: "Soluciones Estándar",
            description: "Software funcional, listo para usarse. Soporta pequeñas personalizaciones. Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta, entre otros."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"></path></svg>',
            title: "Soluciones Prediseñadas",
            description: "Software semi-funcional para modelos de negocios estándar. Soporta personalizaciones medianas. Software que suele requerir ciertas personalizaciones para quedar funcional (e-commerce, blogs, landing pages)."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path></svg>',
            title: "Desarrollo A Medida",
            description: "Desarrollo de Software completamente a medida. Incluye ingeniería de requerimientos, donde le ayudaremos a explorar las mejores ideas para que su nuevo software potencie su negocio."
        }
    ];

    const consultingServices = [
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>',
            title: "Design Thinking",
            description: "Le ayudamos a entender y definir los problemas de su negocio. Metodología para explorar ideas y mejorarlas con bajo costo y de forma temprana."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4h-3m3 4h3m0-3v3m0 0a2 2 0 100 4m0-4v3m0 0h-3m3 4h3m0 0a2 2 0 100 4m0-4v3m0 0h-3m-3-3V6m0 0a2 2 0 100 4m0-4H9m0 4h3m0-3v3m0 0a2 2 0 100 4m0-4v3m0 0h-3"></path></svg>',
            title: "Optimización de Negocios",
            description: "Análisis exhaustivo de la Unidad Estratégica de su Negocio (UEN). Enfocado en pequeñas empresas o emprendimientos personales."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l2-2 2 2 2-2 2 2M15 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-2m-2-5h-2"></path></svg>',
            title: "Sistemas de Información",
            description: "Análisis estratégico, cadena de valor, posición en TI/IS, análisis FODA, etc. Pensado para medianos o grandes negocios."
        }
    ];

    return (
        <>
            <main id="home" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
                    <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 leading-tight text-gray-800">
                        SkollARS
                    </h1>
                    <p className="text-2xl sm:text-3xl font-light text-gray-600 mb-10">
                        Innovación y Soluciones Tecnológicas a tu medida.
                    </p>
                    <a href="#contacto" className="btn-primary-gradient text-lg">Hablemos de tu proyecto</a>
                </div>
            </main>
            <Portfolio />
            <Section id="servicios" backgroundColor="white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nuestros Servicios de Ingeniería y Consultoría</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                        {services.map((service, index) => (
                            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {consultingServices.map((service, index) => (
                            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </Section>
            <ContactForm />
        </>
    );
};

export default Home;
