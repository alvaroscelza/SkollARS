import React, { useEffect, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import contactFormStyles from "./ContactForm.module.scss";
import { emailConfig } from "../../config/emailConfig";

const ContactFormSimple = ({ title, description, buttonText = "Pedir Asesoramiento" }) => {
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
            <button type="submit" className="btn-primary-gradient font-semibold shadow-md mt-4 px-8 py-3" disabled={isLoading}>
                {isLoading ? "Enviando..." : buttonText}
            </button>
            {showTooltip ? <ToolTip message={submitResult} hideFunction={setShowTooltip} /> : null}
        </form>
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

export default ContactFormSimple;
