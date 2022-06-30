import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mynotes" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
