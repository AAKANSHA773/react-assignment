import { useEffect, useState } from "react";
import UserForm from "./UserFrom";
import UserList from "./UserList";
import { getUsers } from "../services/userApi"; // ensure folder = services

function UserDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.log("Fetch error", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-slate-800">
            User Management Dashboard
          </h1>

          <button
            onClick={() => {
              setEditUser(null);
              setShowForm(true);
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg shadow"
          >
            + Add User
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 p-4">
        {showForm && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <UserForm
              fetchUsers={fetchUsers}
              editUser={editUser}
              setEditUser={setEditUser}
              closeForm={() => setShowForm(false)}
            />
          </div>
        )}

        <UserList
          users={users}
          fetchUsers={fetchUsers}
          setEditUser={setEditUser}
          openForm={() => setShowForm(true)}
        />
      </div>
    </div>
  );
}

export default UserDashboard;
