import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faChalkboardTeacher, faPersonPraying, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-card">
            <FontAwesomeIcon icon={faUserGraduate} className="fas" />
            <h3>200+</h3>
            <p>Students</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="fas" />
            <h3>50+</h3>
            <p>Expert Teachers</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faPersonPraying} className="fas" />
            <h3>2</h3>
            <p>Religious Teachings</p>
          </div>
          <div className="stat-card">
            <FontAwesomeIcon icon={faTrophy} className="fas" />
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
