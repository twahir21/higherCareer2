import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const useParent = () => {
    const formRef = useRef(null);

    useEffect(() => {
        const parentRegisterForm = document.getElementById("parentRegisterForm");
        const parent_UserName = document.getElementById("parent_UserName");
        const parent_fullName = document.getElementById("parent_fullName");
        const parent_email = document.getElementById("parent_email");
        const parent_tel = document.getElementById("parent_tel");
        const relationship = document.getElementById("relationship");
        const student_fullName = document.getElementById("student_fullName");
        const student_class = document.getElementById("student_class");
        const parent_password = document.getElementById("parent_password");
        const parent_confirmPswd = document.getElementById("parent_confirmPswd");

        if (!parentRegisterForm) return;

        // Regular expressions for validation
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        const fullNameRegex = /^[a-zA-Z ,.'-]{1,50}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        const safeTextRegex = /^[a-zA-Z0-9 _.,'"!?-]{1,100}$/;

        // Helper function for sanitization
        const sanitizeInput = (input) => {
            return input
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;")
                .trim();
        };

        // Validation function
        const validateParentForm = () => {
            const sanitizedUsername = sanitizeInput(parent_UserName.value);
            const sanitizedFullName = sanitizeInput(parent_fullName.value);
            const sanitizedEmail = sanitizeInput(parent_email.value);
            const sanitizedPhone = sanitizeInput(parent_tel.value);
            const sanitizedRelationship = sanitizeInput(relationship.value);
            const sanitizedStudentName = sanitizeInput(student_fullName.value);
            const sanitizedPassword = sanitizeInput(parent_password.value);
            const sanitizedConfirmPassword = sanitizeInput(parent_confirmPswd.value);

            if (!usernameRegex.test(sanitizedUsername)) {
                toast.error("Username must be 3-20 alphanumeric characters.");
                return false;
            }
            if (!fullNameRegex.test(sanitizedFullName)) {
                toast.error("Please enter a valid full name.");
                return false;
            }
            if (!emailRegex.test(sanitizedEmail)) {
                toast.error("Please enter a valid email address.");
                return false;
            }
            if (!phoneRegex.test(sanitizedPhone)) {
                toast.error("Please enter a valid phone number.");
                return false;
            }
            if (!safeTextRegex.test(sanitizedRelationship)) {
                toast.error("Enter a valid relationship to the student.");
                return false;
            }
            if (!fullNameRegex.test(sanitizedStudentName)) {
                toast.error("Enter a valid student name.");
                return false;
            }
            if (!passwordRegex.test(sanitizedPassword)) {
                toast.error("Password must meet security criteria.");
                return false;
            }
            if (sanitizedPassword !== sanitizedConfirmPassword) {
                toast.error("Passwords do not match.");
                return false;
            }
            return true;
        };

        // Event listener for form submission
        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!validateParentForm()) return;

            // Prepare sanitized data for submission
            const formData = {
                username: sanitizeInput(parent_UserName.value),
                password: sanitizeInput(parent_password.value),
                fullName: sanitizeInput(parent_fullName.value),
                email: sanitizeInput(parent_email.value),
                tel: sanitizeInput(parent_tel.value),
                relationship: sanitizeInput(relationship.value),
                student_fullName: sanitizeInput(student_fullName.value),
                student_class: sanitizeInput(student_class.value),
            };

            const url = "/auth/parent-register";

            try {
                const response = await axios.post(url, formData, {
                    headers: { "Content-Type": "application/json" },
                });

                toast.success(response.data.message);
                setTimeout(() => {
                    window.location.href = response.data.redirect;
                }, 2000);
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message || "An error occurred.");
                } else {
                    toast.error("Network error, please try again.");
                }
            }
        };

        // Attach event listener
        parentRegisterForm.addEventListener("submit", handleSubmit);
        formRef.current = parentRegisterForm;

        // Cleanup function to remove event listener
        return () => {
            if (formRef.current) {
                formRef.current.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);
};

export default useParent;
