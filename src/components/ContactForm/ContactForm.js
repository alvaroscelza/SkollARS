import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ContactFormLabeledInput from "./ContactFormLabeledInput";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="pt-0 bg-white">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-12">
                        <h2 className="h2 text-dark">Conectemos.</h2>
                        <p>Por favor llena el siguiente formulario, y nos pondremos en contacto.</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="row text-center justify-content-center">
                    <form ref={form} id="contact-form" className="hs-form" onSubmit={sendEmail}>
                        <ContactFormLabeledInput label_text="Name" field_name="name" input_type="text" />
                        <ContactFormLabeledInput label_text="Email" field_name="email" input_type="text" />
                        <ContactFormLabeledInput label_text="Asunto" field_name="topic" input_type="text" />
                        <ContactFormLabeledInput label_text="Mensaje" field_name="message" input_type="textarea" />
                        <button type="submit" className="btn btn-primary">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
