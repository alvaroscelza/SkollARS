import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={`${process.env.PUBLIC_URL || ''}/img/logo.png`} alt="Logo SkollARS" className="w-8 h-8 rounded-full" />
                    <span className="text-xl font-bold text-gray-800">SkollARS</span>
                </Link>
                <div className="hidden md:flex space-x-8 items-center text-gray-600 font-medium">
                    <Link to="/#home" className="hover:text-skollars-accent transition duration-150">Home</Link>
                    <Link to="/#servicios" className="hover:text-skollars-accent transition duration-150">Servicios</Link>
                    <div className="relative dropdown">
                        <button className="hover:text-skollars-accent transition duration-150 p-2 focus:outline-none">
                            Productos
                            <svg className="w-4 h-4 inline ml-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/productos/gestion-empresarial" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Odoo ERP</Link>
                            <Link to="/productos/finanzas-personales" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">FinApp</Link>
                            <Link to="/productos/adopcion-mascotas" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">Adopción de Mascotas</Link>
                        </div>
                    </div>
                    <Link to="/#contacto" className="btn-contacto">Contacto</Link>
                </div>
                <button className="md:hidden text-gray-600 hover:text-skollars-accent">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
