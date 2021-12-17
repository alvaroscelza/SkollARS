import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     emailjs.init('YOUR_USER_ID');
    // });

    return (
        <section class="pt-0 bg-white">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-12">
                        <h2 className="h2 text-dark">Conectemos.</h2>
                        <p>Por favor llena el siguiente formulario, y nos pondremos en contacto.</p>
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="row text-center justify-content-center">
                    <form id="contact-form" className="hs-form" action="mailto:alvaroscelza@gmail.com" method="POST" encType="multipart/form-data" >
                        <div class="form-group text-left">
                            <label for="name">
                                <span>Nombre:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="text" class="form-control" id="name" required />
                        </div>
                        <div class="form-group text-left">
                            <label for="email">
                                <span>Email:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="email" class="form-control" id="email" required />
                        </div>
                        <div class="form-group text-left">
                            <label for="topic">
                                <span>Asunto:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <input type="text" class="form-control" id="topic" required />
                        </div>
                        <div class="form-group text-left">
                            <label for="meesage">
                                <span>Mensaje:</span>
                                <span style={{ color: "#8a0303" }}>*</span>
                            </label>
                            <textarea class="form-control" id="meesage" required />
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
