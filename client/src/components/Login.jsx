import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginWrapper from '../styles/LoginWrapper'
const Login = ({setRemember,remember}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
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
        setError(true);
      }else {
        setError(false);
      }
    },[password])
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(password.length<6  || password.match(regEx) !== null){
      setError(true);
      setLoading(false)
      return;
    }
    const response = await fetch("http://localhost:1000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();
    console.log(data);
    if(data.status === "Ok"){
      localStorage.setItem('token',data.token)
    //   toast.success("Login Successfull", {
    //     position: "top-right",
    //     duration: 4000,
    //     icon: '👏',
    //   })
      navigate('/dashboard');
    }else {
    //   toast.success(data.message, {
    //     position: "top-right",
    //     duration: 4000,
    //     icon: '👏',
    //   })
      setError(true);
    }
    setLoading(false)
  }

  return (
    <LoginWrapper>
        <form className='form' onSubmit={handleSignIn}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            {/* <input type="checkbox" value={remember} onChange={() => setRemember(!remember)} /> */}
            <button>Login</button>
        </form>

    </LoginWrapper>
  )
}

export default Login