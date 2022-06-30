import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminheader from "./components/Adminheader/Adminheader"
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Adminlogin from "./components/Adminlogin/Adminlogin";
import Adminhome from "./pages/Adminhome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mynotes" element={<Home/>}></Route>
        <Route path="/adminheader" element={<Adminheader/>}></Route>
        <Route path="/admin" element={<Adminlogin/>}></Route>
        <Route path="/adminhome" element={<Adminhome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
