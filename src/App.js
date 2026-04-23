import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// PAGES
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Connect from "./pages/Connect";
import Home from "./components/Home";
import Footer from "./components/Footer";




// ✅ MAIN APP
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;