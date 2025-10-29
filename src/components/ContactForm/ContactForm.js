import React, { useEffect, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import indexStyles from "../../index.module.scss";
import contactFormStyles from "./ContactForm.module.scss";
import ContactFormLabeledInput from "./ContactFormLabeledInput";
import { emailConfig } from "../../config/emailConfig";

const ContactForm = () => {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        topic: "",
        message: ""
    });
    const [showTooltip, setShowTooltip] = useState(false);
    const [submitResult, setSubmitResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const processForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        console.log('EmailJS Config:', emailConfig);
        console.log('Form Data:', formData);
        
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.topic,
                message: formData.message,
                to_email: 'skollars.software.development@gmail.com'
            };

            console.log('Sending email with params:', templateParams);

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams,
                emailConfig.publicKey
            );

            setSubmitResult("Mensaje enviado correctamente");
            setFormData({ name: "", email: "", topic: "", message: "" });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitResult("Error al enviar el mensaje. Inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
            setShowTooltip(true);
        }
    };

    return (
        <div className={indexStyles.container}>
            <div className="row text-center justify-content-center">
                <div className="col-12">
                    <h2 className="h2 text-dark">Conectemos.</h2>
                    <p className={indexStyles.p}>Por favor llena el siguiente formulario, y nos pondremos en contacto.</p>
                    <p className={indexStyles.p}>
                        O escríbenos a <a href="mailto: skollars.software.development@gmail.com">skollars.software.development@gmail.com</a>.
                    </p>
                </div>
            </div>
            <div className="row text-center justify-content-center">
                <form ref={form} id="contact-form" className="hs-form" onSubmit={processForm}>
                    <ContactFormLabeledInput 
                        value={formData.name} 
                        label_text="Name" 
                        field_name="name" 
                        input_type="text" 
                        onChange={(value) => handleInputChange('name', value)}
                    />
                    <ContactFormLabeledInput 
                        value={formData.email} 
                        label_text="Email" 
                        field_name="email" 
                        input_type="email" 
                        onChange={(value) => handleInputChange('email', value)}
                    />
                    <ContactFormLabeledInput 
                        value={formData.topic} 
                        label_text="Asunto" 
                        field_name="topic" 
                        input_type="text" 
                        onChange={(value) => handleInputChange('topic', value)}
                    />
                    <ContactFormLabeledInput 
                        value={formData.message} 
                        label_text="Mensaje" 
                        field_name="message" 
                        input_type="textarea" 
                        onChange={(value) => handleInputChange('message', value)}
                    />
                    <div>
                        <button type="submit" className={indexStyles.button} disabled={isLoading}>
                            {isLoading ? "Enviando..." : "Enviar Mensaje"}
                        </button>
                        {showTooltip ? <ToolTip message={submitResult} hideFunction={setShowTooltip} /> : null}
                    </div>
                </form>
            </div>
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
