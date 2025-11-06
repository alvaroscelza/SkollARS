import PortfolioCard from "./PortfolioCard";
import Section from "./Section";

const Portfolio = () => {
    const portfolioItems = [
        {
            image: "companies_logos/odoo.png",
            title: "Software Integral para su Negocio",
            description: "Centralice ventas, inventario, facturación y clientes en un solo lugar. Ofrecemos implementación, hosting y mantenimiento para su crecimiento.",
            link: "/productos/gestion-empresarial",
            note: "Impulsado por Odoo"
        },
        {
            image: "companies_logos/finapp.png",
            title: "Software de Finanzas Personales",
            description: "Una aplicación web para ayudarte a gestionar ingresos, gastos e inversiones de forma simple y efectiva.",
            link: "/productos/finanzas-personales"
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
            title: "Conexión de Adoptantes y Rescatistas",
            description: "Una plataforma que conecta personas que encuentran animales callejeros con adoptantes comprometidos, fomentando el cambio social.",
            link: "/productos/adopcion-mascotas"
        },
        {
            image: "companies_logos/TurnoYa.png",
            title: "TurnoYa - Sistema de Agendamiento",
            description: "La agenda digital que usan peluqueras, terapeutas y consultores en Uruguay y Latam. Gestiona turnos, reduce no shows y aumenta ingresos.",
            link: "/productos/turnoya"
        }
    ];

    return (
        <Section id="productos" backgroundColor="gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Productos</h2>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                    Desde servicios de consultoría B2B hasta plataformas de impacto social y herramientas para el usuario final.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard key={index} icon={item.icon} image={item.image} title={item.title} description={item.description} link={item.link} note={item.note} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;

