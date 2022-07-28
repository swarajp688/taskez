import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const rememberMe = localStorage.getItem('token');
  console.log();
  useEffect(()=>{
    if(!rememberMe){
      console.log('rememberMe');
      navigate('/');
    }
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard