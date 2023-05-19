import axios from 'axios';
import "./loginscreen.css";
import React, { Component, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LoginScreen extends Component{
constructor(props){
    super(props)
    this.state={
        email:"",
        password:""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(e){
    e.preventDefault();
    const{email,password}=this.state;
    console.log(email,password);
    fetch("http://localhost:8080/adminlogin",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            email,
            password,
        }),
    })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"adminlogin");
            if(data.status=="error"){
                alert("Invalid Password");
            }
            if(data.status=="ok"){
                alert("admin login Successful");
            window.localStorage.setItem("token",data.data);
            window.location.href="./Dashboard";
            }
        });
}

render(){


  return (
    <div class="row">
        <div class="col-lg-6 vh-100 d-none d-lg-block">
      <div class="d-flex align-items-center justify-content-center vh-100">
      </div>
    </div>
    <form onSubmit={this.handleSubmit} class="col-4 mx-auto my-auto">
        <h3 class="mb-5">Admin Login</h3>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="InputEmail1"  onChange={(e)=>this.setState({email:e.target.value})} required />
        </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword1" onChange={(e)=>this.setState({password:e.target.value})} required/>
        </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    )
    }
}
