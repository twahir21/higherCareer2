document.addEventListener("DOMContentLoaded", async () => {
    try {
        await renderUsers();
    } catch (error) {
        console.error("Error loading users:", error);
        Swal.fire({
            icon: "error",
            title: "Oops 😟",
            text: "An error occurred while loading users.",
        });
    }
});

// Fetch users from the server
async function fetchUsers() {
    try {
        const response = await fetch(`/api/users?t=${new Date().getTime()}`); // Add timestamp to URL

        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        return data.success ? [...data.parents, ...data.teachers] : [];
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

// Render users in the table
async function renderUsers() {
    const userList = document.getElementById("user-list");

    try {
        const users = await fetchUsers();



        if (users.length === 0) {
            userList.innerHTML = '<tr><td colspan="7">No users found.</td></tr>';
            return;
        }

        userList.innerHTML = ""; // Clear only after fresh data arrives

        users.forEach((user) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.fullName}</td>
                <td>${user.email}</td>
                <td>${user.students ? user.students.map(s => s.fullName).join(", ") : user.qualifications}</td>
                <td>${user.students ? user.students.map(s => s.className).join(", ") : user.subjectTaught}</td>
                <td>${user.isApproved ? "Approved" : "Pending"}</td>
                <td>
                    ${!user.isApproved ? `<button class="accept-btn" onclick="approveUser('${user.username}')">Accept</button>` : ""}
                    <button class="reject-btn" onclick="deleteUser('${user.username}')">Reject</button>
                </td>
            `;
            userList.appendChild(row);
        });

    } catch (error) {
        console.error("Error rendering users:", error);
        userList.innerHTML = '<tr><td colspan="7">Error loading users.</td></tr>';
    }
}

// Approve User (Assign Role)
async function approveUser(username) {
    try {
        const { value: role } = await Swal.fire({
            title: "Assign Role",
            input: "select",
            inputOptions: {
                parent: "Parent",
                teacher: "Teacher",
            },
            inputPlaceholder: "Select a role",
            showCancelButton: true,
        });

        if (!role) {
            Swal.fire({
                icon: "info",
                title: "Cancelled",
                text: "No role selected. User approval not processed.",
            });
            return;
        }

        const response = await fetch(`/api/users/${username}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role }),
        });

        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Failed to approve user");

        Swal.fire({
            icon: "success",
            title: "Success 😊",
            text: result.message,
            timer: 2000,
        });
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms before fetching data
        await renderUsers(); // Refresh the user list after approval

    } catch (error) {
        console.error("Error approving user:", error);
        Swal.fire({
            icon: "error",
            title: "Oops 😟",
            text: "An error occurred while approving the user.",
        });
    }
}

// Reject/Delete User
async function deleteUser(username) {
    try {
        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "This action is irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (!confirmation.isConfirmed) return;

        const response = await fetch(`/api/users/${username}`, { method: "DELETE" });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Error deleting user");

        Swal.fire({
            title: "Deleted!",
            text: "User has been removed.",
            icon: "success",
            timer: 2000,
        });
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms before fetching data
        await renderUsers(); // Refresh the user list after deletion

    } catch (error) {
        console.error("Error deleting user:", error);
        Swal.fire({
            icon: "error",
            title: "Oops 😟",
            text: "An error occurred while deleting the user.",
        });
    }
}
