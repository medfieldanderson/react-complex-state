import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    // object destructuring
    const { value, name } = e.target;

    console.log(`Target: ${e.target.name} Value: ${e.target.value}`);
    // React retains access to previous value of control in the state fn, so we can reset attributes that did not change with their original value.
    setUser((prevValue) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: prevValue.lastName,
        };
      } else if (name === "lastName") {
        return {
          firstName: prevValue.firstName,
          lastName: value,
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {user.firstName} {user.lastName}
      </h1>
      <form>
        <input
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          value={user.firstName}
        />
        <input
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          value={user.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
