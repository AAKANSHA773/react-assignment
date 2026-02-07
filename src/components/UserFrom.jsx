import React, { useState } from "react";
import axios from "axios";
import { checkValidData } from "../utils/validation";

const UserForm = ({ fetchUsers, closeForm }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

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
      await axios.post("http://localhost:3001/users", form);
      if (fetchUsers) await fetchUsers();

      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

      setErrorMsg("");
      setLoading(false);
      alert("User added successfully ✅");
      if (closeForm) closeForm();
    } catch (error) {
      console.log("ERROR:", error);
      setLoading(false);
      setErrorMsg("Error adding user");
    }
  };

  return (
    <div className="bg-white w-[400px] rounded-xl shadow-2xl p-6 relative">
      <button
        onClick={closeForm}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add User
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-lg outline-none"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <input
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-lg outline-none"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <input
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-lg outline-none"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-2 rounded-lg outline-none"
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold shadow"
        >
          {loading ? "Saving..." : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
