import { Fragment } from "react/cjs/react.production.min";
import ContactForm from "./ContactForm";
import Product from "./Product";
import one_gear from "../images/one_gear.png";
import two_gears from "../images/two_gears.png";
import three_gears from "../images/three_gears.png";
import design_thinking from "../images/design_thinking.png";
import finance_engineering from "../images/finance_engineering.png";
import information_techs from "../images/information_techs.png";

const Header = () => {
    return (
        <Fragment>
            <section className="pt-0">
                <div className="height-40 py-3 py-md-4">
                    <div className="container">
                        <div className="row text-center justify-content-center">
                            <div className="col-12 mt-5">
                                <h1 className="text-dark mb-5">SkollARS Software Development</h1>
                            </div>
                            <div className="col-md-12 col-lg-7 mb-3">
                                <h2 className="h2 text-dark mb-5">
                                    No importa lo que necesites, nosotros podemos construirlo.
                                </h2>
                            </div>
                            <div className="col-12 justify-content-center">
                                <a
                                    className="btn btn-primary btn-lg m-2 aos-init aos-animate"
                                    href="#contact-form"
                                    data-aos="fade"
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <Product
                            image={one_gear}
                            title="Soluciones Estándar"
                            text={
                                <Fragment>
                                    Software funcional, listo para usarse. Soporta pequeñas customizaciones. <br />
                                    <br />
                                    Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta,
                                    entre otros.
                                </Fragment>
                            }
                        />
                        <Product
                            image={two_gears}
                            title="Soluciones Prediseñadas"
                            text={
                                <Fragment>
                                    Software semi funcional para modelos de negocios estándar. Soporta customizaciones
                                    medianas. <br />
                                    <br />
                                    Software que suele requerir ciertas customizaciones para quedar funcional:
                                    e-commerce, blogs, landing pages.
                                </Fragment>
                            }
                        />
                        <Product
                            image={three_gears}
                            title="Desarrollo A Medida"
                            text={
                                <Fragment>
                                    Desarrollo de Software completamente a medida. No importa lo que necesites, lo
                                    construiremos para ti, con las funcionalidades que tu quieres y de la forma que tu
                                    quieres. <br />
                                    <br />
                                    Incluye ingeniería de requerimientos, donde te ayudaremos a explorar las mejores
                                    ideas para que tu nuevo software potencie tu negocio lo máximo posible.
                                </Fragment>
                            }
                        />
                        <Product
                            image={design_thinking}
                            title="Design Thinking"
                            text={
                                <Fragment>
                                    Te ayudamos a entender y definir los problemas de tu negocio. Y luego a pensar y
                                    validar soluciones para estos. <br />
                                    <br />
                                    Design Thinking es una metodología de diseño de soluciones, permite explorar ideas
                                    para poder validarlas y/o mejorarlas con bajo costo y de forma temprana.
                                </Fragment>
                            }
                            icon_size="large"
                        />
                        <Product
                            image={finance_engineering}
                            title="Optimización De Negocios"
                            text={
                                <Fragment>
                                    Analizamos tu negocio en busca de mejoras tecnológicas de las que puedas
                                    beneficiarte. El análisis es superficial y está orientado a detectar mejoras
                                    sustanciales de bajo costo y alto impacto. <br />
                                    <br />
                                    Es ideal para pequeños negocios o emprendimientos personales.
                                </Fragment>
                            }
                            icon_size="large"
                        />
                        <Product
                            image={information_techs}
                            title="Sistemas De Información"
                            text={
                                <Fragment>
                                    Análisis exhaustivo de la Unidad Estratégica de tu Negocio (UEN). Este es un estudio
                                    mucho más profundo que la Optimización de Negocio. Se busca una mejora sustancial de
                                    la estrategia de negocio de tu empresa, analizando: sistema de creencias, estrategia
                                    genérica, análisis de fuerzas de Porter, análisis de la Cadena de Valor, posición en
                                    TI/SI, análisis FODA, análisis ITSGA, identificación de ITSAs. <br />
                                    <br />
                                    Este producto está pensado para medianos o grandes negocios.
                                </Fragment>
                            }
                            icon_size="large"
                        />
                    </div>
                </div>
            </section>
            <ContactForm />
        </Fragment>
    );
};

export default Header;
