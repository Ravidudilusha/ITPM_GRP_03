import React from 'react'
import "./EditCard.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditCard = ({item,getArea}) => {
    const navigate=useNavigate()

    const handleDelete=()=>{
        if (window.confirm("Are you sure to delete ?")) {
            axios
              .delete("http://localhost:8090/area/delete/" + item._id)
              .then(() => {
                getArea();
              });
          }
    }
  return (
    <div>
        <div className="editCardContainer">
      <div className="imgDiv">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="textContainer">
        <h1>{item.areaName}</h1> 
        <p>{item.description}</p>
        <div className='buttonDiv'>
            <button onClick={()=>navigate(`/edit/${item._id}`)} className='buttons editButton'>Edit</button>
            <button onClick={handleDelete} className='buttons deletteButton'>Delete</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EditCard