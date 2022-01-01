import { Fragment } from "react/cjs/react.production.min";
import ContactForm from "./ContactForm";
import Product from "./Product";

const Header = () => {
  return (
    <Fragment>
      <section className="pt-0 bg-white">
        <div className="height-40 py-3 py-md-4">
          <div className="container">
            <div className="row text-center justify-content-center">
              <div className="col-12 mt-5">
                <h1 className="text-dark mb-5">SkollARS Software Development</h1>
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
      <section className="bg-white pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <Product
              image_file_name="/one_gear.png"
              title="Soluciones Estándar"
              text={
                <Fragment>
                  Software funcional, listo para usarse. Soporta pequeñas customizaciones. <br />
                  <br />
                  Principalmente software de gestión: RRHH, Finanzas, Inventario, Punto de Venta, entre otros.
                </Fragment>
              }
            />
            <Product
              image_file_name="/two_gears.png"
              title="Soluciones Prediseñadas"
              text={
                <Fragment>
                  Software semi funcional para modelos de negocios estándar. Soporta customizaciones medianas. <br />
                  <br />
                  Software que suele requerir ciertas customizaciones para quedar funcional: e-commerce, blogs, landing
                  pages.
                </Fragment>
              }
            />
            <Product
              image_file_name="/three_gears.png"
              title="Desarrollo A Medida"
              text={
                <Fragment>
                  Desarrollo de Software completamente a medida. No importa lo que necesites, lo construiremos para ti,
                  con las funcionalidades que tu quieres y de laimport Product from './Product'; forma que tu quieres.{" "}
                  <br />
                  <br />
                  Incluye ingeniería de requerimientos, donde te ayudaremos a explorar las mejores ideas para que tu
                  nuevo software potencie tu negocio lo máximo posible.
                </Fragment>
              }
            />
            <Product
              image_file_name="/design_thinking.png"
              title="Design Thinking"
              text={
                <Fragment>
                  Te ayudamos a entender y definir los problemas de tu negocio. Y luego a pensar y validar soluciones
                  para estos. <br />
                  <br />
                  Design Thinking es una metodología de diseño de soluciones, permite explorar ideas para poder
                  validarlas y/o mejorarlas con bajo costo y de forma temprana.
                </Fragment>
              }
              icon_size="large"
            />
            <Product
              image_file_name="/finance_engineering.png"
              title="Optimización De Negocios"
              text={
                <Fragment>
                  Analizamos tu negocio en busca de mejoras tecnológicas de las que puedas beneficiarte. El análisis es
                  superficial y está orientado a detectar mejoras sustanciales de bajo costo y alto impacto.
                  <br />
                  <br />
                  Es ideal para pequeños negocios o emprendimientos personales.
                </Fragment>
              }
              icon_size="large"
            />
            <Product
              image_file_name="/information_techs.png"
              title="Sistemas De Información"
              text={
                <Fragment>
                  Análisis exhaustivo de la Unidad Estratégica de tu Negocio (UEN). Este es un estudio mucho más
                  profundo que la Optimización de Negocio. Se busca una mejora sustancial de la estrategia de negocio de
                  tu empresa, analizando: sistema de creencias, estrategia genérica, análisis de fuerzas de Porter,
                  análisis de la Cadena de Valor, posición en TI/SI, análisis FODA, análisis ITSGA, identificación de
                  ITSAs <br />
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
