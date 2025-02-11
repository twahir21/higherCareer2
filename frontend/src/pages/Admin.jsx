import "../styles/Admin.css";
import Sidebar from "../components/Admin/Sidebar.jsx";
import TopBar from "../components/Admin/TopBar.jsx";
import Dashboard from "../components/Admin/Dashboard.jsx";

const Admin = () => {
    return (
        <div className="app-admin">
          <Sidebar />
          <div className="main-content-admin">
            <TopBar />
            <Dashboard />
          </div>
        </div>
      );
}

export default Admin