import React from "react";
import './AboutUs.css'; // Optional for any custom styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-intro">
        <h2>Bringing trust and transparency to Indian agriculture with digitisation</h2>
        <p>
          Since as far back as one can remember, information and commodity flow in rural India have been dominated by players who thrived on the opaqueness, inconsistency, and fragmentation of the ecosystem.
          Technology, while making rapid strides in the everyday life of an urban dweller, has had little to no impact on the rural economy.
        </p>
        <p>
          However, AgroMerchants, we believe that with millions of rural internet users coming online for the first time on mobile, it is time they reap its benefits. We are building this future with our fully integrated
          and tech-enabled supply chain that enables farmers PAN India to earn more by selling their produce directly to businesses.
        </p>
      </section>

      <section className="about-us-stats">
        <ul>
          <li><strong>2024:</strong> Founded</li>
          <li><strong>10+:</strong> Team Strength</li>
          <li><strong>200+:</strong> Villages Covered</li>
          <li><strong>12500 Km:</strong> Distance Travelled</li>
        </ul>
      </section>

      <section className="empowering-farmers-buyers">
        {/* Empowering Farmers Section */}
        <div className="empowering-section">
          <div className="empowering-image">
            <img src="https://img.freepik.com/premium-photo/young-indian-farmer-green-agriculture-field_75648-6138.jpg?w=900" alt="Empowering Farmers" />
          </div>
          <div className="empowering-content">
            <h3>Empowering Farmers</h3>
            <p>
              With AgroMerchants, they have full control on the sale of their produce as no middlemen are involved in the entire process. Pricing is transparent and payments are 100% digital at the time of sale. 
              There is no longer a feeling of exploitation as they are in charge of the entire crop selling process.
            </p>
          </div>
        </div>

        {/* Empowering Buyers Section */}
        <div className="empowering-section reverse">
          <div className="empowering-content">
            <h3>Empowering Buyers</h3>
            <p>
              They can rely on AgroMerchants for accurate quality assessments and consistent availability of produce. 100% traceability on the crop's origins and route are also provided to bring about further trust
              and transparency in the crop procurement process.
            </p>
          </div>
          <div className="empowering-image">
            <img src="https://img.freepik.com/premium-photo/young-indian-banker-using-laptop-dairy-farm_75648-1600.jpg?w=900" alt="Empowering Buyers" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
