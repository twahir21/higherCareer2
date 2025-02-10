
export const Profile = () => {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link" data-toggle="dropdown" href="#">
        <img src="https://via.placeholder.com/30" alt="User Image" className="img-circle"  style={{height: "30px", width: "30px"}}/>
    </a>
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" id="profileDropdown">
        <a href="#" className="dropdown-item" data-icon="fas fa-user">View Profile</a>
        <a href="#" className="dropdown-item" data-icon="fas fa-edit">Edit Profile</a>
        <a href="#" className="dropdown-item" data-icon="fas fa-cog">Settings</a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item" data-icon="fas fa-sign-out-alt">Logout</a>
    </div>
</li>
  )
}
