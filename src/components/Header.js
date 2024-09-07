
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="https://img.freepik.com/premium-vector/agriculture-farming-with-tractor-with-cultivator-logo-design_1277164-1773.jpg?w=740" alt="Logo" /> {/* Replace with your logo path */}
//         <h1>AgroMerchant</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/buyer">Buyer</Link></li>
//           <li><Link to="/farmer">Farmer</Link></li>
//           <li><Link to="/supply-chain">Supply Chain</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/agriculture-farming-with-tractor-with-cultivator-logo-design_1277164-1773.jpg?w=740" alt="Logo" />
        <h1>AgroMerchant</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buyer">Buyer</Link></li>
          <li><Link to="/farmer">Farmer</Link></li>
          <li><Link to="/supply-chain">Supply Chain</Link></li>
          <li><Link to="/about-us">About Us</Link></li> {/* New About Us link */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;


