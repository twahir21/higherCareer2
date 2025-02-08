import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserTie, 
  faBullseye, 
  faUsers, 
  faAddressBook, 
  faEnvelope, 
  faPhone, 
  faGlobe 
} from "@fortawesome/free-solid-svg-icons";

import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "../styles/About.css"

const About = () => {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">
        About Us – <span id="Liv_Name">Higher Career Academy</span>
      </h2>

      <h3 className="subtitle-about">
        <FontAwesomeIcon icon={faUserTie} /> Our Founder
      </h3>
      <p id="Liv_Founder">
        Names: Biubwa Abdi and Ally Abdi, their role: Founder and CEO.
        Background: Mr Ally Abdi is a finance expert while Mrs Biubwa Abdi is a teacher.
      </p>

      <h3 className="subtitle-about">
        <FontAwesomeIcon icon={faClockRegular} /> School History
      </h3>
      <p id="Liv_History" className="about-p">
      HigherCareer Academy was established in 2019 with a mission to redefine educational excellence by integrating advanced digital learning tools and a student-centered approach. Initially starting as a small institution in Tanzania, the academy focused on providing supplementary learning programs for primary and secondary school students.

As the demand for comprehensive, career-focused education grew, HigherCareer Academy expanded its services to include vocational training, professional certifications, and e-learning solutions. 

Today, HigherCareer Academy stands as a premier educational institution, renowned for its commitment to nurturing students&#39; academic growth and preparing them for dynamic career paths. Through state-of-the-art facilities, experienced educators, and an inclusive approach, the academy continues to empower learners to excel in a competitive world.

Motto: &quote;Transforming Education, Inspiring Success.&quote;
      </p>

      <h3 className="subtitle-about">
        <FontAwesomeIcon icon={faBullseye} /> Our Mission
      </h3>
      <p id="Liv_Mission" className="about-p">
        Quality education and discipline are our priority. We focus on shaping students into responsible and ethical individuals through a balanced approach of academics and values.
      </p>

      <h3 className="subtitle-about">
        <FontAwesomeIcon icon={faUsers} /> Meet Our Team
      </h3>
      <ol className="lists">
        <li className="team">
          <b className="about-b"><span id="Liv_Member1">Twahir Sudi</span></b> – 
          <span id="Liv_Member1Role"> Full stack Web Developer</span>
        </li>
        <li className="team">
          <b className="about-b"><span id="Liv_Member2">Ally Abdi & Biubwa Abdi</span></b> – 
          <span id="Liv_Member2Role"> Founder and CEO</span>
        </li>
      </ol>

      <h3 className="subtitle-about">
        <FontAwesomeIcon icon={faAddressBook} /> Contact Information
      </h3>
      <ul>
        <li className="team">
          <b><FontAwesomeIcon icon={faEnvelope} /> Email:</b> 
          <span id="Liv_Email">
            <a href="mailto:highercareers@gmail.com">Official Email Id</a>
          </span>
        </li>
        <li className="team">
          <b><FontAwesomeIcon icon={faPhone} /> Phone:</b> 
          <span id="Liv_Phone">
            <a href="tel:0777343414">Office Phone Number</a>
          </span>
        </li>
        <li className="team">
          <b><FontAwesomeIcon icon={faGlobe} /> Website:</b> 
          <span id="Liv_URL">
            <a href="https://www.highercareer.academy">Official Website</a>
          </span>
        </li>
      </ul>

      <h3 className="subtitle-about">Connect With Us</h3>
      <div className="connect">
        <table>
          <tbody>
            <tr className="team">
              <th className="links">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#3c41e4" }} /> Facebook:
              </th>
              <td id="Liv_Facebook">
                <a href="https://www.facebook.com/highercareerschool/">Official Facebook Page</a>
              </td>
            </tr>
            <tr className="team">
              <th className="links">
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#ff0000" }} /> YouTube:
              </th>
              <td id="Liv_YouTube">
                <a href="https://www.youtube.com/embed/iMnZ_v1sjPY?si=hYfPiZ5hcjOAOXyH">Official YouTube Channel</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
