import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import logo from './gitaure.png';
import './navbar.css';
import person from './person.png';
import { logout } from '../../services/authUtils';
import { UserContext } from '../../services/UserContext';
require('dotenv').config();

const notSafePassword = process.env.REACT_APP_ADMINPASSWORD;
function NavBar() {
  const [admin, setAdmin] = useState(false);
  const context = React.useContext(UserContext);
console.log(context)
  const logoutFunc = async () => {
    context.logUserOut();
    logout();
  }

  const adminValidation = () => {
   const password =  prompt('please enter the password: ');
    if(password === notSafePassword){
      setAdmin(true);
    } else {
      alert("Wrong Password")
    }
  }
  return (
    
    <nav className="navbar"> 
    <div className="navbar__container">
          <Link className="navbar__links" to="/">
              <img className="navbar__logo" src={logo} alt="music-logo"></img>
              <p>Fullstack Music Project</p>
              </Link>
                <div className="navbar__line" />
                </div>
                <div className="navbar__container">{admin ? 
                <Link className="navbar__links" to="/api/add">Add</Link> :
                <button className="navbar__links" onClick={()=> adminValidation()}>Add</button> 
                }
              <Link className="navbar__links" to="/api/search">Search</Link>
                  
                </div>
                <div className="navbar__container">
                <div className="navbar__line" />
                <Link to="/api/login">
                <button onClick={() => logoutFunc()}>Logout</button>
                </Link>
                <Link  className="navbar__links navbar__links--end" to="/api/profile">
                <img className="navbar__logo" src={person} alt="person-logo"></img>
              <div>{context.name}</div>
                    </Link>
                    </div>
        </nav>
  );
}

export default React.memo(NavBar);