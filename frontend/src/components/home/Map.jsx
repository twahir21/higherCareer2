import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock, faPhone, faDirections } from "@fortawesome/free-solid-svg-icons";

const Map = () => {
  return (
    <div>
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="container">
          <div className="map-container">
            <div className="map-info">
              <h2>Find Us</h2>
              <div className="contact-details">
                <div className="info-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <address>
                    V976+PR5, Amaani <br />
                    Mkabala na Amani stadium Zanzibar <br />
                    Dunga Kiembeni
                  </address>
                </div>

                <div className="info-item">
                  <FontAwesomeIcon icon={faClock} />
                  <p>Open daily until 3:30 PM</p>
                </div>

                <div className="info-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <p>
                    <a href="tel:+255777343414">0777 343 414</a>
                  </p>
                </div>
              </div>

              {/* Inside the directions div */}
              <div className="directions">
                <h3>Get Directions:</h3>
                <a
                  href="https://www.google.com/maps/dir/-6.852042,39.2894836/higher+career+academy+location/@-6.4816381,38.9349168,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x185d29c7bd114ef7:0xdca4e8d9e0fe08ad!2m2!1d39.3621196!2d-6.1357295?entry=ttu"
                  className="directions-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDirections} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5212666361547!2d39.359545!3d-6.135729499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d29c7bd114ef7%3A0xdca4e8d9e0fe08ad!2sHigher%20Career%20Academy!5e0!3m2!1sen!2stz!4v1711004824659!5m2!1sen!2stz"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
