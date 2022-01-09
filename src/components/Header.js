import named_logo from "../images/named_logo.png";
import headerStyles from "./Header.module.scss";
const package_json_data = require("../../package.json");

const Header = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${headerStyles.navbar}`}>
            <div className={headerStyles.container}>
                <a className="navbar-brand" href={package_json_data.homepage}>
                    <img className={headerStyles.logo} alt="SkollARS" src={named_logo} />
                </a>
                <div id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={headerStyles.a} href={package_json_data.homepage}>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
