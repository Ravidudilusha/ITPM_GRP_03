import React, { Component } from "react";


class  Header extends Component{
render(){
    return(
      <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/report">Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">Add Article</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/edit">Edit Aritcle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="EReport" >Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
}
export default Header;