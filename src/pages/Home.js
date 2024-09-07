import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <h2>Tech Enabled Supply Chain for Indian Agriculture</h2>
        <p>
          Empowering small and marginal farmers to sell produce directly to
          businesses with PAN India presence.
        </p>
        <div className="stats">
          <div><h3>1</h3><p>Region Covered</p></div>
          <div><h3>2500+</h3><p>Farmers</p></div>
          <div><h3>200+</h3><p>Villages Covered</p></div>
          <div><h3>12500 Km</h3><p>Distance Travelled</p></div>
        </div>
      </section>
      <section className="pillars">
        <h3>Pillars of Our Supply Chain</h3>
        <div className="pillar-cards">
          <div className="pillar-card">
            <h4>Integrated</h4>
            <p>End-to-end on-ground supply chain management, from farm to the buyer’s doorstep.</p>
          </div>
          <div className="pillar-card">
            <h4>Transparent</h4>
            <p>Digitally enabled to build trust in a disorganized system.</p>
          </div>
          <div className="pillar-card">
            <h4>Technology Driven</h4>
            <p>0% use of paper with each step digitally captured.</p>
          </div>
          <div className="pillar-card">
            <h4>Standardized</h4>
            <p>Enabling PAN India multi-region coverage both on and off-ground.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
