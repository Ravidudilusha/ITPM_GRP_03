import React, { Component } from 'react'
import axios from "axios";
import Header from './Header';
import { Link } from 'react-router-dom';
import {Image} from 'cloudinary-react';


export default class AllArticle extends Component{





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
            <div className='container'>
                <Header/>
                <table className='table'>
                    <thead>
                        <tr>
                        <th scope='col'>#</th>
                            <th scope='col'>topic</th>
                            <th scope='col'>description</th>
                            <th scope='col'>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                    {this.state.article.map((article,index) =>(
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{article.topic}</td>
                            <td>{article.description}</td>
                            <td>
                            <Link to={"/update/"+ article._id} className = "btn btn-warning">Edit</Link>
                                &nbsp;
                                <a className='btn btn-danger' href="#" onClick={()=>this.onDelete(article._id)} >
                                    <i></i>&nbsp;Delete
                                </a>
                            </td>
                             </tr>
                             ))}
                    </tbody>
                </table>
              </div>                     
            
        )
    }
}

