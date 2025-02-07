import "../styles/Footer.css";
// import "../JavaScript/footer.js";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as fasEnvelope, faPhone as fasPhone, faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    useEffect(() => {
        const footer = document.querySelector('.main-footer');
        const timer = setTimeout(() => {
          footer.classList.add('visible');
        }, 1300); // Delay of 1.3 seconds
    
        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [])
  return (
    <>
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HCA</h3>
            <p>Empowering education through technology</p>
            <div className="social-links">
              <a href="https://www.facebook.com/highercareerschool/">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#0000ff", fontSize: "24px" }} />
              </a>
              <a href="https://www.youtube.com/channel/UCpxS5hLLn-E5Iz7Br-5IgTg">
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000", fontSize: "24px" }} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li><FontAwesomeIcon icon={fasEnvelope} /> highercareers@gmail.com</li>
              <li><FontAwesomeIcon icon={fasPhone} /> 0777 343 414 / 0776 578 657</li>
              <li><FontAwesomeIcon icon={fasMapMarkerAlt} /> V976+PR5, Amaani, mkabala na Amani stadium, Dunga Kiembeni, Zanzibar</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 HCA. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
