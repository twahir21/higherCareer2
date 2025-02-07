import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faClock, 
  faHeart 
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> highercareers@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> 0777 343 414 / 0776 578 657</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> V976+PR5, Amaani, Mkabala na Amani stadium, Dunga Kiembeni, Zanzibar</p>
          
          <div className="school-hours">
            <h4><FontAwesomeIcon icon={faClock} /> School Hours</h4>
            <p>Monday - Friday: 7:30 AM - 3:30 PM</p>
            <p>Saturday: 8:00 AM - 12:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          
          <h4 className="form-cta"><i>Let&apos;s Start a Conversation!</i></h4>
          
          <p className="form-message">
            <FontAwesomeIcon icon={faHeart} /> 
            <i> We value every message and typically respond within 24 hours. Your journey to excellence begins with a simple hello!</i>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
