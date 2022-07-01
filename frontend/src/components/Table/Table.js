import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Table.css";

function UserTable() {
  const [details, setdetails] = useState([]);
  const [refresh, setRefresh] = useState()
  const [search, setSearch] = useState("");

  const editHandler = async (userId) => {
    try {
      navigate(`/adminhome/edituser/${userId}`);
    } catch (error) {
      throw new error(error.response.data.message);
    }
  };

  const navigate = useNavigate();

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

  const deleteuser = async (userId) => {
    if (window.confirm(`Sure to Delete?`)) {
        var index=0
        details.map((obj) => {
            console.log("fsdf", obj);
            if (obj._id == userId) {
               index = details.indexOf(obj);      
            }
          });
        const test = [...details];
    
        test.splice(index, 1);
        setdetails(test);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        await axios.delete("/adminhome/deleteUser", {
            
          params: {
            id: userId,
            
          },
          config,
          
        });
      
        setRefresh(!refresh);
        navigate('/adminhome')
      } catch (error) {
        throw new error(error.response.data.message);
      }
    }
  };
  return (
    <Container>
        <div className="search" >
              <input
              
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                class="px-4 py-2 w-80"
                placeholder="Search..."
              />
              <Link to={`/name/${search.length == 0 ? "nofilter" : search}`}>
                <a style={{textDecoration:'none'}} ><Button color="secondary" variant="contained" >Search</Button> </a>
              </Link>
            </div>
      <Table striped bordered hover className="table">
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
                <button className=" bg-primary editbutton1"
                  onClick={() => {
                    editHandler(user._id);
                  }}
                >
                  Edit
                </button>
                <button className=" bg-light editbutton2"
                  onClick={() => {
                    deleteuser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserTable;
