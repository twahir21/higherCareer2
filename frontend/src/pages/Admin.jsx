import { Calendar } from "../components/admin/Calendar.jsx";
import { Cards } from "../components/admin/Cards.jsx";
import { Graphs } from "../components/admin/Graphs.jsx";
import { Notification } from "../components/admin/Notification.jsx";
import { Profile } from "../components/admin/Profile.jsx";
import { SideLinks } from "../components/admin/SideLinks.jsx";

const Admin = () => {
  return (
    <div>

<body className="hold-transition sidebar-mini">
    <div className="wrapper">
        {/* <!-- Navbar --> */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">

                {/* <!-- Notifications Dropdown --> */}
                <Notification />

                {/* <!-- Profile Dropdown --> */}
                <Profile />
            </ul>
        </nav>

        {/* <!-- Sidebar --> */}
        <SideLinks />

        {/* <!-- Dashboard Section --> */}
        <section id="dashboardSection">
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <h1 className="m-0">
                            {"Admin"}
                        Dashboard</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
    
                        {/* <!-- Cards Section --> */}
                        <Cards />
    
                        {/* <!-- Charts Section --> */}
                        <Graphs />
    
                        {/* <!-- Messages and announcement --> */}
                        <div className="row mt-4">
                            {/* <!-- Calendar  --> */}
                        <Calendar />
    
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Other sections --> */}
         {/* <%- include("./main/content") %> */}

    </div>

    {/* <!-- Scripts --> */}
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="/js/sessionExpire.js"></script>
    <script src="/js/admin-frontend.js"></script>
    <script src="/js/admin-sections.js"></script>

</body>

    </div>
  )
}

export default Admin