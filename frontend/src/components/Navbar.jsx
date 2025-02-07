import "../styles/Navbar.css";
// import "./JavaScript/nav.js";
import { useEffect } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    useEffect(() => {
    
    // clean the function after finished (unmount)
    }, [])
  return (
    <>
    <header className="header">
        <nav className="nav container">
            <div className="nav__data">
                <a href="#" className="nav__logo">
                    <span className="logo">
                        <img src={logo} alt="logo" />
                    </span>HigherCareer
                </a>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line nav__toggle-menu"></i>
                    <i className="ri-close-line nav__toggle-close"></i>
                </div>
            </div>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li>
                        <a href="/" className="nav__link">Home</a>
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
                                            <a href="/nursery-join" className="dropdown__link">Nursery Joining Instruction</a>
                                        </li>

                                        <li>
                                            <a href="/primary-join" className="dropdown__link">Primary Joining Instruction</a>
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
                                            <a href="/nursery-fees" className="dropdown__link">Nursery Tuition and fees</a>
                                        </li>

                                        <li>
                                            <a href="/primary-fees" className="dropdown__link">Primary Tuition and fees</a>
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
                                            <a href="/news&announcements" className="dropdown__link">News & Announcements</a>
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
                                            <a href="/vision" className="dropdown__link">Our Mission and vision</a>
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
                                            <a href="/login" className="dropdown__link">Login</a>
                                        </li>

                                        <li>
                                            <a href="/parent-register" className="dropdown__link">Parent Registration form</a>
                                        </li>

                                        <li>
                                            <a href="/teacher-register" className="dropdown__link">Teacher Registration form</a>
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
                                            <a href="https://www.google.com/maps/dir/-6.852042,39.2894836/higher+career+academy+location/@-6.4816381,38.9349168,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x185d29c7bd114ef7:0xdca4e8d9e0fe08ad!2m2!1d39.3621196!2d-6.1357295?entry=ttu" 
                                            className="dropdown__link" 
                                            target="_blank"
                                            rel="noopener noreferrer">
                                                <span>Our location</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="/faq" className="nav__link">FAQs</a>
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
                                            <a href="/about-us" className="dropdown__link">About us</a>
                                        </li>

                                        <li>
                                            <a href="/contact-us" className="dropdown__link">Contact us</a>
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
                                            <a href="/terms" className="dropdown__link">Terms and Condition</a>
                                        </li>

                                        <li>
                                            <a href="/privacy-policy" className="dropdown__link">Privacy Policy</a>
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