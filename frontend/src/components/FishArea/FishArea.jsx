import React, { useEffect, useState } from 'react';
import "./FishArea.css"
import axios from 'axios';
import FishAreaCard from '../FishAreaCard/FishAreaCard';

const FishArea = () => {
    const [Area, setArea] = useState([
        {
          areaName: "",
          description: "",
          imageUrl: "",
        },
      ]);
    
      useEffect(() => {
        function getArea() {
          axios
            .get("http://localhost:8090/area/")
            .then((res) => {
              setArea(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getArea();
      }, []);
  return (
    <div className='fishArea'>
        {
            Area.map((item)=><FishAreaCard item={item} key={item._id}/>)
        }
    </div>
  )
}

export default FishArea