import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUser, faEnvelope, faPhone, faLock, 
    faChalkboardTeacher, faGraduationCap 
} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "../styles/TeacherReg.css";
import regImg from "../images/register.jpg";

const TeacherReg = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        teacher_UserName: "",
        teacher_fullName: "",
        teacher_email: "",
        teacher_tel: "",
        subject: "",
        qualifications: "",
        teacher_password: "",
        teacher_confirmPswd: "",
    });

    useEffect(() => {
        formRef.current = document.getElementById("teacherRegisterForm");
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
        const { teacher_UserName, teacher_fullName, teacher_email, teacher_tel, subject, qualifications, teacher_password, teacher_confirmPswd } = formData;

        if (!usernameRegex.test(teacher_UserName)) {
            toast.error("Username must be 3-20 alphanumeric characters.");
            return false;
        }
        if (!fullNameRegex.test(teacher_fullName)) {
            toast.error("Please enter a valid full name.");
            return false;
        }
        if (!emailRegex.test(teacher_email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }
        if (!phoneRegex.test(teacher_tel)) {
            toast.error("Please enter a valid phone number.");
            return false;
        }
        if (!subject.trim()) {
            toast.error("Subject is required.");
            return false;
        }
        if (!qualifications.trim()) {
            toast.error("Qualifications are required.");
            return false;
        }
        if (!passwordRegex.test(teacher_password)) {
            toast.error("Password must have 8-20 characters, including uppercase, lowercase, number, and special character.");
            return false;
        }
        if (teacher_password !== teacher_confirmPswd) {
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
            const response = await axios.post("http://localhost:3000/api/auth/teacher-register", formData, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success(response.data.message);
            // ✅ Clear form fields after successful submission
            setFormData({
                teacher_UserName: "",
                teacher_fullName: "",
                teacher_email: "",
                teacher_tel: "",
                subject: "",
                qualifications: "",
                teacher_password: "",
                teacher_confirmPswd: "",
            });
                setTimeout(() => {
                window.location.href = response.data.redirect;
            }, 4000);
        } catch (error) {
            toast.error(error.response?.data?.message || "Network error, please try again.");
        }
    };

    return (
        <div className="register-container-teacher">
            <div className="register-wrapper-teacher">
                <div className="register-form-teacher">
                    <h2>Teacher Registration</h2>
                    <form id="teacherRegisterForm" method="post" onSubmit={handleSubmit}>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faUser} className="icon-teacher" />
                            <input type="text" name="teacher_UserName" placeholder="Username" required autoFocus onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faUser} className="icon-teacher" />
                            <input type="text" name="teacher_fullName" placeholder="Full Name" required onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faEnvelope} className="icon-teacher" />
                            <input type="email" name="teacher_email" placeholder="Email Address" required onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faPhone} className="icon-teacher" />
                            <input type="tel" name="teacher_tel" placeholder="Phone Number" required onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faChalkboardTeacher} className="icon-teacher" />
                            <input type="text" name="subject" placeholder="Subject Taught" required onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faGraduationCap} className="icon-teacher" />
                            <input type="text" name="qualifications" placeholder="Qualifications" required onChange={handleChange} />
                        </div>

                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faLock} className="icon-teacher" />
                            <input type="password" name="teacher_password" placeholder="Password" required autoComplete="new-password" onChange={handleChange} />
                        </div>
                        <div className="input-group-teacher">
                            <FontAwesomeIcon icon={faLock} className="icon-teacher" />
                            <input type="password" name="teacher_confirmPswd" placeholder="Confirm Password" required autoComplete="current-password" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn-teacher" id="teacherRegisterBtn">Register</button>
                    </form>
                </div>
                <div className="register-banner-teacher">
                    <h1>Welcome Teachers!</h1>
                    <img src={regImg} alt="Teacher" loading="lazy" className="person-image" />
                    <p>Create an account to manage your classes and track student attendance.</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherReg;
