import named_logo from "../images/named_logo.png";
const package_json_data = require("../../package.json");

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href={package_json_data.homepage}>
          <img className="logo header-logo-dark" alt="SkollARS" src={named_logo} />
        </a>
        <div id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="h5" href={package_json_data.homepage}>
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
