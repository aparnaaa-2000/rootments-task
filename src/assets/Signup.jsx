import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then(result => 
        {console.log(result)
        if(result.data === "success")
      navigate("/login")
  })
      

      .catch(error => console.log(error));
  };

  return (
    <div className="container col-sm-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="text-success text-center">SIGN UP</h2>

         
          <form onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              aria-describedby="nameHelpBlock"
            />

            <label className="form-label">Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              aria-describedby="emailHelpBlock"
            />

            <label className="form-label">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-success w-100 rounded-2">
                REGISTER
              </button>
            </div>

            <div className="mt-3">
              <p className="d-inline">Already have an account?</p>
              <a href="login" className="text-success d-inline">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
