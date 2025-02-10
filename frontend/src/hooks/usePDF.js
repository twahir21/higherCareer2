import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Custom Hook for Managing Users
export const usePDF = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Error fetching users.");
    }
  };

  // Approve User and Assign Role with Role Selection Popup
  const approveUser = async (username) => {
    try {
      const role = window.prompt("Assign role (parent/teacher):")?.toLowerCase();
      
      if (!role || (role !== "parent" && role !== "teacher")) {
        toast.warn("Invalid role selection. Approval canceled.");
        return;
      }

      const response = await fetch(`/api/users/${username}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(`User approved as ${role}!`);
        fetchUsers();
      } else {
        toast.error(result.message || "Failed to approve user.");
      }
    } catch (error) {
      console.error("Error approving user:", error);
      toast.error("Error approving user.");
    }
  };

  // Delete User
  const deleteUser = async (username) => {
    try {
      const response = await fetch(`/api/users/${username}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("User deleted successfully!");
        fetchUsers();
      } else {
        toast.error(result.message || "Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user.");
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, approveUser, deleteUser };
};
