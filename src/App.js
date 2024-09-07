import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Buyer from "./pages/Buyer";
import Farmer from "./pages/Farmer";
import SupplyChain from "./pages/SupplyChain";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us component */}
        </Routes>
        <main>
        {/* Other main content */}
        <ContactUs />
      </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
