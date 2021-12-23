import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vk007nc', 'contact_form', form.current, process.env.EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                    <form ref={form} id="contact-form" className="hs-form" onSubmit={sendEmail} >
                        <div className="form-group text-left">
                            <label htmlFor="name">
                                <span>Nombre:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="email">
                                <span>Email:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="topic">
                                <span>Asunto:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="text" className="form-control" id="topic" required />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="meesage">
                                <span>Mensaje:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <textarea className="form-control" id="meesage" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
