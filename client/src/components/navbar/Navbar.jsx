import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (handler) => {
    navigate(`/${handler}`);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Indian Booking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <div> Welcome {user} </div>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={()=>handleLogin('register')}>Register</button>
            <button className="navButton" onClick={()=>handleLogin('login')}>
              Sign in  
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
