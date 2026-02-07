import React, { useState } from "react";
import axios from "axios";
import { checkValidData } from "../utils/validation";

const UserForm = ({ fetchUsers }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

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
      await axios.post("http://localhost:3001/users", form);
      fetchUsers();

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

      setErrorMsg("");
      alert("User added successfully ✅");
    } catch (error) {
      console.log(error);
      setErrorMsg("Error adding user");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          className="w-full border p-2 rounded"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

    
        {errorMsg && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
