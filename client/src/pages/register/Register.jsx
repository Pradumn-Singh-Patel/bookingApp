import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS file
import "../login/Login.css";
import axios from "axios";
import { baseUrl } from "../../hooks/api";

function Register() {
  const [userData, setUserData] = useState({
    username: undefined,
    email: undefined,
    country: undefined,
    img: undefined,
    city: undefined,
    phone: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    await axios.post(`${baseUrl}/auth/register`,userData)
    navigate('/login')
    console.log(userData);
    }catch (error) {
        
    }
  };

  return (
    <div className="login">
      <div className="lContainer" style={{height:'auto'}}>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="file"
          placeholder="img"
          id="img"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="tel"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button
          // disabled={loading}
          onClick={handleSubmit}
          className="lButton"
        >
          Register
        </button>
        {/* <div style={{width:'100%'}}>
         {error && <h4 style={{color :"white"}}>{error}</h4>}
         </div> */}
      </div>
    </div>
  );
}

export default Register;
