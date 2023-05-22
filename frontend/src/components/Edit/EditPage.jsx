import React, { useEffect, useState } from 'react'
import "./EditPage.css"
import axios from 'axios';
import EditCard from './EditCard';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const navigate=useNavigate();
    const [Area, setArea] = useState([
        {
          areaName: "",
          description: "",
          imageUrl: "",
        },
      ]);
      function getArea() {
        axios
          .get("http://localhost:8090/area/")
          .then((res) => {
            setArea(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
      useEffect(() => {
        getArea();
      }, []);
  return (
   

    <div className='editPageContainer'>
       <div >
        {Area.map((item)=><EditCard getArea={getArea} item={item}/>)}
    </div>
    <div className='editPageButtonDiv'>
      <button className='editPageButton'>Save Changes</button>
      <button onClick={()=>navigate("/add")} className='editPageButton'>Insert New Area</button>
    </div>
    </div>
  )
}

export default EditPage