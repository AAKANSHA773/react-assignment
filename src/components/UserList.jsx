import React from "react";
import { deleteUserApi } from "../services/userApi"; // make sure folder name = services

const UserList = ({ users = [], fetchUsers, setEditUser, openForm }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await deleteUserApi(id);
      if (fetchUsers) {
        await fetchUsers();
      }
      console.log("User deleted successfully");
    } catch (error) {
      console.log("DELETE ERROR:", error);
      alert("Delete failed");
    }
  };
  const handleEdit = (user) => {
    if (setEditUser) setEditUser(user);
    if (openForm) openForm();
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          User Management
        </h2>
        {users.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No users added yet
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-sm">
                  <th className="p-3">Name</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 font-medium text-gray-800">
                      {user.firstName} {user.lastName}
                    </td>

                    <td className="p-3 text-gray-600">
                      {user.phone}
                    </td>

                    <td className="p-3 text-gray-600">
                      {user.email}
                    </td>

                    <td className="p-3 flex justify-center gap-3">

                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
