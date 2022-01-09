import footerStyles from "./Footer.module.scss";

const Footer = () => {
    return <div className={footerStyles.footer}>Copyright © {new Date().getFullYear()} SkollARS Software Development</div>;
};

export default Footer;
