import PortfolioCard from "./PortfolioCard";
import Section from "./Section";

const Portfolio = () => {
    const portfolioItems = [
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path></svg>',
            title: "Software Integral para Negocios",
            description: "Centralice ventas, inventario, facturación y clientes en un solo lugar. Ofrecemos implementación, hosting y mantenimiento para su crecimiento.",
            link: "/productos/gestion-empresarial",
            note: "Impulsado por Odoo"
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>',
            title: "Finanzas Personales",
            description: "Una aplicación web para ayudarte a gestionar ingresos, gastos e inversiones de forma simple y efectiva.",
            link: "/productos/finanzas-personales"
        },
        {
            icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
            title: "Conexión de Adoptantes y Rescatistas",
            description: "Una plataforma que conecta personas que encuentran animales callejeros con adoptantes comprometidos, fomentando el cambio social.",
            link: "/productos/adopcion-mascotas"
        }
    ];

    return (
        <Section id="productos" backgroundColor="gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro Portafolio de Soluciones</h2>
                <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                    Desde servicios de consultoría B2B hasta plataformas de impacto social y herramientas para el usuario final.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard key={index} icon={item.icon} title={item.title} description={item.description} link={item.link} note={item.note} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Portfolio;

