import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchIcon from "@mui/icons-material/Search";

function Solutions() {
  return (
    <div className="App">
      <Navbar />
      <input type="text" placeholder="Search Here" />
      <button>
        <SearchIcon />
      </button>
      <Footer />
    </div>
  );
}
export default QandA;
