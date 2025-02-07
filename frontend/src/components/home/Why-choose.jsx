import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faUserTie, 
  faBuilding, 
  faChild, 
  faUserEdit, 
  faHandsHelping, 
} from "@fortawesome/free-solid-svg-icons";

const WhyChoose = () => {
  return (
    <div>
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose HCA</h2>
            <p>Discover the advantages that set us apart</p>
          </div>

          <div className="why-choose-grid">
            {/* Academic Excellence */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faStar} className="fas fa-star" />
              </div>
              <h3>Academic Excellence</h3>
              <p>Consistently high academic standards and outstanding achievement records</p>
            </div>

            {/* Expert Faculty */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faUserTie} className="fas fa-user-tie" />
              </div>
              <h3>Expert Faculty</h3>
              <p>Experienced educators dedicated to nurturing student potential</p>
            </div>

            {/* Modern Facilities */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBuilding} className="fas fa-building" />
              </div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art infrastructure and learning environments</p>
            </div>

            {/* Holistic Development */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faChild} className="fas fa-child" />
              </div>
              <h3>Holistic Development</h3>
              <p>Focus on academic, social, and personal growth</p>
            </div>

            {/* Personalized Learning */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faUserEdit} className="fas fa-user-edit" />
              </div>
              <h3>Personalized Learning</h3>
              <p>Tailored learning experiences designed to meet individual student needs</p>
            </div>

            {/* Strong Community Engagement */}
            <div className="why-choose-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faHandsHelping} className="fas fa-hands-helping" />
              </div>
              <h3>Strong Community Engagement</h3>
              <p>Building meaningful connections with students, parents, and the community</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
