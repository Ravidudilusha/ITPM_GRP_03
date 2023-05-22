import { Fragment, useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import React from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
const ViewAnswers = () => {
  //Variable to store Question Data
  const [Answers, setAnswers] = useState("");
  //Form Load Function
  useEffect(() => {
    if (!Answers) {
      getAnswers();
    }
  });
  //Get All Answers from API
  const getAnswers = () => {
    axios.get("http://localhost:8050/Answer/").then((response) => {
      console.log(response);
      setAnswers(response.data);
    });
  };
  //Delete Answer from API
  const DeleteAnswers = (id) => {
    axios.delete("http://localhost:8050/Answer/delete/"+id).then((response) => {
      console.log(response);
      //setAnswers(response.data);
      getAnswers()
    });
  };
  //Variable For Modal open and close
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  //Methods For Modal open and close
  const handleEditClose = () => setEdit(false);
  const handleEditShow = () => setEdit(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickEdit = (item) => {
    handleEditShow();
  };
  return (
    <Fragment>
      <AdminNavBar  ></AdminNavBar>

      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Answer Management</h1>
      <br></br>

      <br></br>
      <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>Content</th>
                <th style={{ textAlign: "center" }}>Question</th>
                <th style={{ textAlign: "center" }}>User</th>
                <th style={{ textAlign: "center" }}>createdAt</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Answers &&
                Answers.map((item) => {
                  return (
                    <tr>
                     {item.Content && <> <td style={{ textAlign: "center" }}>{item.Content}</td>
                     
                     {item.Question==null ?(<td style={{color:"red"}}>Deleted Question</td>):(<td style={{ textAlign: "center" }}>
                       {item.Question.Content}
                     </td>)  }
                    
                     <td style={{ textAlign: "center" }}>{item.User}</td>
                     <td style={{ textAlign: "center" }}>{item.createdAt}</td>
                     <td style={{ textAlign: "center" }}>
                       <button className="btn btn-danger" onClick={()=>{DeleteAnswers(item._id)}}>Delete</button>
                     </td></>}
                     
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};
export default ViewAnswers;
