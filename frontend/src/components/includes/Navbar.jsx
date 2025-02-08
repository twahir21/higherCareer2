import "../../styles/Navbar.css";
import { useEffect } from "react";
import useNavDropdown from "../../hooks/useNavDropdown.js";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    useNavDropdown();

  useEffect(() => {
        // Scroll Progress Bar
        const progressBar = document.querySelector('.progress-bar');

        const updateScrollBar = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if(progressBar) {
                progressBar.style.width = `${scrollPercentage}%`;
            }
        }

        window.addEventListener('scroll', updateScrollBar)


    // clean the function after finished (unmount)
    return () => {
        window.removeEventListener('scroll', updateScrollBar)
    }
    }, []);



  return (
    <>
    <header className="header">
        <nav className="nav container">
            <div className="nav__data">
                <Link to="#" className="nav__logo">
                    <span className="logo">
                        <img src={logo} alt="logo" />
                    </span>HigherCareer
                </Link>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line nav__toggle-menu"></i>
                    <i className="ri-close-line nav__toggle-close"></i>
                </div>
            </div>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li>
                        <Link to="/" className="nav__link">Home</Link>
                    </li>

                    <li className="dropdown__item">
                        <div className="nav__link dropdown__button">
                            Admission <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <div className="dropdown__container">
                            <div className="dropdown__content">
                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-flashlight-line"></i>
                                    </div>

                                    <span className="dropdown__title">How to join</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/nursery-join" className="dropdown__link">Nursery Joining Instruction</Link>
                                        </li>

                                        <li>
                                            <Link to="/primary-join" className="dropdown__link">Primary Joining Instruction</Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-coins-line"></i>
                                    </div>

                                    <span className="dropdown__title">Tuition and Fees</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/nursery-fees" className="dropdown__link">Nursery Tuition and fees</Link>
                                        </li>

                                        <li>
                                            <Link to="/primary-fees" className="dropdown__link">Primary Tuition and fees</Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-newspaper-line"></i>

                                    </div>

                                    <span className="dropdown__title">News & Updates</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/#announcements-section" className="dropdown__link">News & Announcements</Link>
                                        </li>

                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-flag-line"></i>

                                    </div>

                                    <span className="dropdown__title">Core Values</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/vision" className="dropdown__link">Our Mission and vision</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="dropdown__item">
                        <div className="nav__link dropdown__button">
                            Quick Links <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <div className="dropdown__container">
                            <div className="dropdown__content">
                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-account-circle-line"></i>

                                    </div>

                                    <span className="dropdown__title">Accounts</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/login" className="dropdown__link">Login</Link>
                                        </li>

                                        <li>
                                            <Link to="/parent-register" className="dropdown__link">Parent Registration form</Link>
                                        </li>

                                        <li>
                                            <Link to="/teacher-register" className="dropdown__link">Teacher Registration form</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-map-pin-line"></i>
                                    </div>

                                    <span className="dropdown__title">Location</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="https://www.google.com/maps/dir/-6.852042,39.2894836/higher+career+academy+location/@-6.4816381,38.9349168,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x185d29c7bd114ef7:0xdca4e8d9e0fe08ad!2m2!1d39.3621196!2d-6.1357295?entry=ttu" 
                                            className="dropdown__link" 
                                            target="_blank"
                                            rel="noopener noreferrer">
                                                <span>Our location</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="/faq" className="nav__link">FAQs</Link>
                    </li>

                    <li className="dropdown__item">
                        <div className="nav__link dropdown__button">
                            Support <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                        </div>

                        <div className="dropdown__container">
                            <div className="dropdown__content">
                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-community-line"></i>
                                    </div>

                                    <span className="dropdown__title">About us</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/about-us" className="dropdown__link">About us</Link>
                                        </li>

                                        <li>
                                            <Link to="/contact-us" className="dropdown__link">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown__group">
                                    <div className="dropdown__icon">
                                        <i className="ri-shield-line"></i>
                                    </div>

                                    <span className="dropdown__title">Safety and quality</span>

                                    <ul className="dropdown__list">
                                        <li>
                                            <Link to="/terms" className="dropdown__link">Terms and Condition</Link>
                                        </li>

                                        <li>
                                            <Link to="/privacy-policy" className="dropdown__link">Privacy Policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="progress-bar"></div>

    </header>
    <div className="space"></div>


    </>
  )
}

export default Navbar