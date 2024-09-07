// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>&copy; {new Date().getFullYear()} AgroMerchant. All rights reserved.</p>
//       <div className="social-links">
//         <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
//         <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
//         <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React, { useState } from "react";
// import "./Footer.css";

// const Footer = () => {
//   // Form state management
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, e.g., send data to an API
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <>
//       <section className="contact-us">
//         <div className="contact-details">
//           <h2>Contact Us</h2>
          
//           {/* Dynamic location with map */}
//           <div className="map">
//             <iframe
//               title="AgroMerchant Location"
//             //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9195929511675!2d144.96315791547427!3d-37.81362797975125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e0d28197caa!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1600259048299!5m2!1sen!2sau"
//             //   width="100%"
//             //   height="250"
//             //   frameBorder="0"
//             //   allowFullScreen=""
//             //   aria-hidden="false"
//             //   tabIndex="0"
           
            
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5707079815164!2d75.86519037548926!3d22.67269762947342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd837364b765%3A0xc3f41805d8726d0!2sIPS%20Academy!5e0!3m2!1sen!2sin!4v1694089864080!5m2!1sen!2sin"
//   width="600"
//   height="450"

//   allowfullscreen=""
//   loading="lazy"
//   aria-hidden="false"
//     tabIndex="0"
//   >
// </iframe>

//           </div>

//           <p><strong>Location:</strong> ips academy indore</p>
//           <p><strong>Email:</strong> support@agromerchants.com</p>
//           <p><strong>Call:</strong> +91 XXXXXXXXXX</p>
//         </div>

//         {/* Form section */}
//         <div className="contact-form">
//           <form onSubmit={handleSubmit}>
//             <label>Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <label>Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <label>Subject</label>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />

//             <label>Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </section>

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} AgroMerchant. All rights reserved.</p>
//         <div className="social-links">
//         <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
//          <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
//          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a> 
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



// import React, { useState } from "react";
// import "./Footer.css";
// //import logo from './path/to/logo.png'; // Update with your logo path

// const Footer = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <>
//       <section className="contact-us">
//         <div className="contact-details">
//           <h2>Contact Us</h2>
//           <div className="map">
//             <iframe
//               title="AgroMerchant Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5707079815164!2d75.86519037548926!3d22.67269762947342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd837364b765%3A0xc3f41805d8726d0!2sIPS%20Academy!5e0!3m2!1sen!2sin!4v1694089864080!5m2!1sen!2sin"
//               width="100%"
//               height="250"
//               frameBorder="0"
//               allowFullScreen=""
//               loading="lazy"
//               aria-hidden="false"
//               tabIndex="0"
//             ></iframe>
//           </div>
//           <p><strong>Location:</strong> IPS Academy Indore</p>
//           <p><strong>Email:</strong> <a href="mailto:support@agromerchants.com">support@agromerchants.com</a></p>
//           <p><strong>Call:</strong> <a href="tel:+917859807007">+91 78598 07007</a></p>
//         </div>

//         <div className="contact-form">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Your Name</label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="email">Your Email</label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="subject">Subject</label>
//             <input
//               id="subject"
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-top">
//           <img src="https://img.freepik.com/premium-vector/agriculture-farming-with-tractor-with-cultivator-logo-design_1277164-1773.jpg?w=740" alt="AgroMerchant Logo" className="footer-logo" />
//           <div className="footer-info">
//             <p><strong>A-5, The First,</strong></p>
//             <p>Nr. ITC Narmada, Vastrapur</p>
//             <p>Ahmedabad, Gujarat, India – 380015</p>
//             <p><strong>Phone:</strong> <a href="tel:+917859807007">+91 78598 07007</a></p>
//             <p><strong>Email:</strong> <a href="mailto:support@agromerchants.com">support@agromerchants.com</a></p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <div className="useful-links">
//             <h3>Useful Links</h3>
//             <a href="/">Home</a>
//             <a href="/buyer">Buyer</a>
//             <a href="/farmer">Farmer</a>
//             <a href="/supply-chain">Supply Chain</a>
//             <a href="/about-us">About Us</a>
//           </div>
//           <div className="social-links">
//             <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
//             <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
//           </div>
//           <p>&copy; {new Date().getFullYear()} AgroMerchants. All Rights Reserved.</p>
//           <p>Designed with ❤️ by AgroMerchant Team</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;




//nayi baat

// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//   <div className="footer-top">
//     <img src="https://img.freepik.com/premium-vector/agriculture-farming-with-tractor-with-cultivator-logo-design_1277164-1773.jpg?w=740" alt="AgroMerchant Logo" className="footer-logo" />
//     <div className="footer-info">
//       <p><strong>A-5, The First,</strong></p>
//       <p>Nr. ITC Narmada, Vastrapur</p>
//       <p>Indore, MadhyaPradesh, India – 380015</p>
//       <p><strong>Phone:</strong> <a href="tel:+917859807007">+91 78598 07007</a></p>
//       <p><strong>Email:</strong> <a href="mailto:support@agromerchants.com">support@agromerchants.com</a></p>
//     </div>
//   </div>
//   <div className="footer-bottom">
//     <div className="useful-links">
//       <h3>Useful Links</h3>
//       <a href="/">Home</a>
//       <a href="/buyer">Buyer</a>
//       <a href="/farmer">Farmer</a>
//       <a href="/supply-chain">Supply Chain</a>
//       <a href="/about-us">About Us</a>
//     </div>
//     <div className="social-links">
//       <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
//       <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">Twitter</a>
//       <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
//     </div>
//     <p>&copy; {new Date().getFullYear()} AgroMerchants. All Rights Reserved.</p>
//     <p>Designed with ❤️ by AgroMerchant Team</p>
//   </div>
// </footer>

//   );
// };

// export default Footer;




import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
//import logoImg from "../../assets/agromerchant_logo.png";

const FooterLinks = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact">
          <div className="contact-icon">
            <FaFacebookF className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
            <FaYoutube className="i" />
          </div>

          <h2>हमारे साथ जुड़े रहें!</h2>

          <a href="#contact" className="btn btn-dark">
            संपर्क करें!
          </a>
        </div>
      </section>
      {/* Footer Links */}
      <section className="footer-section">
        <div className="container footer">
          <div className="footer-logo">
            <img src="https://img.freepik.com/premium-vector/agriculture-farming-with-tractor-with-cultivator-logo-design_1277164-1773.jpg?w=740" alt="AgroMerchant Logo" className="footer-logo" alt="AgroMerchant Logo" />
          </div>

          <div className="footer-menu">
            <p className="link-heading">Features</p>
            <ul className="nav-ul footer-links">
              <li><a href="#">Product Catalog</a></li>
              <li><a href="#">Farmer Support</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Resources</p>
            <ul className="nav-ul footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Company</p>
            <ul className="nav-ul footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-menu">
            <p className="link-heading">Legal</p>
            <ul className="nav-ul footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLinks;
