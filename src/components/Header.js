const Header = () => {
    return (
        <nav className="navbar navbar--primary navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className="logo header-logo-dark" alt="SkollARS" src="/named_logo.png" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="main-nav" className="collapse navbar-collapse justify-content-end navMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="h5" href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;