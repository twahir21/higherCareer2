const Features = () => {
  return (
    <div>
        <section className="features-section">
    <div className="container">
        <div className="section-header">
            <h2>Our Features</h2>
            <p>Discover what makes Higher Career Academy special</p>
        </div>

        <div className="features-grid">
            {/* <!-- Academic Management --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Academic Management</h3>
                <p>Comprehensive course management, grading systems, and academic tracking</p>
                <a href="/academics" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Student Portal --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Student Portal</h3>
                <p>Access to assignments, grades, schedules, and educational resources</p>
                <a href="/student-portal" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Teacher Dashboard --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Teacher Dashboard</h3>
                <p>Tools for attendance, grading, and student performance tracking</p>
                <a href="/teacher-portal" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Parent Access --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-users"></i>
                </div>
                <h3>Parent Access</h3>
                <p>Real-time updates on student progress and school communications</p>
                <a href="/parent-portal" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Fee Management --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-credit-card"></i>
                </div>
                <h3>Fee Management</h3>
                <p>Efficient tracking of fee payments, outstanding balances, and reports</p>
                <a href="/fee-management" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Event Management --> */}
            <div className="feature-card">
                <div className="feature-icon">
                    <i className="fas fa-calendar-alt"></i>
                </div>
                <h3>Event Management</h3>
                <p>Stay updated with school events, sports, and extracurricular activities</p>
                <a href="/event-management" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>


        </div>
    </div>
</section>
    </div>
  )
}

export default Features