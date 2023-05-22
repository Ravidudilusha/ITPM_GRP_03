import { Fragment, useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import React from "react";
import axios from "axios";
import { Button, FormGroup, Modal } from "react-bootstrap";

const ViewQuestions = () => {
  //Variable to store Question Data
  const [Questions, setQuestions] = useState("");

  //Variable to add and update questions
  const [Content, setContent] = useState("");
  const User = "Hashini";
  const d = Date.now();

  //Varibale to store Updating Item
  const [updateID, setUpdateID] = useState("");

  //Form Load Function
  useEffect(() => {
    if (!Questions) {
      getQuestions();
    }
  });
  //Get All Questions from API
  const getQuestions = () => {
    axios.get("http://localhost:8050/Question/").then((response) => {
      console.log(response);
      setQuestions(response.data);
    });
  };

  //Delete Questions from API
  const deleteQuestions = (id) => {
    axios
      .delete("http://localhost:8050/Question/delete/" + id)
      .then((response) => {
        console.log(response);
        getQuestions();
      });
  };

  //Add Questions
  const addQuestion = () => {
    const model = { Content: Content, User: User, createdAt: d };
    axios.post("http://localhost:8050/Question/add", model).then((response) => {
      getQuestions();
      handleClose();
      setContent("");
    });
  };

  //Update Questions
  const updateQuestion = () => {
    const model = { Content: Content, User: User, createdAt: d };
    
    axios
      .put("http://localhost:8050/Question/update/" + updateID, model)
      .then((response) => {
        getQuestions();
        handleEditClose();
        setContent("");
      });
  };

  //Variable For Modal open and close
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  //Methods For Modal open and close
  const handleEditClose = () => setEdit(false);
  const handleEditShow = () => {
    setEdit(true);
   
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickEdit = (item) => {
    handleEditShow();
    setContent(item.Content);
    setUpdateID(item._id)
  };
  return (
    <Fragment>
      <AdminNavBar Questions={Questions} setQuestions={setQuestions}></AdminNavBar>
      {/* Add Modal */}
      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup className="form-group">
              <label>User</label>
              <input className="form-control" value={User} disabled />
            </FormGroup>
            <FormGroup className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                value={Content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                addQuestion();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {/* Update Modal */}
      <>
        <Modal show={edit} onHide={handleEditClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Update Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormGroup className="form-group">
              <label>User</label>
              <input className="form-control" value={User} disabled />
            </FormGroup>
            <FormGroup className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                value={Content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{updateQuestion()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <br></br>
      <br></br>
      <h1 style={{ textAlign: "center" }}>Question Management</h1>
      <br></br>
      <br></br>
      <button
        className="btn btn-success"
        style={{ marginLeft: "90%" }}
        onClick={handleShow}
      >
  
        + Add Question
      </button>
      <br></br>
      <br></br>
      <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Content</th>
                <th>User</th>
                <th>createdAt</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Questions &&
                Questions.map((item) => {
                  return (
                    <tr>
                      <td>{item.Content}</td>
                      <td>{item.User}</td>
                      <td>{item.createdAt}</td>
                      <td style={{ textAlign: "center" }}>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            clickEdit(item);
                          }}
                        >
                          Edit
                        </button>{" "}
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteQuestions(item._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
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
export default ViewQuestions;
