import styles from "./ContactFormLabeledInput.module.scss";

const ContactFormLabeledInput = ({ value, label_text, field_name, input_type }) => {
    let input_html = build_input_html(input_type, value, field_name);

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

const build_input_html = (input_type, value, field_name) => {
    return input_type === "textarea" ? (
        <textarea className={`${styles.textarea} ${styles["form-control"]}`} name={field_name} defaultValue={value} required />
    ) : (
        <input type={input_type} className={styles["form-control"]} name={field_name} defaultValue={value} required />
    );
};

export default ContactFormLabeledInput;
