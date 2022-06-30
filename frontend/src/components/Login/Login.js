import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate=useNavigate()


  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo){
     navigate('/mynotes')
    }
  }, [])
  

  const submitHandler= async (e)=>{
    e.preventDefault()
    console.log(email,password);
    try {
     const config={
       headers: {
         "Content-type": "application/json",
       }
     }
            //  setLoading(true)
             const {data} = await axios.post('/api/users/login',{
               email,
               password
             },config)
              
               console.log(data);
             localStorage.setItem("userInfo",JSON.stringify(data))
            
            
               navigate('/mynotes')
             
 
    } catch (error) {
     setError(error.response.data.message)
    //  setLoading(false)
     
    }
   }

  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="head">LOGIN</div>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  name='email'
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                /><p>{error}</p>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div>New Customer? <a href="/signup">Register Here</a></div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
