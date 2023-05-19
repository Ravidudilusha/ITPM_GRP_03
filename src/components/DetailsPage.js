import axios from 'axios';
import React , {useState,useEffect} from 'react';
import Header from './Header';
import {useParams,useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function Detailpage(){
  const navigate = useNavigate();
  const {id } = useParams();
  const [topic , settopic] = useState('');
  const [description , setdescription] = useState('');
  const [image , setimage] = useState('');
  
  useEffect(()=>{
      axios.get(`http://localhost:8080/get/${id}`)
      .then((res)=>{
          setdescription(res.data.article.description);
          
            console.log(res.data);
      })
  },[])






    return(
        <div className="container">
          <Header/>
          <Card>
                        <Card.Body>
                          <Card.Title>{description}</Card.Title>
                        </Card.Body>
                      </Card>
    </div>
);
 
};