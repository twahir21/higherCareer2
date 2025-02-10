import "../styles/Faq.css";
import useFaq from "../hooks/useFaq";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Faq = () => {

    useFaq();

  return (
    <div>

    <div className="faq-container">
        
        <div className="title-faq">
            <h2>❓ Frequently Asked Questions</h2>
            <p>Find answers to common questions about the HigherCareer system, or <Link to="/#contact-section">contact our support</Link></p>

            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
    
                <input type="search" name="search" id="search"  placeholder="Search ..." />
            </div>
        </div>


        <main className="main-content">
            <section className="faq-section">
                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>How do I add a new student?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>To add a new student, go to the &#34;Manage Students&#34; section, click on &#34;Add Student,&#34; and fill out the required details.</p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>How can I view fee collection details?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Navigate to the &#34;Fee Management&#34; section to view details on collected and pending fees.</p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>How do I reset my password?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>Go to your profile settings and click &#34;Reset Password.&#34; Follow the instructions to update your password securely.</p>
                    </div>
                </div>

                <div className="faq-item" data-expanded="false">
                    <div className="faq-question">
                        <h3>How do I generate student reports?</h3>
                        <span className="toggle-icon">+</span>
                    </div>
                    <div className="faq-answer">
                        <p>To generate reports, go to &#34;Student Reports&#34; and choose the type of report (academic or attendance). You can customize filters as needed.</p>
                    </div>
                </div>

                <h4>Still can&#39;t find your answer?</h4>
                <p className="happy">We are happy to help</p>
                
                    
                <Link to="/#contact-section" className="faq-link">
                <button>
                <FontAwesomeIcon icon={faMessage} className="faq-icon"/>
                Chat with us
                </button>
                </Link>
            </section>
        </main>
    </div>
    </div>
  )
}

export default Faq