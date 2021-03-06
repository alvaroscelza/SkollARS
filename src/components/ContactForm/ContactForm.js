import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import ContactFormLabeledInput from "./ContactFormLabeledInput";
import indexStyles from "../../index.module.scss";
import contactFormStyles from "./ContactForm.module.scss";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);
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
        <div className={indexStyles.container}>
            <div className="row text-center justify-content-center">
                <div className="col-12">
                    <h2 id="contact-form" className="h2 text-dark">Servicio interrumpido.</h2>
                    <p className={indexStyles.p}>No estamos recibiendo mas proyectos, disculpe las molestias :)</p>
                    <p className={indexStyles.p}>
                        No osbtante, puedes contactarnos a <a href="mailto: skollars.software.development@gmail.com">skollars.software.development@gmail.com</a>.
                    </p>
                </div>
            </div>

            {/*<div className="row text-center justify-content-center">*/}
            {/*    <div className="col-12">*/}
            {/*        <h2 className="h2 text-dark">Conectemos.</h2>*/}
            {/*        <p className={indexStyles.p}>Por favor llena el siguiente formulario, y nos pondremos en contacto.</p>*/}
            {/*        <p className={indexStyles.p}>*/}
            {/*            O escríbenos a <a href="mailto: skollars.software.development@gmail.com">skollars.software.development@gmail.com</a>.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row text-center justify-content-center">*/}
            {/*    <form ref={form} id="contact-form" className="hs-form" onSubmit={processForm}>*/}
            {/*        <ContactFormLabeledInput value={name} label_text="Name" field_name="name" input_type="text" />*/}
            {/*        <ContactFormLabeledInput value={email} label_text="Email" field_name="email" input_type="text" />*/}
            {/*        <ContactFormLabeledInput value={topic} label_text="Asunto" field_name="topic" input_type="text" />*/}
            {/*        <ContactFormLabeledInput value={message} label_text="Mensaje" field_name="message" input_type="textarea" />*/}
            {/*        <div>*/}
            {/*            <button type="submit" className={indexStyles.button}>*/}
            {/*                Enviar Mensaje*/}
            {/*            </button>*/}
            {/*            {showTooltip ? <ToolTip message={submitResult} hideFunction={setShowTooltip} /> : null}*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    );
};

const ToolTip = ({ message, hideFunction }) => {
    useEffect(() => {
        setTimeout(hideFunction, 5000);
    });

    return (
        <div className={`${contactFormStyles["tooltip-container"]}`}>
            &nbsp;
            <span>{message}</span>
        </div>
    );
};

export default ContactForm;
