const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="icon-lg text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default ServiceCard;
