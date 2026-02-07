import React, { useState, useEffect } from "react";
import { addUserApi, updateUserApi } from "../services/userApi";
import { checkValidData } from "../utils/validation";

const UserForm = ({ fetchUsers, closeForm, editUser, setEditUser }) => { 
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editUser) {
      setForm({
        firstName: editUser.firstName || "",
        lastName: editUser.lastName || "",
        phone: editUser.phone || "",
        email: editUser.email || "",
      });
    }
  }, [editUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setErrorMsg("All fields are required");
      return;
    }
    const message = checkValidData(form.email, form.phone);
    if (message) {
      setErrorMsg(message);
      return;
    }

    try {
      setLoading(true);
      if (editUser) {
        await updateUserApi(editUser.id, form);
        alert("User updated successfully");
      } 
      else {
        await addUserApi(form);
        alert("User added successfully ✅");
      }
      if (fetchUsers) await fetchUsers();

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

      setEditUser(null);
      setErrorMsg("");
      setLoading(false);
      if (closeForm) closeForm();
    } catch (error) {
      console.log("ERROR:", error);
      setLoading(false);
      setErrorMsg("Something went wrong");
    }
  };

  return (
    <div className="bg-white w-[400px] rounded-xl shadow-2xl p-6 relative">
      <button
        onClick={() => {
          if (closeForm) closeForm();
          if (setEditUser) setEditUser(null);
        }}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {editUser ? "Edit User" : "Add User"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded-lg"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded-lg"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded-lg"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded-lg"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errorMsg && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}

        <button
          disabled={loading}
          className="w-full bg-green-700 text-white p-2 rounded-lg font-semibold"
        >
          {loading
            ? "Saving..."
            : editUser
            ? "Update User"
            : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
