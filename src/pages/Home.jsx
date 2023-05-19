import React, { Component } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from '../components/R.jpg';



export default class Home extends Component{

constructor(props){
    super(props);

    this.state={
       article:[]
    };
}

componentDidMount(){
    this.retrieveArticle();
}

retrieveArticle(){
    axios.get("http://localhost:8080/get").then(res =>{
            if(res.data.success){
            this.setState({
                article:res.data.existingArticle
            });

            console.log(this.state.article)
        }
    })
}
onDelete= (id)=>{
    axios.delete(`http://localhost:8080/delete/${id}`).then((res)=>{
        alert("Delete Successfully");
        this.retrieveArticle();
    })
}
    render(){
        return(
          <div className="container">
                <Row xs={1} md={5} className="p-3 col-12 g-4">
                  {this.state.article.map((article) => (
                    <Col>
                      <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                          <Card.Title>{article.topic}</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                </div>
              );                    
            
    }
}
