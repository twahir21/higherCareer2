
const Stats = () => {
  return (
    <div>
        <section className="stats-section">
    <div className="stats-container">
        <div className="stats-grid">
            <div className="stat-card">
                <i className="fas fa-user-graduate"></i>
                <h3>1000+</h3>
                <p>Students</p>
            </div>
            <div className="stat-card">
                <i className="fas fa-chalkboard-teacher"></i>
                <h3>50+</h3>
                <p>Expert Teachers</p>
            </div>
        {/* <!-- Religious Education --> */}
        <div className="stat-card">
            <i className="fa-solid fa-person-praying"></i>
            <h3>2</h3>
            <p>Religious Teachings</p>
        </div>

            <div className="stat-card">
                <i className="fas fa-trophy"></i>
                <h3>95%</h3>
                <p>Success Rate</p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Stats