import { Link } from "react-router-dom";

const PortfolioCard = ({ icon, image, title, description, link, note, linkText }) => {
    const getLinkText = () => {
        if (linkText) return linkText;
        if (link.includes('gestion')) return 'Explorar Servicios →';
        if (link.includes('finanzas')) return 'Ir a la Aplicación →';
        return 'Conocer el Proyecto →';
    };

    const isExternalLink = link && (link.startsWith('http://') || link.startsWith('https://'));

    const linkComponent = isExternalLink ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-skollars-accent hover:text-red-900 font-medium mt-3 inline-block">
            {getLinkText()}
        </a>
    ) : (
        <Link to={link} className="text-skollars-accent hover:text-red-900 font-medium mt-3 inline-block">
            {getLinkText()}
        </Link>
    );

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]">
            {image ? (
                <div className="mb-4 flex justify-center">
                    {image === 'companies_logos/TurnoYa.png' ? (
                        <img 
                            src={`${process.env.PUBLIC_URL || ''}/img/${image}`} 
                            alt={title} 
                            className="h-16 w-16 rounded-full object-cover" 
                        />
                    ) : (
                        <img 
                            src={`${process.env.PUBLIC_URL || ''}/img/${image}`} 
                            alt={title} 
                            className="h-16 w-auto object-contain" 
                        />
                    )}
                </div>
            ) : (
                <div className="icon-lg text-skollars-accent mx-auto mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
            )}
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-500 mb-4">{description}</p>
            {note && <p className="text-xs text-gray-400 mt-2">{note}</p>}
            {linkComponent}
        </div>
    );
};

export default PortfolioCard;
