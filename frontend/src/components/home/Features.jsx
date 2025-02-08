import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap, 
  faUserGraduate, 
  faChalkboardTeacher, 
  faUsers, 
  faCalendarAlt, 
  faArrowRight 
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Features</h2>
          <p>Discover what makes Higher Career Academy special</p>
        </div>

        <div className="features-grid">
          {/* Academic Management */}
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faGraduationCap} className="fas" />
            </div>
            <h3>Academic Management</h3>
            <p>Comprehensive course management, grading systems, and academic tracking</p>
          </div>

          {/* Student Portal */}
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faUserGraduate} className="fas" />
            </div>
            <h3>Student Portal</h3>
            <p>Parents can access grades, schedules, and attendance of student</p>
            <a href="/parent-register" className="feature-link">
              Sign up today <FontAwesomeIcon icon={faArrowRight} className="fas" />
            </a>
          </div>

          {/* Teacher Dashboard */}
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="fas" />
            </div>
            <h3>Teacher Dashboard</h3>
            <p>Tools for attendance, grading, and student performance tracking</p>
            <a href="/teacher-register" className="feature-link">
              Get Started <FontAwesomeIcon icon={faArrowRight} className="fas" />
            </a>
          </div>

          {/* Parent Access */}
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faUsers} className="fas" />
            </div>
            <h3>Parent Access</h3>
            <p>Real-time updates on student progress and school communications</p>
            <a href="/parent-register" className="feature-link">
              Get Started <FontAwesomeIcon icon={faArrowRight} className="fas" />
            </a>
          </div>

          {/* Event Management */}
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faCalendarAlt} className="fas" />
            </div>
            <h3>Event Management</h3>
            <p>Stay updated with school events, sports, and extracurricular activities</p>
            <Link to="/#announcements-section" className="feature-link">
              Check for updates <FontAwesomeIcon icon={faArrowRight} className="fas" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
