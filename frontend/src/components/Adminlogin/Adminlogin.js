import { set } from "mongoose";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Adminlogin.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Adminlogin() {
  const navigate = useNavigate();

  const Name = "admin@gmail.com";
  const pass = "1234";

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [error, seterror] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log(name, password);

    if (name == Name && password == pass) {
      console.log("success");
      localStorage.setItem("adminInfo", JSON.stringify(name));
      navigate("/adminhome");
    } else {
      seterror("email and password does not match");
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("adminInfo");
    if (userInfo) {
      navigate("/adminhome");
    }
  }, []);
  return (
    <div className="Login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5">
            <div className="head">
              ADMIN<span>LOGIN</span>
            </div>
            {error && <p style={{ color: "red" }}> {error}</p>}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
