import axios from 'axios';
import React , {useState,useEffect} from 'react';
import Header from './Header';
import {useParams,useNavigate } from "react-router-dom";

export default function Update(){
  const navigate = useNavigate();
  const {id } = useParams();
  const [topic , settopic] = useState('');
  const [description , setdescription] = useState('');
  const [image , setimage] = useState('');
  
  useEffect(()=>{
      axios.get(`http://localhost:8080/get/${id}`)
      .then((res)=>{
          
          settopic(res.data.article.topic);
          setdescription(res.data.article.description);
          setimage(res.data.article.image);
            console.log(res.data);
      })
  },[])

  const sendDataToAPI =()=>{
      const data = {topic,description,image}
      axios.put(`http://localhost:8080/update/${id}`,data)
      .then((res)=>{
          alert("Update Successful");  
      })
      .catch((err)=>{
          alert("Update Unsuccessful");
      })
  };





    return(
        <div className="container">
          <Header/>
            <form>
            <div className="form-group">
          <label className="name">topic</label>
          <input type="text" className="form-control" name='topic' id="topic" placeholder="Enter topic" value={topic} onChange={(e)=>settopic(e.target.value)} required/>
           </div>
           <div className="form-group">
          <label className="exampleInputEmail1">Email address</label>
          <textarea class="form-control" rows="5" id="comment" value={description} onChange={(e)=>setdescription(e.target.value)} required/>
           <input onChange={(e)=>setimage(e.target.files[0])} type="file"/>
           </div>
        
    <button type="submit" className="btn btn-danger" onClick={sendDataToAPI}>Update
    &nbsp;
    </button>
</form>
    </div>
);
 
};
 