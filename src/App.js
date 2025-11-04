import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageView } from "./utils/analytics";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FinanzasPersonales from "./pages/FinanzasPersonales";
import AdopcionMascotas from "./pages/AdopcionMascotas";
import GestionEmpresarial from "./pages/GestionEmpresarial";

const App = () => {
    const location = useLocation();

    useEffect(() => {
        trackPageView(location.pathname + location.search);
        if (location.hash) {
            const scrollToElement = () => {
                const element = document.querySelector(location.hash);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };
            setTimeout(scrollToElement, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos/finanzas-personales" element={<FinanzasPersonales />} />
                <Route path="/productos/adopcion-mascotas" element={<AdopcionMascotas />} />
                <Route path="/productos/gestion-empresarial" element={<GestionEmpresarial />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
