import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Privacy.css"
import { 
    faShieldAlt, 
    faBook, 
    faUser, 
    faCookie, 
    faGlobe, 
    faFlag, 
    faLaptop, 
    faUserShield, 
    faEnvelope, 
    faPhone, 
    faDatabase, 
    faUserCog, 
    faPhoneAlt 
} from '@fortawesome/free-solid-svg-icons';

const Privacy = () => {
    return (
        <div>
            <section className="privacy-policy-container">
                <header className="privacy-header">
                    <h1 className="privacy-header-title">
                        <FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy
                    </h1>
                    <p className="privacy-header-updated"><strong>Last updated:</strong> December 13, 2024</p>
                </header>

                <article className="content">
                    <section className="content-section">
                        <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                        <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
                    </section>

                    <section className="content-section">
                        <h2 className="content-section-title">
                            <FontAwesomeIcon icon={faBook} /> Definitions
                        </h2>
                        <div className="custom-list">
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faUser} className='custom-list-icon'/> <strong style={{paddingRight: "6px"}}>Account:</strong> A unique profile created for accessing our service.
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faCookie} className='custom-list-icon'/> <strong style={{paddingRight: "6px"}}>Cookies:</strong> Small files stored on your device for tracking website activity.
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faGlobe} className='custom-list-icon'/> <strong style={{paddingRight: "6px"}}>Website:</strong> Higher Career Academy accessible at <a href="https://www.highercareer.academy" target="_blank" className="custom-link" style={{padding: "0 6px"}}>our website</a>.
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faFlag} className='custom-list-icon'/> <strong style={{paddingRight: "6px"}}>Country:</strong> Tanzania.
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faLaptop} className='custom-list-icon'/> <strong style={{paddingRight: "6px"}}>Device:</strong> Any device that can access the Service such as a computer, a cellphone, or a digital tablet.
                            </div>
                        </div>
                    </section>

                    <section className="content-section">
                        <h2 className="content-section-title">
                            <FontAwesomeIcon icon={faUserShield} /> Data Collection
                        </h2>
                        <h4 className="content-subsubtitle" style={{paddingBottom: "8px"}}>Types of Data</h4>
                        <div className="custom-list">
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faEnvelope} className='custom-list-icon'/> Email Address
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faUser} className='custom-list-icon'/> Name
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faPhone} className='custom-list-icon'/> Phone Number
                            </div>
                        </div>
                    </section>

                    <section className="content-section">
                        <h2 className="content-section-title">
                            <FontAwesomeIcon icon={faDatabase} /> Usage Data
                        </h2>
                        <p>Usage Data is collected automatically when using the Service.</p>
                        <p>Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, pages visited, time spent on pages, and other diagnostic data.</p>
                    </section>

                    <section className="content-section">
                        <h2 className="content-section-title">
                            <FontAwesomeIcon icon={faUserCog} /> Use of Your Personal Data
                        </h2>
                        <p>The Company may use Personal Data for the following purposes:</p>
                        <ul>
                            <li>To provide and maintain our Service</li>
                            <li>To manage Your Account</li>
                            <li>To contact You</li>
                            <li>For business transfers</li>
                            <li>For other purposes, such as data analysis and marketing</li>
                        </ul>
                    </section>

                    <section className="content-section">
                        <h2 className="content-section-title">
                            <FontAwesomeIcon icon={faPhoneAlt} /> Contact Us
                        </h2>
                        <div className="custom-list">
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faEnvelope} className='custom-list-icon'/> Email: <a href="mailto:highercareer@gmail.com" className="custom-link" style={{padding: "0 6px"}}>highercareer@gmail.com</a>
                            </div>
                            <div className="custom-list-item">
                                <FontAwesomeIcon icon={faGlobe} className='custom-list-icon'/> Website: <a href="https://www.highercareer.academy/contact" target="_blank" className="custom-link" style={{padding: "0 6px"}}>Contact Us</a>
                            </div>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    );
};

export default Privacy;
