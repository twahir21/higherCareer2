const Announcements = () => {
  return (
    <div>
        <section className="announcements-section">
            <div className="announcements-container">
                <div className="section-header">
                    <h2>Latest Updates</h2>
                    <div className="header-line"></div>
                </div>

                <div className="announcements-grid">
                    <div className="announcement-card">
                        <div className="card-tag">Important</div>
                        <div className="card-date">
                            <span className="day">15</span>
                            <span className="month">Mar</span>
                        </div>
                        <h3>New Semester Registration Open</h3>
                        <p>Registration for the new semester is now open. All students must complete their registration by March 30th.</p>
                        <div className="card-meta">
                            <span className="time"><i className="far fa-clock"></i> 2 days ago</span>
                            <a href="#" className="read-more">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="announcement-card">
                        <div className="card-tag event">Event</div>
                        <div className="card-date">
                            <span className="day">18</span>
                            <span className="month">Mar</span>
                        </div>
                        <h3>Annual Sports Day</h3>
                        <p>Join us for our annual sports day celebration. Various competitions and exciting prizes to be won!</p>
                        <div className="card-meta">
                            <span className="time"><i className="far fa-clock"></i> 1 day ago</span>
                            <a href="#" className="read-more">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div className="announcement-card">
                        <div className="card-tag academic">Academic</div>
                        <div className="card-date">
                            <span className="day">20</span>
                            <span className="month">Mar</span>
                        </div>
                        <h3>Mid-Term Examination Schedule</h3>
                        <p>The mid-term examination schedule has been released. Check your exam dates and prepare accordingly.</p>
                        <div className="card-meta">
                            <span className="time"><i className="far fa-clock"></i> 5 hours ago</span>
                            <a href="#" className="read-more">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Announcements