import heroImage from "../../images/hero-image.png"
const Hero = () => {
  return (
    <div>
        <section className="hero-section">
        <div className="hero-content">
        <div className="hero-grid">
            <div className="hero-text">
                <h1>Welcome to Higher Career Academy</h1>
                <p>Empowering students with quality education and innovative learning solutions</p>
                <div className="hero-buttons">
                    <a href="/parent-register" className="hero-btn btn-primary">Get Started</a>
                    <a href="/about-us" className="hero-btn btn-secondary">Learn More</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Education Illustration" />
            </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Hero