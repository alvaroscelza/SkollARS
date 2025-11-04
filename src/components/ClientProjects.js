import PortfolioCard from "./PortfolioCard";
import Section from "./Section";

const ClientProjects = () => {
    const clientProjects = [
        {
            image: "companies_logos/amoeb_ai.jpg",
            title: "Amoeba AI",
            description: "Desarrollo de sistema financiero innovador utilizando AWS Lambdas y arquitectura Pipes and Filters. Implementación de RAG (Retrieval-Augmented Generation) para chat con IA especializado en información financiera.",
            link: "https://www.amoeba.ai/",
            linkText: "Ver Sitio →"
        },
        {
            image: "companies_logos/elasticHotel.png",
            title: "Elastic Hotel",
            description: "Desarrollo de plataforma de gestión hotelera con múltiples versiones, incluyendo investigación en IA para optimización de procesos.",
            link: "https://www.elastichotel.com/",
            linkText: "Ver Sitio →"
        },
        {
            image: "companies_logos/create-thrive.jpg",
            title: "CreateThrive",
            description: "Proyectos para clientes internacionales incluyendo Sunpower (InstantDesign), Kard (RewardsAPIs), Convex Labs (NFT Theft Detection) y No Nerds No Problem (Medl).",
            link: "https://www.createthrive.com/",
            linkText: "Ver Sitio →"
        },
        {
            image: "companies_logos/ripio.png",
            title: "Ripio",
            description: "Múltiples proyectos en plataforma de criptomonedas: OTC, Paymatico Webhooks, Eventually, documentación de APIs y servicios, Conductor, entre otros.",
            link: "https://www.ripio.com/ar/",
            linkText: "Ver Sitio →"
        },
        {
            image: "companies_logos/bps.png",
            title: "Banco de Previsión Social (BPS)",
            description: "Proyectos en sistema de seguridad social: SDES Conectados, GRP, y mejoras en procesos de desarrollo.",
            link: "https://www.bps.gub.uy/",
            linkText: "Ver Sitio →"
        },
        {
            image: "companies_logos/dnm.gif",
            title: "Dirección Nacional de Migración (DNM)",
            description: "Desarrollo de sistemas de registro de procedimientos migratorios, mejorando la gestión de procesos administrativos.",
            link: "https://www.gub.uy/migracion",
            linkText: "Ver Sitio →"
        }
    ];

    if (clientProjects.length === 0) {
        return null;
    }

    return (
        <Section id="proyectos-clientes" backgroundColor="white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Experiencia y Casos de Estudio</h2>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                    Más de una década de experiencia aportando valor en proyectos de ingeniería locales e internacionales.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clientProjects.map((project, index) => (
                        <PortfolioCard 
                            key={index} 
                            image={project.image}
                            icon={project.icon}
                            title={project.title} 
                            description={project.description} 
                            link={project.link} 
                            linkText={project.linkText}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ClientProjects;

