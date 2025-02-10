import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faUserTie,
  faUserGraduate,
  faChalkboardTeacher,
  faCalendarCheck,
  faComments,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const SideLinks = ({ message = "Admin" }) => {
  // State for handling open/close menus
  const [activeMenu, setActiveMenu] = useState(null);

  // Toggle function for treeview menus
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  // Sidebar links data
  const sideLinks = [
    { id: "dashboard", label: "Dashboard", icon: faHome },
    { id: "verifyUsers", label: "Verify Users", icon: faUsers },
    { id: "teacher", label: "Teacher", icon: faUserTie },
    { id: "student", label: "Student", icon: faUserGraduate },
    { id: "subjectManagement", label: "Subject Management", icon: faUserGraduate },
    { id: "reportManagement", label: "Report Management", icon: faUserGraduate },
    { id: "classManagement", label: "Class Management", icon: faChalkboardTeacher },
    { id: "attendance", label: "Attendance", icon: faCalendarCheck },
    { id: "communication", label: "Communication", icon: faComments },
    { id: "joiningInstructions", label: "Joining Instructions", icon: faFileLines },
  ];

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand */}
      <div className="brand-link text-center p-3">
        <span className="brand-text font-weight-light">Welcome {message}</span>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column">
            {sideLinks.map(({ id, label, icon }) => (
              <li key={id} className="nav-item">
                <a
                  className={`nav-link ${activeMenu === id ? "active" : ""}`}
                  onClick={() => toggleMenu(id)}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={icon} className="nav-icon" />
                  <p>{label}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// propTypes validations

SideLinks.propTypes = {
  message: PropTypes.string, // Ensures `message` is a string
};
