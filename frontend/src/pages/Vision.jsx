import "../styles/Vision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faLightbulb, faBalanceScale, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Vision = () => {
  return (
    <div className="vision-wrapper">
      <div className="vision-container">
        
        {/* Mission */}
        <div className="vision-card">
          <div className="vision-icon mission">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <div className="vision-content">
            <h2>MISSION</h2>
            <p>
              Quality education and discipline are our priority. We focus on shaping students into responsible and ethical individuals through a balanced approach of academics and values.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="vision-card reverse">
          <div className="vision-content">
            <h2>VISION</h2>
            <p>
              Our school strives to be among the best in education and discipline, empowering students to excel and contribute positively to society.
            </p>
          </div>
          <div className="vision-icon vision">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
        </div>

        {/* Values */}
        <div className="vision-card">
          <div className="vision-icon valuesIcon">
            <FontAwesomeIcon icon={faBalanceScale} />
          </div>
          <div className="vision-content">
            <h2>VALUES</h2>
            <p>
              We uphold values of integrity, respect, and inclusivity, fostering a community where students feel inspired to achieve their dreams.
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="vision-card reverse">
          <div className="vision-content">
            <h2>SCHOOL MOTTO</h2>
            <p>
              <strong>Education for Success:</strong> Our motto emphasizes the importance of knowledge as the foundation for achieving personal and professional goals. Through quality teaching and a disciplined environment, we prepare our students to excel in every aspect of life.
            </p>
          </div>
          <div className="vision-icon motto">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
