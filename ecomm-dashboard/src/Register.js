import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  async function signUP() {
    let item = { name, email, password };
    // console.warn(item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    history.push("/login");
    // console.warn("Result", result);
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          placeholder="name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="text"
          placeholder="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          placeholder="pasword"
        />
        <br />
        <button onClick={signUP} className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Register;
