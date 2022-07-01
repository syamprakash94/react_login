import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserTable() {
  const [details, setdetails] = useState([]);

  const editHandler = async (userId) => {
    try {
      navigate(`/adminhome/edituser/${userId}`);
    } catch (error) {
      throw new error(error.response.data.message);
    }
  };

  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem("adminInfo");
    if (!userInfo) {
    
    }

    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.get("/adminhome", config);
        console.log("bfvbvb", data);
        setdetails(data);
        
      } catch (error) {
        throw new error(error.response.data.message);
      }
    })();
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {details.map((user, index) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button  onClick={() => {
            editHandler(user._id);
          }}
                >Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserTable;
