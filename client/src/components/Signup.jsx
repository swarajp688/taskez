import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginWrappper from "../styles/LoginWrapper";
const Signup = () => {
  const [name, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState('');
  const [errorWarning,setErrorWarning]=useState(false);
  const navigate = useNavigate();
  const regEx = /^[0-9a-zA-Z]+$/;
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate('/dashboard');
    }
  },[])
  useEffect(()=>{
    if(password.length < 6 || password.match(regEx) !== null){
      setErrorWarning(true);
    }else {
      setErrorWarning(false);
    }
  },[password])
  const registerUser = async (e) => {
    e.preventDefault();
    if(password.length < 6  || password.match(regEx) !== null){
      setErrorWarning(true);
      return;
    }
    const response = await fetch("http://localhost:1000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json();
   
  };
  return (
    <LoginWrappper>
      <p>{errorWarning ? "Please Fill All Field Correctly" : null}</p>
      <form className='form' onSubmit={registerUser}>
        
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setUserName(e.target.value)}
        placeholder="Name"
          required
        />
        
        <input
            required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
        required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
         <div className='msg'>
              <p className='color-blue'>Minimum 6 and alphanumeric</p>
            </div>
        <button  className= {errorWarning ? "disabled" : "btn"}   >Signup</button>
      </form>
    </LoginWrappper>
  );
};

export default Signup;