import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FinanzasPersonales from "./pages/FinanzasPersonales";
import AdopcionMascotas from "./pages/AdopcionMascotas";
import GestionEmpresarial from "./pages/GestionEmpresarial";

const App = () => {
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
