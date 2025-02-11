document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await fetchUsers();
        renderUsers(users);
    } catch (error) {
        console.error('Error loading users:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops 😟',
            text: 'An error occurred while loading users.',
        });
    }
});

// Fetch user data from the server
async function fetchUsers() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

// Render users in the table
function renderUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear the existing list

    if (users.length === 0) {
        userList.innerHTML = '<tr><td colspan="7">No users found.</td></tr>';
    }

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.student_fullName || `${user.qualifications}`}</td>
            <td>${user.student_class || `${user.subjectTaught}`}</td>
            <td>${user.isApproved ? 'Approved' : 'Pending'}</td>
            <td>
                <button class="accept-btn" onclick="approveUser('${user.username}')">Accept</button>
                <button class="reject-btn" onclick="deleteUser('${user.username}')">Reject</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Handle accept/reject action
async function changeUserStatus(username, isApproved) {
    try {
        const response = await fetch(`/api/users/${username}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isApproved }),
        });

        const result = await response.json();
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success 😊',
                text: result.message,
                showConfirmButton: false,
                timer: 2000,
            });
            const users = await fetchUsers(); // Refresh user list
            renderUsers(users);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Failed 😔',
                text: result.message || 'Failed to update user status',
                showConfirmButton: false,
                timer: 2000,
            });
        }
    } catch (error) {
        console.error('Error updating user status:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops 😟',
            text: 'An error occurred while updating user status.',
        });
    }
}

// Delete user action
async function deleteUser(username) {
    try {
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (confirmation.isConfirmed) {
            const response = await fetch(`/api/users/${username}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            if (response.ok) {
                Swal.fire({
                    title: 'Deleted! 😊',
                    text: 'User has been deleted.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,
                });
                const users = await fetchUsers(); // Refresh user list
                renderUsers(users);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed 😔',
                    text: result.message || 'An error occurred while deleting the user.',
                });
            }
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops 😟',
            text: 'An error occurred while deleting the user.',
        });
    }
}

async function approveUser(username) {
    try {
        // Show Swal popup to select a role
        const { value: role } = await Swal.fire({
            title: 'Assign Role',
            input: 'select',
            inputOptions: {
                parent: 'Parent',
                teacher: 'Teacher',
            },
            inputPlaceholder: 'Select a role',
            showCancelButton: true,
        });

        if (!role) {
            // If the admin cancels or doesn't select a role, stop further actions
            Swal.fire({
                icon: 'info',
                title: 'Cancelled',
                text: 'No role selected. User approval not processed.',
            });
            return;
        }

        // Send PATCH request to approve the user and assign role
        const response = await fetch(`/api/users/${username}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role }),
        });

        const result = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success 😊',
                text: result.message,
                showConfirmButton: false,
                timer: 2000,
            });

            // Refresh the user list
            const users = await fetchUsers();
            renderUsers(users);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Failed 😔',
                text: result.message || 'Failed to approve user',
            });
        }
    } catch (error) {
        console.error('Error approving user:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops 😟',
            text: 'An error occurred while approving the user.',
        });
    }
}