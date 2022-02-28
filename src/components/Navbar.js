import React, {Component} from "react";
//import Home from './pages/Home';
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";
//import Login from './pages/Login';
////import User from './pages/UserAccount';
 import "../App.css";

export default class Navbar extends Component {

  state= {
    isOpen: false
  };

  
  handleToggle = () => {
    this.setState = ({
      isOpen: !this.state.isOpen
    });
  
  }

  render() {

    return (
    <nav className = "navbar" >
      <div className = "nav-center" >
      <div className = "nav-header" >
      <Link to= "/" >
        <img src = "" alt= "SECUREX" />
      </Link>


      <button type = "button" className = "nav-btn" >
        <FaAlignRight onClick = {this.handleToggle} className = "nav-icon" />
      </button>
      </div>
        <ul 
          className = {this.state.isOpen? "nav-links show-nav" : "nav-links"} 
        >
          <li>
            <Link to= "/" >Home</Link>
          </li>
          <li>
            <Link to = "/Rooms" >Rooms</Link>
          </li>
          <li>
            <Link to = "/AboutUs" >AboutUs</Link>
          </li>
          <li>
            <Link to = "/Contact" >Contact</Link>
          </li>
         
        </ul>
      </div>
    </nav>
    );
  }


}
