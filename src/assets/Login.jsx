import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const handleSubmitt = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then(result => console.log(result))
      navigate('/home')
      .catch(error => console.log(error));
  };
  return (
    <div className="container col-sm-4 mt-4">
    <div className="card">
      <div className="card-body">
        <h2 className='text-success text-center'>SIGN IN</h2>
      <form onSubmit={handleSubmitt}>
<label  className="form-label">Email</label>
<input 
type="password" 
id="inputPassword5" 
className="form-control"
 aria-describedby="passwordHelpBlock"
 onChange={(e) => setEmail(e.target.value)}
 />

<label  className="form-label">Password</label>

<input type="password" 
id="inputPassword5" 
className="form-control" 
aria-describedby="passwordHelpBlock"
onChange={(e) => setPassword(e.target.value)}
/>
<div className="text-center mt-3">
    <button type="button" className="btn btn-success w-100 rounded-2">LOGIN</button>
</div>
</form>

      </div>

    </div>
   </div>
  )
}
