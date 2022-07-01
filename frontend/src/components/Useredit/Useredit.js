import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edituser() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [error, setError] = useState()

  const userId = useParams();

  const navigate = useNavigate()

  console.log("fdfd", userId);
  useEffect(() => {
    // const userInfo=localStorage.getItem("adminInfo")
    // if(!userInfo){
    //   navigate("/admin");
    // }

    axios
      .get(`/adminhome/edituser/${userId.userid}`)
      .then((resp) => {
        console.log(resp);
        console.log(resp.data.name);
        setname(resp.data.name);
        setemail(resp.data.email);
      })
      .catch((err) => {});
  }, []);

  const onSubmit = async (e) => {
  

    try {
      const confiq = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.patch(
        `/adminhome/editerUserDetails/${userId.userid}`,
        {
          name,
          email,
        },
        confiq
      );
      navigate('/adminhome')
     
      console.log("updatae",data);
    } catch (error) {
      console.log(error);
      console.log(error.response.status);
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="head">EDIT USER</div>
            
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div>Name</div>
                <Form.Control type="name" value={name} placeholder="Enter email" 
                onChange={(e) => setname(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} placeholder="Password" 
                onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit"  onClick={onSubmit}>
                Submit
              </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edituser;
