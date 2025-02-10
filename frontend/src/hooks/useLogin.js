import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/; // Alphanumeric + underscores, 3-20 characters
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

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

export const useLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Validate login form
  const validateLogin = () => {
    const sanitizedUsername = sanitizeInput(credentials.username);
    const sanitizedPassword = sanitizeInput(credentials.password);

    if (!sanitizedUsername || !sanitizedPassword) {
      toast.info("All form inputs must be filled with some data");
      return false;
    }

    if (!usernameRegex.test(sanitizedUsername)) {
      toast.error("Invalid username.");
      return false;
    }

    if (!passwordRegex.test(sanitizedPassword)) {
      toast.error("Invalid password. Password must have at least 8 characters.");
      return false;
    }

    return true;
  };

  // Handle login
  const handleLogin = async (event) => {
    event.preventDefault();

    if (!validateLogin()) return;

    const sanitizedData = {
      username: sanitizeInput(credentials.username),
      password: sanitizeInput(credentials.password),
    };

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        setTimeout(() => {
          if (result.redirect) {
            window.location.href = result.redirect;
          }
        }, 1500);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(`Failed to submit form: ${error.message}`);
    }
  };

  // Check session expiration
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("/admin");
        if (response.status === 401) {
          const data = await response.json();
          if (data?.sessionExpired) {
            toast.info(data.message, { autoClose: 1500 });
            setTimeout(() => {
              window.location.href = "/login";
            }, 1500);
          }
        }
      } catch (error) {
        console.error("Session check error:", error);
      }
    };

    checkSession();
  }, []);

  return { credentials, handleChange, handleLogin };
};
