import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Mynotes = () => {

  const navigate = useNavigate();
 useEffect(()=>{
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    navigate("/login")
  }
 })

  return (

    <div title='WELCOME'>WELCOME</div>
  )
}

export default Mynotes