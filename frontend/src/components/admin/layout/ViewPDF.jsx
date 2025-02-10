
import { useEffect } from "react";
import { usePDF } from "./usePDF";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ViewPDF = () => {
  const { users, approveUser, deleteUser } = usePDF();

  useEffect(() => {
    toast.configure();
  }, []);

  return (
    <div className="container">
      <section id="verifyUsersSection" className="content-wrapper">
      <style>
          {`
            h1 {
              text-align: center;
            }
            #verifyUsersSection {
              caret-color: transparent;
            }
            .user-table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border-radius: 8px;
            }
            .user-table th, .user-table td {
              padding: 16px;
              text-align: left;
              border-bottom: 1px solid #ddd;
              border-right: 1px solid #ddd;
              font-size: 1em;
            }
            .user-table th {
              background-color: #2c3e50;
              color: white;
              font-weight: bold;
              text-transform: uppercase;
            }
            .user-table tr:hover {
              background-color: rgba(0, 123, 255, 0.1);
              transition: background-color 0.3s ease;
            }
            .user-table td {
              background-color: #fff;
            }
          `}
        </style>
        <h1 className="text-center">User Management</h1>
        <div className="container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Student/Level</th>
                <th>Class/Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.student_fullName || user.qualifications}</td>
                    <td>{user.student_class || user.subjectTaught}</td>
                    <td>{user.isApproved ? "Approved" : "Pending"}</td>
                    <td>
                      <button className="accept-btn" onClick={() => approveUser(user.username)}>
                        Accept
                      </button>
                      <button className="reject-btn" onClick={() => deleteUser(user.username)}>
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

