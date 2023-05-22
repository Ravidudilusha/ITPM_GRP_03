import React, { useState } from "react";
import "../App.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const AdminNavBar = (props) => {
  
  const [showLinks, setShowLinks] = useState(false);
const Questions=props.Questions;
const setQuestions=props.setQuestions;


  const[Keyword,setKeyword]=useState("")

  const getSearch=()=>{
    const model = { keyword: Keyword };
    axios.post("http://localhost:8050/Question/search", model).then((response) => {
     setQuestions(response.data)
    });
  }

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/questions">View All Questions</a>
          <a href="/admin">View All Answers</a>
          {/* <a href="/solutions">Solutions</a>
          <a href="/community">Community Guidelines</a> */}
          {/* <button>Login</button>
          <button>Sign Up</button> */}
        </div>
        <button className="open" onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Search Here" onChange={(e)=>{setKeyword(e.target.value)}} />
        <button onClick={()=>{getSearch()}}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default AdminNavBar;