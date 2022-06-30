import React from "react";
import Adminheader from "../components/Adminheader/Adminheader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Adminhome() {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("adminInfo");
    if (!userInfo) {
      navigate("/admin");
    }
  }, []);
  return (
    <div>
      <Adminheader />
    </div>
  );
}

export default Adminhome;
