import { Link } from "react-router-dom";

const PortfolioCard = ({ icon, title, description, link, note, linkText }) => {
    const getLinkText = () => {
        if (linkText) return linkText;
        if (link.includes('gestion')) return 'Explorar Servicios →';
        if (link.includes('finanzas')) return 'Ir a la Aplicación →';
        return 'Conocer el Proyecto →';
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.01]">
            <div className="icon-lg text-skollars-accent mx-auto mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-500 mb-4">{description}</p>
            {note && <p className="text-xs text-gray-400 mt-2">{note}</p>}
            <Link to={link} className="text-skollars-accent hover:text-red-900 font-medium mt-3 inline-block">
                {getLinkText()}
            </Link>
        </div>
    );
};

export default PortfolioCard;
