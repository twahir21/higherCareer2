import { useEffect } from "react";
import { Calendar } from "../components/admin/Calendar.jsx";
import { Cards } from "../components/admin/Cards.jsx";
import { Graphs } from "../components/admin/Graphs.jsx";
import { Notification } from "../components/admin/Notification.jsx";
import { Profile } from "../components/admin/Profile.jsx";
import { SideLinks } from "../components/admin/SideLinks.jsx";


const Admin = () => {
  useEffect(() => {
    // Any additional JavaScript functionality can be handled here
    console.log("Admin panel loaded");
  }, []);

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" data-widget="pushmenu">
              <i className="fas fa-bars"></i>
            </button>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown */}
          <Notification />

          {/* Profile Dropdown */}
          <Profile />
        </ul>
      </nav>

      {/* Sidebar */}
      <SideLinks />

      {/* Dashboard Section */}
      <section id="dashboardSection">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <h1 className="m-0">Admin Dashboard</h1>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              {/* Cards Section */}
              <Cards />

              {/* Charts Section */}
              <Graphs />

              {/* Messages and announcements */}
              <div className="row mt-4">
                {/* Calendar */}
                <Calendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
