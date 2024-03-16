import "./navbar.css"
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = ()=>{
 navigate('/login')
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/' style={{color:'inherit',textDecoration:'none'}}>
        <span className="logo">Indian Booking</span>
        </Link>
        {user ? user : (
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar