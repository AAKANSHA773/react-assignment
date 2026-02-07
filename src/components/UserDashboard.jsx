import { useState } from "react";
import UserForm from "./UserFrom";
import UserList from "./UserList";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-slate-800">
            User Management Dashboard
          </h1>

          <button
            onClick={() => setShowForm(true)}
            className="bg-violet-600 hover:bg-violet-600 text-white px-5 py-2 rounded-lg shadow"
          >
            + Add User
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 p-4">

     
        {showForm && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <UserForm closeForm={() => setShowForm(false)} />
          </div>
        )}

        <UserList/>
      </div>
    </div>
  );
}

export default App;
