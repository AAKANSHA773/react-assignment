import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phone || !email) {
      alert("All fields are required");
      return;
    }

    const newUser = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
      email,
    };

    addUser(newUser);

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md " >
      <h2 className="text-2xl font-bold mb-4">Add User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
