import ContactFormSection from "../components/ContactFormSection/ContactFormSection";
import Portfolio from "../components/Portfolio";
import ClientProjects from "../components/ClientProjects";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";
import SEO from "../components/SEO";

const Home = () => {
    const services = [
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            title: "Soluciones Estándar",
            description: "Software funcional, listo para usarse. Soporta pequeñas personalizaciones. Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta, entre otros."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path></svg>',
            title: "Desarrollo A Medida",
            description: "Desarrollo de Software completamente a medida. Incluye ingeniería de requerimientos, donde le ayudaremos a explorar las mejores ideas para que su nuevo software potencie su negocio."
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
            title: "Presencia Digital en Internet",
            description: "Creamos su página web, la configuramos en Google, visibilizamos sus redes sociales y mejoramos su publicidad en Facebook e Instagram. Más visibilidad, más clientes."
        },
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
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>',
            title: "Automatización por IA",
            description: "Inteligencia artificial que le devuelve horas y ganancias. No pierda más tiempo buscando datos, reciba predicciones al instante: cuándo se acabará el stock, cuál será el precio de los insumos el año que viene, cuánto facturará cada cliente el próximo trimestre."
        }
    ];

    return (
        <>
            <SEO
                title="Innovación y Soluciones Tecnológicas"
                description="SkollARS ofrece desarrollo de software a medida, páginas web, sitios web, presencia digital en internet (Google Business Profile, redes sociales, SEO, publicidad), soluciones estándar de gestión empresarial (RRHH, Finanzas, Inventario, POS), automatización por IA, consultoría tecnológica (Design Thinking, Optimización de Negocios) y software de impacto social. Innovación tecnológica para tu negocio en Uruguay."
                keywords="página web, sitio web, página web para mi empresa, hacer página web, crear página web, desarrollo de páginas web, desarrollo de sitios web, página web para pymes, sitio web para empresas, Google Business Profile, presencia digital, redes sociales para empresas, publicidad digital, SEO, desarrollo de software, software a medida, gestión empresarial, software de inventario, punto de venta, CRM, automatización por IA, inteligencia artificial, automatización de procesos, consultoría tecnológica, design thinking, optimización de negocios, sistemas de información, Uruguay"
                canonical="/"
            />
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
            <ClientProjects />
            <Section id="servicios" backgroundColor="white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nuestros Servicios de Ingeniería y Consultoría de Software</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {services.map((service, index) => (
                            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </Section>
            <Portfolio />
            <ContactFormSection />
        </>
    );
};

export default Home;
