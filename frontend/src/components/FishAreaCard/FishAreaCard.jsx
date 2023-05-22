import React from "react";
import "./FishareaCard.css";
const FishAreaCard = ({ item }) => {
  return (
    <div className="fishAreaCardContainer">
      <div className="imgDiv">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="textContainer">
        <h1>{item.areaName}</h1> 
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default FishAreaCard;
