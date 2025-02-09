import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const useParent = () => {

    const [formData, setFormData] = useState({
        parent_UserName: "",
        parent_fullName: "",
        parent_email: "",
        parent_tel: "",
        relationship: "",
        student_fullName: "",
        student_className: "",
        parent_password: "",
        parent_confirmPswd: ""
    });

    // Regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const fullNameRegex = /^[a-zA-Z ,.'-]{1,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const safeTextRegex = /^[a-zA-Z0-9 _.,'"!?-]{1,100}$/;

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validation function
    const validateParentForm = () => {
        if (!usernameRegex.test(formData.parent_UserName)) {
            toast.error("Username must be 3-20 alphanumeric characters.");
            return false;
        }
        if (!fullNameRegex.test(formData.parent_fullName)) {
            toast.error("Please enter a valid full name.");
            return false;
        }
        if (!emailRegex.test(formData.parent_email)) {
            toast.error("Please enter a valid email address.");
            return false;
        }
        if (!phoneRegex.test(formData.parent_tel)) {
            toast.error("Please enter a valid phone number.");
            return false;
        }
        if (!safeTextRegex.test(formData.relationship)) {
            toast.error("Enter a valid relationship to the student.");
            return false;
        }
        if (!fullNameRegex.test(formData.student_fullName)) {
            toast.error("Enter a valid student name.");
            return false;
        }
        if (!passwordRegex.test(formData.parent_password)) {
            toast.error("Password must meet security criteria.");
            return false;
        }
        if (formData.parent_password !== formData.parent_confirmPswd) {
            toast.error("Passwords do not match.");
            return false;
        }
        return true;
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateParentForm()) return;

        try {
            const response = await axios.post("http://localhost:3000/api/auth/parent-register", formData, {
                headers: { "Content-Type": "application/json" },
            });

            toast.success(response.data.message);
            setTimeout(() => {
                window.location.href = response.data.redirect;
            }, 2000);
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.");
        }
    };

    return { handleSubmit, handleChange, formData };
};

export default useParent;
