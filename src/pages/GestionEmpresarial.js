import { Link } from "react-router-dom";
import ContactFormSimple from "../components/ContactForm/ContactFormSimple";

const GestionEmpresarial = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
            <main id="home" className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="text-skollars-accent font-semibold text-lg">SOFTWARE INTEGRAL PARA NEGOCIOS</span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 mt-2 leading-tight text-gray-900">
                            Deje atrás el caos de las planillas.
                        </h1>
                        <p className="text-xl sm:text-2xl font-light text-gray-600 mb-10">
                            Gestione ventas, inventario, facturación y clientes desde un solo lugar.
                        </p>
                        <Link to="/#contacto" className="btn-primary-gradient text-lg px-8 py-3 shadow-lg inline-block">
                            Solicitar Asesoramiento Gratuito
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <img src="https://placehold.co/600x400/1a1a1a/a90000/png?text=Gestion+Unificada" alt="Vista centralizada de gestión de inventario y ventas." className="rounded-lg shadow-2xl mb-3" />
                        <p className="text-sm text-gray-500 text-center italic">Vista centralizada de gestión de inventario, ventas y clientes en tiempo real.</p>
                    </div>
                </div>
            </main>
            <section id="problemas" className="py-16 border-t border-gray-200" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">¿La gestión de su Pyme le consume el día?</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                        Sabemos que su tiempo vale. Deje de perderlo en tareas manuales que podemos automatizar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Inventario Desactualizado</h3>
                            <p className="text-gray-500">
                                Pierde ventas por no saber qué tiene en stock, o compra mercadería que no necesita.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Facturación Manual</h3>
                            <p className="text-gray-500">
                                Dedica horas a crear facturas, enviarlas por email y perseguir pagos de clientes.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-lg">
                            <svg className="text-skollars-accent icon-lg mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Clientes Desorganizados</h3>
                            <p className="text-gray-500">
                                No tiene un historial de compras, no sabe quiénes son sus mejores clientes ni cómo fidelizarlos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="solucion" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Todo lo que su negocio necesita, conectado.</h2>
                        <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                            Nuestra plataforma modular se adapta a usted. Use solo lo que necesita y crezca sin límites.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Gestión de Clientes (CRM) y Ventas</h3>
                            <p className="text-gray-500">Siga cada oportunidad de venta, desde el primer contacto hasta el cierre, y fidelice a sus clientes.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Facturación Electrónica y Cuentas</h3>
                            <p className="text-gray-500">Emita facturas legales (e-Factura) en segundos, controle cuentas por cobrar y gestione sus finanzas.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Control de Inventario y Stock</h3>
                            <p className="text-gray-500">Sepa exactamente qué tiene y dónde. Gestione múltiples depósitos y evite quiebres de stock.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Punto de Venta (POS)</h3>
                            <p className="text-gray-500">Una interfaz simple y rápida para su mostrador o tienda, totalmente integrada al inventario.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Tienda Online (E-Commerce)</h3>
                            <p className="text-gray-500">Venda sus productos por internet con una tienda online conectada directamente a su stock y facturación.</p>
                        </div>
                        <div className="p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2 text-skollars-accent">Informes y Rentabilidad</h3>
                            <p className="text-gray-500">Tome decisiones basadas en datos. Entienda su rentabilidad, flujo de caja y productos estrella.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="servicio" className="py-20 border-t border-gray-200" style={{ backgroundColor: '#f7f7f7' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Un Servicio "Llave en Mano"</h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            No solo le damos el software. Lo acompañamos en cada paso para asegurar su éxito.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-50 text-skollars-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Implementación y Migración</h3>
                            <p className="text-gray-500">Analizamos su negocio, configuramos los módulos que necesita y migramos sus datos (clientes, productos) para que empiece a operar de inmediato.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-50 text-skollars-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Hosting Seguro en la Nube</h3>
                            <p className="text-gray-500">Olvídese de servidores y backups. Su sistema estará disponible 24/7 en la nube, accesible desde cualquier lugar y de forma 100% segura.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-50 text-skollars-accent rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Asesoramiento y Mantenimiento</h3>
                            <p className="text-gray-500">Somos sus socios tecnológicos. Brindamos soporte continuo, actualizaciones y lo asesoramos para que le saque el máximo provecho a la herramienta.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contacto" className="py-20 bg-white border-t border-gray-200">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Listo para transformar la gestión de su negocio?</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Complete el formulario y un especialista de SkollARS lo contactará para un diagnóstico gratuito, sin compromiso.
                </p>
                <ContactFormSimple buttonText="Pedir Asesoramiento" />
                </div>
            </section>
            <footer className="bg-gray-200 pt-8 pb-6 text-sm text-gray-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-xs mb-3 text-gray-500">
                        Nuestra plataforma de Gestión Empresarial es una solución robusta impulsada por Odoo.
                        SkollARS es un proveedor de servicios independiente y no está afiliado directamente con Odoo S.A.
                    </p>
                    <p>Copyright © {new Date().getFullYear()} SkollARS. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default GestionEmpresarial;