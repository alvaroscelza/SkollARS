import { Link } from "react-router-dom";

const GestionEmpresarial = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Software Integral para Negocios</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Centralice ventas, inventario, facturación y clientes en un solo lugar. Ofrecemos implementación, hosting y mantenimiento para su crecimiento.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <div className="flex items-center justify-center mb-6">
                        <svg className="text-skollars-accent icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.526.321 1.066.52 1.577.52h.001zm-.001 5.82a2 2 0 104 0 2 2 0 00-4 0z"></path>
                        </svg>
                    </div>
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Módulos Incluidos</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Gestión de ventas y facturación</li>
                            <li>Control de inventario</li>
                            <li>Gestión de clientes (CRM)</li>
                            <li>Gestión contable y financiera</li>
                            <li>Recursos Humanos</li>
                            <li>Punto de venta (POS)</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servicios Incluidos</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                            <li>Implementación completa del sistema</li>
                            <li>Capacitación de usuarios</li>
                            <li>Hosting y mantenimiento</li>
                            <li>Soporte técnico continuo</li>
                        </ul>
                        <p className="text-sm text-gray-400 mb-6 text-center">Impulsado por Odoo</p>
                        <div className="flex gap-4 justify-center">
                            <Link to="/#contacto" className="btn-primary-gradient">
                                Contactar Ahora
                            </Link>
                            <Link to="/" className="btn-contacto">
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GestionEmpresarial;
