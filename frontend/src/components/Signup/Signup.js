import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function BasicExample() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("");

  const [ setError] = useState('');
  const [message, setMessage] = useState(false);

  const navigate = useNavigate()

  const submitHandler =async (e)=>{
    e.preventDefault();
    console.log(password);
    console.log(confirmpassword);

    if(password!==confirmpassword) {
      console.log("Passwords DO not Match");
      setMessage('Passwords DO not Match')

    }else{
   setMessage(null)
   try {
    const config ={
      headers:{
        "Content-type":"application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/signup",
      {
        name,
        email,
        password,
        confirmpassword
      },
      config
    );

    navigate("/login");
   
   } catch (error) {
    setError(error.response.data.message)
   }
  
    }


  }

  return (
    <div className="Login">
      <div className="container">

        
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="head">SIGNUP</div>
            <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="Name" value={name} placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)}
                />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" value={email} placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}
                />
               
              </Form.Group>
              {message && <p style={{"color":"red"}}>{message}</p>}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" value={password} placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" value={confirmpassword} placeholder="Confirm Password" 
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
             
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
