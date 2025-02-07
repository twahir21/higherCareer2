
const WhyChoose = () => {
  return (
    <div>
        <section className="why-choose-section">
    <div className="container">
        <div className="section-header">
            <h2>Why Choose HCA</h2>
            <p>Discover the advantages that set us apart</p>
        </div>

        <div className="why-choose-grid">
            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-star"></i>
                </div>
                <h3>Academic Excellence</h3>
                <p>Consistently high academic standards and outstanding achievement records</p>
                <a href="/excellence" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-user-tie"></i>
                </div>
                <h3>Expert Faculty</h3>
                <p>Experienced educators dedicated to nurturing student potential</p>
                <a href="/faculty" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-building"></i>
                </div>
                <h3>Modern Facilities</h3>
                <p>State-of-the-art infrastructure and learning environments</p>
                <a href="/facilities" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-child"></i>
                </div>
                <h3>Holistic Development</h3>
                <p>Focus on academic, social, and personal growth</p>
                <a href="/development" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Personalized Learning --> */}
            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-user-edit"></i>
                </div>
                <h3>Personalized Learning</h3>
                <p>Tailored learning experiences designed to meet individual student needs</p>
                <a href="/personalized-learning" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>

            {/* <!-- Strong Community Engagement --> */}
            <div className="why-choose-card">
                <div className="card-icon">
                    <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Strong Community Engagement</h3>
                <p>Building meaningful connections with students, parents, and the community</p>
                <a href="/community-engagement" className="card-link">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>


        </div>
    </div>
</section>
    </div>
  )
}

export default WhyChoose