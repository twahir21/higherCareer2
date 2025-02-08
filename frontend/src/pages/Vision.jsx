import "../styles/Vision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faLightbulb, faBalanceScale, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Vision = () => {
  return (
    <div className="wrapper-vision">
      <div className="container">
        {/* Mission Card */}
        <div className="card">
          <div className="icon mission">
            <FontAwesomeIcon icon={faBullseye} />
          </div>
          <div className="content">
            <h2>MISSION</h2>
            <p>
              Quality education and discipline are our priority. We focus on shaping students into responsible and ethical individuals through a balanced approach of academics and values.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="card reverse">
          <div className="content">
            <h2>VISION</h2>
            <p>
              Our school strives to be among the best in education and discipline, empowering students to excel and contribute positively to society.
            </p>
          </div>
          <div className="icon vision">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
        </div>

        {/* Values Card */}
        <div className="card">
          <div className="icon values">
            <FontAwesomeIcon icon={faBalanceScale} />
          </div>
          <div className="content">
            <h2>VALUES</h2>
            <p>
              We uphold values of integrity, respect, and inclusivity, fostering a community where students feel inspired to achieve their dreams.
            </p>
          </div>
        </div>

        {/* Motto Card */}
        <div className="card reverse">
          <div className="content">
            <h2>SCHOOL MOTTO</h2>
            <p>
              <strong>Education for Success:</strong> Our motto emphasizes the importance of knowledge as the foundation for achieving personal and professional goals. Through quality teaching and a disciplined environment, we prepare our students to excel in every aspect of life.
            </p>
          </div>
          <div className="icon motto">
            <FontAwesomeIcon icon={faGraduationCap} style={{ color: "#FF5733" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
