import React from 'react'
import "./MyNotes.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';

const Mynotes = () => {

  const navigate = useNavigate();
 useEffect(()=>{
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    navigate("/login")
  }
 })

  return (
<Container>
    <div className='welcome'>WELCOME</div>
    </Container>
  )
}

export default Mynotes