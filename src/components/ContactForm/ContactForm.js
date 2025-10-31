import React, { useEffect, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import contactFormStyles from "./ContactForm.module.scss";
import { emailConfig } from "../../config/emailConfig";
import Section from "../Section";

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
        
        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.topic,
                message: formData.message,
                to_email: 'skollars.software.development@gmail.com'
            };

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
        <Section id="contacto" backgroundColor="gray">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Conectemos.</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Por favor, rellene el siguiente formulario, y nos pondremos en contacto.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                    O escríbanos a <a href="mailto:skollars.software.development@gmail.com" className="text-skollars-accent hover:text-red-900 underline">skollars.software.development@gmail.com</a>
                </p>
                <form ref={form} className="space-y-6" onSubmit={processForm}>
                    <div>
                        <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">Name:*</label>
                        <input 
                            type="text" 
                            id="name" 
                            required 
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">Email:*</label>
                        <input 
                            type="email" 
                            id="email" 
                            required 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700 mb-1">Asunto:*</label>
                        <input 
                            type="text" 
                            id="subject" 
                            required 
                            value={formData.topic}
                            onChange={(e) => handleInputChange('topic', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-1">Mensaje:*</label>
                        <textarea 
                            id="message" 
                            rows="4" 
                            required 
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary-gradient font-semibold shadow-md mt-4" disabled={isLoading}>
                        {isLoading ? "Enviando..." : "Enviar Mensaje"}
                    </button>
                    {showTooltip ? <ToolTip message={submitResult} hideFunction={setShowTooltip} /> : null}
                </form>
            </div>
        </Section>
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