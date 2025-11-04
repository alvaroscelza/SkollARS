import ContactForm from "../ContactForm/ContactForm";

const ContactFormSection = ({
    buttonText = "Enviar Mensaje",
    title = "Conectemos.",
    description = "Por favor, rellene el siguiente formulario, y nos pondremos en contacto.",
    showEmailLink = true
}) => {
    return (
        <section id="contacto" className="py-20 bg-white border-t border-gray-200">
            <ContactForm
                buttonText={buttonText}
                title={title}
                description={description}
                showEmailLink={showEmailLink}
            />
        </section>
    );
};

export default ContactFormSection;

