import { Fragment } from "react/cjs/react.production.min";
import ContactForm from './ContactForm';

const Header = () => {
    return (
        <Fragment>
            <section class="pt-0 bg-white">
                <div className="height-40 py-3 py-md-4">
                    <div className="container">
                        <div className="row text-center justify-content-center">
                            <div className="col-12 mt-5">
                                <h1 className="h1 text-dark mb-5">SkollARS Software Development</h1>
                            </div>
                            <div className="col-md-12 col-lg-7 mb-3">
                                <h2 className="h2 text-dark mb-5">No importa lo que necesites, nosotros podemos construirlo.</h2>
                            </div>
                            <div className="col-12 justify-content-center">
                                <a className="btn btn-primary btn-lg m-2 aos-init aos-animate" href="#contact-form" data-aos="fade">
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white pt-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="text-center text-md-left">
                                <img src="/one_gear.png" alt="" class="icon flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Soluciones Estándar</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Software funcional, listo para usarse. Soporta pequeñas customizaciones. <br />
                                        <br />
                                        Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta, entre otros.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="text-center text-md-left">
                                <img src="/two_gears.png" alt="" class="icon flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Soluciones Prediseñadas</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Software semi funcional para modelos de negocios estándar. Soporta customizaciones medianas. <br />
                                        <br />
                                        Software que suele requerir ciertas customizaciones para quedar funcional: e-commerce, blogs, landing pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="text-center text-md-left">
                                <img src="/three_gears.png" alt="" class="icon flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Desarrollo A Medida</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Desarrollo de Software completamente a medida. No importa lo que necesites, lo construiremos para ti, con las funcionalidades que tu quieres y de la forma que tu quieres.<br />
                                        <br />
                                        Incluye ingeniería de requerimientos, donde te ayudaremos a explorar las mejores ideas para que tu nuevo software potencie tu negocio lo máximo posible.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="text-center text-md-left">
                                <img src="/design_thinking.png" alt="" class="icon icon-lg flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Design Thinking</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Te ayudamos a entender y definir los problemas de tu negocio. Y luego a pensar y validar soluciones para estos. <br />
                                        <br />
                                        Design Thinking es una metodología de diseño de soluciones, permite explorar ideas para poder validarlas y/o mejorarlas con bajo costo y de forma temprana.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="text-center text-md-left">
                                <img src="/finance_engineering.png" alt="" class="icon icon-lg flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Optimización De Negocios</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Analizamos tu negocio en busca de mejoras tecnológicas de las que puedas beneficiarte. El análisis es superficial y está orientado a detectar mejoras sustanciales de bajo costo y alto impacto.<br />
                                        <br />
                                        Es ideal para pequeños negocios o emprendimientos personales.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="text-center text-md-left">
                                <img src="/information_techs.png" alt="" class="icon icon-lg flex-shrink-0 mb-1" />
                                <div>
                                    <h5 class="h4 mb-2 mt-2 font-weight-bold text-center text-md-left">Sistemas De Información</h5>
                                    <p class="text-center text-md-left pr-md-2">
                                        Análisis exhaustivo de la Unidad Estratégica de tu Negocio (UEN). Este es un estudio mucho más profundo que la Optimización de Negocio. Se busca una mejora sustancial de la estrategia de negocio de tu empresa, analizando: sistema de creencias, estrategia genérica, análisis de fuerzas de Porter, análisis de la Cadena de Valor, posición en TI/SI, análisis FODA, análisis ITSGA, identificación de ITSAs <br />
                                        <br />
                                        Este producto está pensado para medianos o grandes negocios.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </Fragment >
    );
}

export default Header;
