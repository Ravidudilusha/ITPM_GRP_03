import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/problems">Problem</a>
          <a href="/qanda">Questions & Answers</a>
          <a href="/solutions">Solutions</a>
          <a href="/">Community Guidelines</a>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <button className="open" onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
      {/* <div className="rightSide">
        <input type="text" placeholder="Search Here" />
        <button>
          <SearchIcon />
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
