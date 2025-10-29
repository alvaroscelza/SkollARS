// EmailJS Configuration
// Replace these values with your actual EmailJS credentials from https://dashboard.emailjs.com/admin
export const emailConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_placeholder',
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_placeholder',
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'
};
