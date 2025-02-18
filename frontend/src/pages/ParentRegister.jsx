import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faUser, faEnvelope, faPhone, faUsers, 
    faChild, faSchool, faLock, faPlusCircle, faTrash 
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
        parent_password: "",
        parent_confirmPswd: "",
        students: [{ fullName: "", className: "", relationship: "" }]
    });

    useEffect(() => {
        formRef.current = document.getElementById("parentRegisterForm");
    }, []);

    // Validation Regex
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const fullNameRegex = /^[a-zA-Z ,.'-]{1,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // Handle Parent Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Student Input Change
    const handleStudentChange = (index, e) => {
        const updatedStudents = [...formData.students];
        updatedStudents[index][e.target.name] = e.target.value;
        setFormData({ ...formData, students: updatedStudents });
    };

    // Add Student
    const addStudent = () => {
        setFormData({
            ...formData,
            students: [...formData.students, { fullName: "", className: "", relationship: "" }]
        });
    };

    // Remove Student
    const removeStudent = (index) => {
        const updatedStudents = formData.students.filter((_, i) => i !== index);
        setFormData({ ...formData, students: updatedStudents });
    };

    // Validate Form Data
    const validateForm = () => {
        const { parent_UserName, parent_fullName, parent_email, parent_tel, parent_password, parent_confirmPswd, students } = formData;

        if (!usernameRegex.test(parent_UserName)) return toast.error("Username must be 3-20 alphanumeric characters.");
        if (!fullNameRegex.test(parent_fullName)) return toast.error("Please enter a valid full name.");
        if (!emailRegex.test(parent_email)) return toast.error("Please enter a valid email address.");
        if (!phoneRegex.test(parent_tel)) return toast.error("Please enter a valid phone number.");
        if (!passwordRegex.test(parent_password)) return toast.error("Password must have 8-20 characters, including uppercase, lowercase, number, and special character.");
        if (parent_password !== parent_confirmPswd) return toast.error("Passwords do not match.");

        if (students.length === 0) return toast.error("At least one student must be added.");

        for (const student of students) {
            if (!fullNameRegex.test(student.fullName)) return toast.error("Enter a valid student full name.");
            if (!fullNameRegex.test(student.relationship)) return toast.error("Enter a valid relationship.");
            if (!student.className) return toast.error("Please select a student class.");
        }

        return true;
    };

    // Handle Form Submission
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
            }, 4000);
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

                        {/* Students Section */}
                        <h3>Students</h3>
                        {formData.students.map((student, index) => (
                            <div key={index} className="student-group">
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faChild} className="icon-parent" />
                                    <input type="text" name="fullName" placeholder="Student Full Name" required value={student.fullName} onChange={(e) => handleStudentChange(index, e)} />
                                </div>
                                <div className="input-group select-group">
                                    <FontAwesomeIcon icon={faSchool} className="icon-parent" />
                                    <select name="className" required value={student.className} onChange={(e) => handleStudentChange(index, e)} className="option">
                                        <option value="" disabled>Choose Student Class</option>
                                        {["KG 1", "KG 2", "Standard 1", "Standard 2", "Standard 3", "Standard 4", "Standard 5", "Standard 6", "Standard 7"].map((className, i) => (
                                            <option key={i} value={className.toLowerCase().replace(/\s+/g, '')}>{className}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="input-group">
                                    <FontAwesomeIcon icon={faUsers} className="icon-parent" />
                                    <input type="text" name="relationship" placeholder="Relationship to Student" required value={student.relationship} onChange={(e) => handleStudentChange(index, e)} />
                                </div>
                                {formData.students.length > 1 && (
                                    <button type="button" className="btn-remove" onClick={() => removeStudent(index)}>
                                        <FontAwesomeIcon icon={faTrash} /> Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" className="btn-add" onClick={addStudent}>
                            <FontAwesomeIcon icon={faPlusCircle} /> Add Another Student
                        </button>

                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="icon-parent" />
                            <input type="password" name="parent_password" placeholder="Password" required autoComplete="new-password" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <FontAwesomeIcon icon={faLock} className="icon-parent" />
                            <input type="password" name="parent_confirmPswd" placeholder="Confirm Password" required autoComplete="new-password" onChange={handleChange} />
                        </div>

                        <button type="submit" className="btn Parentregbtn">Register</button>
                    </form>
                </div>

                <div className="register-banner">
                    <h1>Welcome Parents!</h1>
                    <img src={girl} alt="Parent" loading="lazy" className="person-image" />
                    <p className="info">Create an account to track your child&apos;s progress and stay informed about school activities.</p>
                </div>

            </div>
        </div>
    );
};

export default ParentRegister;
