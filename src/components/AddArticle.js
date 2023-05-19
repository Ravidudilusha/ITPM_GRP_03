import axios from 'axios';
import React,{ Component, useState} from 'react';
import Header from './Header';



const AddStaff=()=>{


  const [topic , settopic] = useState('');
  const [description , setdescription] = useState('');
  
 

const onSubmit=(e)=> {
  
  const data={
    topic:topic,
      description:description,
  };
  console.log(data)
  axios.post('http://localhost:8080/',data).then((res) =>{
    alert("Added Successfully");
}).catch((err)=>{
    console.log(err);;

})


}




    return(
        <div className="container">
          <Header/>
            <form  onSubmit={onSubmit} className="form">
            <div className="form-group">
          <label className="name">topic</label>
          <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" value={topic} onChange={(e)=>{settopic(e.target.value)}} required/>
           </div>
           <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">description</label>
          <textarea class="form-control" rows="5" id="comment"value={description} onChange={(e)=>{setdescription(e.target.value)}} required> </textarea>
           </div>
           <div className="form-group">
           <input  type="file" name="image"  />
           </div>
        
    <button  type="submit" className="btn btn-danger d-inline" >Submit
    &nbsp;
    </button>
</form>
    </div>

);
    };
export default AddStaff;

 
