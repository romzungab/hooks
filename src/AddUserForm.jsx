import React, { useState } from "react";

export default function AddUserForm(props){
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  function handleInputChange(event){
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  function handleFormSubmit(event){
    event.preventDefault();
    if (!user.name || !user.username) 
        return;
   
    props.addUser(user);

    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  );
};

