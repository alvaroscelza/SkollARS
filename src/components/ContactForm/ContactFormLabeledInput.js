import styles from "./ContactFormLabeledInput.module.scss";

const ContactFormLabeledInput = ({ value, label_text, field_name, input_type, onChange }) => {
    let input_html = build_input_html(input_type, value, field_name, onChange);

    return (
        <div className={`${styles["form-group"]}`}>
            <label htmlFor={field_name}>
                <span>{label_text}:</span>
                <span style={{ color: "#8a0303" }}>*</span>
            </label>
            {input_html}
        </div>
    );
};

const build_input_html = (input_type, value, field_name, onChange) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return input_type === "textarea" ? (
        <textarea 
            className={`${styles.textarea} ${styles["form-control"]}`} 
            name={field_name} 
            value={value} 
            onChange={handleChange}
            required 
        />
    ) : (
        <input 
            type={input_type} 
            className={styles["form-control"]} 
            name={field_name} 
            value={value} 
            onChange={handleChange}
            required 
        />
    );
};

export default ContactFormLabeledInput;
