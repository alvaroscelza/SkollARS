const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo header-logo-dark" alt="SkollARS" src="/named_logo.png" />
        </a>
        <div id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="h5" href="/">
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
