import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import ContactFormLabeledInput from "./ContactFormLabeledInput";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    const [showTooltip, setShowTooltip] = useState(true);
    const form = useRef();

    const processForm = (e) => {
        e.preventDefault();
        sendEmail();
    };

    const sendEmail = () => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    setName("");
                    setEmail("");
                    setTopic("");
                    setMessage("");
                    setSubmitResult("Email enviado exitosamente. Gracias!");
                    setShowTooltip(true);
                },
                (error) => {
                    setSubmitResult(
                        "Ha ocurrido un error con el envío de email. Por favor, ¿podrías escribirnos a <a href='mailto: skollars.software.development@gmail.com'>skollars.software.development@gmail.com</a> y notificarnos del error?"
                    );
                    setShowTooltip(true);
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
                        <p>
                            O escríbenos a <a href="mailto: skollars.software.development@gmail.com">skollars.software.development@gmail.com</a>.
                        </p>
                    </div>
                </div>
                <div className="row text-center justify-content-center">
                    <form ref={form} id="contact-form" className="hs-form" onSubmit={processForm}>
                        <ContactFormLabeledInput value={name} label_text="Name" field_name="name" input_type="text" />
                        <ContactFormLabeledInput value={email} label_text="Email" field_name="email" input_type="text" />
                        <ContactFormLabeledInput value={topic} label_text="Asunto" field_name="topic" input_type="text" />
                        <ContactFormLabeledInput value={message} label_text="Mensaje" field_name="message" input_type="textarea" />
                        <button type="submit" className="btn btn-primary">
                            Enviar Mensaje
                        </button>
                        {showTooltip ? <ToolTip message={submitResult} hideFunction={setShowTooltip} /> : null}
                    </form>
                </div>
            </div>
        </section>
    );
};

const ToolTip = ({ message, hideFunction }) => {
    // useEffect(() => {
    //     setTimeout(hideFunction, 3000);
    // });

    return (
        <div className="tooltip-container">
            &nbsp;
            <span>
                Ha ocurrido un error con el envío de email. Por favor, ¿podrías escribirnos a <br />
                <a href="mailto: skollars.software.development@gmail.com">skollars.software.development@gmail.com</a> y notificarnos del error?
            </span>
        </div>
    );
};

export default ContactForm;
