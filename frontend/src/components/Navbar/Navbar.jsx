import React, { useState } from "react";
import "./Navbar.css";
import { GoDiffAdded, GoThreeBars } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(null);
  const navigate = useNavigate();
  const location=useLocation();

  return (
    <div className="navContainer">
      <div className="navbar">
      <div className="navItem">
        <p>Fish Area</p>
      </div>
      <div
        onClick={() => {
          setActiveNav("overview");
          navigate("/");
        }}
        className={`${
          activeNav === "overview" ? "activeNavItem" : ""
        } navItems`}
      >
        <GoThreeBars className="navIcon" />
        <p>Overview</p>
        
      </div>
      <div
        onClick={() => {
          setActiveNav("edit");
          navigate("/edit");
        }}
        className={`${activeNav === "edit" ? "activeNavItem" : ""} navItems`}
      >
        <FaEdit className="navIcon" />
        <p>Edit Area</p>
        
      </div>
      <div
        onClick={() => {
          setActiveNav("add");
          navigate("/add");
        }}
        className={`${activeNav === "add" ? "activeNavItem" : ""} navItems`}
      >
        <GoDiffAdded className="navIcon" />
        <p>Add Area</p>
        
      </div>
      </div>
     {location.pathname==="/" && <div className="searchDiv">
        <input type="text" placeholder="search" className="searchInput" />
        <BsSearch className="searchIcon"/>
      </div>}
      
    </div>
  );
};

export default Navbar;
