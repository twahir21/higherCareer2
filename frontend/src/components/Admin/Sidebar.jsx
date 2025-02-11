import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardTeacher, faUserGraduate, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><FontAwesomeIcon icon={faChalkboardTeacher} /> Teachers</li>
        <li><FontAwesomeIcon icon={faClipboardList} /> Attendance</li>
        <li><FontAwesomeIcon icon={faUser} /> Parents</li>
        <li><FontAwesomeIcon icon={faUserGraduate} /> Students</li>
      </ul>
    </div>
  );
};

export default Sidebar;
