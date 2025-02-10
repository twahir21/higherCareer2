
export const Notification = () => {
  return (
    <li className="nav-item dropdown">
    <a className="nav-link" data-toggle="dropdown" href="#">
        <i className="fas fa-bell"></i>
        <span className="badge badge-warning navbar-badge">3</span>
    </a>
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-item dropdown-header">3 Notifications</span>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2"></i> New message from Parent
            <span className="float-right text-muted text-sm">5 mins</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2"></i> Teacher meeting scheduled
            <span className="float-right text-muted text-sm">1 hour</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item">
            <i className="fas fa-calendar-alt mr-2"></i> Event reminder
            <span className="float-right text-muted text-sm">2 days</span>
        </a>
        <div className="dropdown-divider"></div>
        <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
    </div>
</li>
  )
}
