import React, { useState, useEffect } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Click Me");
  const [users, setUsers] = useState([]);

  useEffect(async() => {
    await fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
  }, [])
  
  function handleClick() {
    return setButtonText("I have been clicked");
  }

  return (
    <div className="section">
      <button onClick={handleClick}>{buttonText}</button>
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
          </div>
      ))}
    </div>
  )
}

export default App;
