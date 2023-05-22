import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/layouts/Row";
import waste from "../components/images/waste.jpg";
import axios from "axios";

function QandA() {
  //Varible For Questions
  const [questions, SetQuestions] = useState("");
   //Varible For Answers
  const [answer, SetAnswers] = useState("");
   //Varible For Arranged Data
  const [arranged, setArranged] = useState("");
  //Variable for get answer from text box
  const [typedAnswer,setTypedAnswer]=useState("");


  //Get All Questions from Database
  const getallQuestions = () => {
    axios.get("http://localhost:8050/Question/").then((response) => {
      SetQuestions(response.data);
    });
  };
  //Get All Answers from Database
  const getallAnswers = () => {
    axios.get("http://localhost:8050/Answer/").then((response) => {
      SetAnswers(response.data);
    });
  };
//Submit Answer
const submitanswer=(answerModel)=>{

let model={
  Content :typedAnswer,
  Question :answerModel.questionID,
  User:"Kavindu",
  createdAt :Date.now()
}

axios.post("http://localhost:8050/Answer/add",model).then((response)=>
{
  window.location.reload(false);
})
}
//Arrange
  const arrange = () => {

    let dat = [];
    //Loop Questions
    questions.map((item) => {
      //get answers for each question
     
        const answerSet = answer.filter((subitem) => {
          if(subitem.Question)
          {
            return subitem.Question._id == item._id;
          }
          
        });
        console.log(answerSet);
        //create a array for each question
        dat.push({ Question: item.Content,questionID:item._id, Answers: answerSet });
      
    
    });
    console.log("all", dat);
    //set arranged data list to main variable
    setArranged(dat);
  };
  //Form Load Function
  useEffect(() => {
    if (!questions) {
      getallQuestions();
    }
    if (!answer) {
      getallAnswers();
    }
    if(!arranged)
    {
      if (questions.length>0 && answer.length>0) {
        arrange();
      }
    }
   
  });

  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <h1 style={{textAlign:"center"}}>Questions & Answers</h1>
      <div className="paragraph">
          <div className="">
            <div className="col-md-12" style={{ marginLeft: "150px" }}>
              {/* diaplay arranged data*/}
              {arranged &&
                arranged.map((item) => {
                  return (
                    <div>
                      <div className="card col-md-10">
                        <div className="card-body">
                          <h2> Question : {item.Question}</h2>
                          <br></br>
                          {item.Answers.length > 0 &&
                            item.Answers.map((item,index) => {
                              return (
                                <div style={{}}> 
                                  <div style={{ marginLeft: "100px" }}>
                                    <small>{index+1+")"} {item.Content}</small>
                                
                                  </div>
                                  <br></br>
                                </div>
                              );
                            })}
                             <br></br>
                          <input
                            className="form-control"
                            placeholder="Add a Answer"
                            onChange={(e)=>{setTypedAnswer(e.target.value)}}
                          />
                           <br></br>

                          <button style={{marginLeft:"500px"}} className="btn btn-primary col-md-4" onClick={()=>{submitanswer(item)}}> Submit</button>
                          <br></br>
                        </div>
                      </div>
                      <br></br>
                    </div>
                  );
                })}
            </div>
          </div>
       
      </div>

      <Footer />
    </div>
  );
}
export default QandA;
