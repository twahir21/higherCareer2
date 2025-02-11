import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUser, faSignOutAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "../../styles/dropdown.css";

const ProfileDropdown = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><FontAwesomeIcon icon={faUser} /> Profile</li>
        <li><FontAwesomeIcon icon={faEdit} /> Edit Profile</li>
        <li><FontAwesomeIcon icon={faCog} /> Settings</li>
        <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
