import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    mobile: "",
    password: ""
  });
  const [users, setUsers] = useState([]);

  function changeHandler(e) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    console.log(formData); // Display the current form data in the console
    setFormData({
      email: "",
      username: "",
      mobile: "",
      password: ""
    });
  }

  return (
    <div className="container">
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            placeholder="Mobile"
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="user-list">
        <h2>User List:</h2>
        {users.map((user, index) => (
          <div key={index} className="user-item">
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Password: {user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
