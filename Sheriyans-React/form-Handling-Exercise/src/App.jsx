import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);

  const handleSetUsers = (data) => {
    setUsers([...users, data]);
  };

  const handleRemoveUser = (idx) => {
    setUsers(users.filter((_, index) => index !== idx));
  };

  return (
    <div className="font-Poppins flex h-screen w-full items-center justify-center bg-slate-500">
      <div className="container mx-auto">
        <Cards users={users} handleRemoveUser={handleRemoveUser} />
        <Form handleSetUsers={handleSetUsers} />
      </div>
    </div>
  );
}

export default App;
