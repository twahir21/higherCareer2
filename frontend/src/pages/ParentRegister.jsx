import "../styles/ParentRegister.css";
import useParent from "../hooks/useParent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, 
    faEnvelope, 
    faPhone, 
    faUsers, 
    faChild, 
    faSchool, 
    faLock 
} from "@fortawesome/free-solid-svg-icons";

import girl from "../images/girl-reading.jpg"

const ParentRegister = () => {
  useParent();

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-form">
          <h2>Parent Registration</h2>
          <form id="parentRegisterForm" method="post">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="icon-parent" />
              <input type="text" name="parent_UserName" placeholder="Username" required autoFocus />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="icon-parent" />
              <input type="text" name="parent_fullName" placeholder="Full Name" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="icon-parent" />
              <input type="email" name="parent_email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faPhone} className="icon-parent" />
              <input type="tel" name="parent_tel" placeholder="Phone Number" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faUsers} className="icon-parent" />
              <input type="text" name="relationship" placeholder="Relationship to Student" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faChild} className="icon-parent" />
              <input type="text" name="student_fullName" placeholder="Student Full Name" required />
            </div>
            <div className="input-group select-group">
              <FontAwesomeIcon icon={faSchool} className="icon-parent" />
              <select name="student_className" required>
                <option value="" disabled selected>Choose Student Class</option>
                {["KG1 (Nursery)", "KG2 (Nursery)", "Standard 1", "Standard 2", "Standard 3", "Standard 4", "Standard 5", "Standard 6", "Standard 7"].map((className, index) => (
                  <option key={index} value={className.toLowerCase().replace(/\s+/g, '')}>
                    {className}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="icon-parent" />
              <input type="password" name="parent_password" placeholder="Password" required autoComplete="new-password" />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="icon-parent" />
              <input type="password" name="parent_confirmPswd" placeholder="Confirm Password" required autoComplete="current-password" />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
        </div>
        <div className="register-banner">
          <h1>Welcome Parents!</h1>
          <img src={girl} alt="Parent" loading="lazy" className="person-image"/>
          <p>Create an account to track your child&apos;s progress and stay informed about school activities.</p>
        </div>
      </div>
    </div>
  );
};

export default ParentRegister;
