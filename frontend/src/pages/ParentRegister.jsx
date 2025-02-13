import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUser, faEnvelope, faPhone, faUsers, 
    faChild, faSchool, faLock 
} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ParentRegister.css";
import girl from "../images/girl-reading.jpg";

const ParentRegister = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        parent_UserName: "",
        parent_fullName: "",
        parent_email: "",
        parent_tel: "",
        relationship: "",
        student_fullName: "",
        student_className: "",
        parent_password: "",
        parent_confirmPswd: "",
    });

    useEffect(() => {
        formRef.current = document.getElementById("parentRegisterForm");
    }, []);

    // Regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const fullNameRegex = /^[a-zA-Z ,.'-]{1,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form data
    const validateForm = () => {
        const {
            parent_UserName, parent_fullName, parent_email, parent_tel,
            relationship, student_fullName, student_className, 
            parent_password, parent_confirmPswd
        } = formData;

        if (!usernameRegex.test(parent_UserName)) {
            toast.error("Username must be 3-20 alphanumeric characters.");
            return false;
        }
        if (!fullNameRegex.test(parent_fullName)) {
            toast.error("Please enter a valid full name.");
            return false;
        }
        if (!emailRegex.test(parent_email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }
        if (!phoneRegex.test(parent_tel)) {
            toast.error("Please enter a valid phone number.");
            return false;
        }
        if (!fullNameRegex.test(relationship)) {
            toast.error("Enter a valid relationship to the student.");
            return false;
        }
        if (!fullNameRegex.test(student_fullName)) {
            toast.error("Enter a valid student name.");
            return false;
        }
        if (!student_className) {
            toast.error("Please select a student class.");
            return false;
        }
        if (!passwordRegex.test(parent_password)) {
            toast.error("Password must have 8-20 characters, including uppercase, lowercase, number, and special character.");
            return false;
        }
        if (parent_password !== parent_confirmPswd) {
            toast.error("Passwords do not match.");
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:3000/api/auth/parent-register", formData, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success(response.data.message);
            setTimeout(() => {
                window.location.href = response.data.redirect;
            }, 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || "Network error, please try again.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="register-form">
                    <h2>Parent Registration</h2>
                    <form id="parentRegisterForm" method="post" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faUser} className="icon-parent" />
                            <input type="text" name="parent_UserName" placeholder="Username" required autoFocus onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faUser} className="icon-parent" />
                            <input type="text" name="parent_fullName" placeholder="Full Name" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faEnvelope} className="icon-parent" />
                            <input type="email" name="parent_email" placeholder="Email Address" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faPhone} className="icon-parent" />
                            <input type="tel" name="parent_tel" placeholder="Phone Number" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faUsers} className="icon-parent" />
                            <input type="text" name="relationship" placeholder="Relationship to Student" required onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faChild} className="icon-parent" />
                            <input type="text" name="student_fullName" placeholder="Student Full Name" required onChange={handleChange} />
                        </div>
                        <div className="input-group select-group">
                            <FontAwesomeIcon icon={faSchool} className="icon-parent" />
                            <select name="student_className" required onChange={handleChange} defaultValue="">
                                <option value="" disabled>Choose Student Class</option>
                                {["KG 1", "KG 2", "Standard 1", "Standard 2", "Standard 3", "Standard 4", "Standard 5", "Standard 6", "Standard 7"].map((className, index) => (
                                    <option key={index} value={className.toLowerCase().replace(/\s+/g, '')}>
                                        {className}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="icon-parent" />
                            <input type="password" name="parent_password" placeholder="Password" required autoComplete="new-password" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="icon-parent" />
                            <input type="password" name="parent_confirmPswd" placeholder="Confirm Password" required autoComplete="current-password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn Parentregbtn">Register</button>
                    </form>
                </div>
                <div className="register-banner">
                    <h1>Welcome Parents!</h1>
                    <img src={girl} alt="Parent" loading="lazy" className="person-image" />
                    <p>Create an account to track your child&apos;s progress and stay informed about school activities.</p>
                </div>
            </div>
        </div>
    );
};

export default ParentRegister;
