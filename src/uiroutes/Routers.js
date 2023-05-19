import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import AddArticle from "../components/AddArticle";
import Report from "../components/Report";
import EditArticle from "../components/EditArticle";
import EReport from '../components/EReport'
import AllArticle from '../components/AllArticle';
import DashboardData from '../pages/DashboardData';
import Home from '../pages/Home';
import DetailsPage from '../components/DetailsPage';

import Profile from "../components/Profile";
import { BrowserRouter as Router} from "react-router-dom";
// import './App.css';
import LoginScreen from "../LoginScreen/LoginScreen";
// import LandingPage from "./LandingPage/LandingPage";



const Routers=()=> {
  return <Routes>
    <Route path='/' element={<Navigate to='/homeui'/>}/>
    {/* <Route path='/loginui' element={<Login/>}/> */}
    {/* <Route path="/" element={<LandingPage/>}></Route> */}
    <Route path="/homeui" element={<Home />}></Route>
     <Route path="/loginui" element={<LoginScreen />}></Route>
     <Route path="/Dashboard" element={<DashboardData />}></Route>
      <Route path="/add" element={<AddArticle />}></Route>
      <Route path="/report" element={<Report />}></Route>
      <Route path="/edit" element={<AllArticle />}></Route>
      <Route path="/update/:id" element={<EditArticle />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/EReport" element={<EReport />}></Route>
      <Route path="/get/:id" element={<DetailsPage />}></Route>

    

  </Routes>
}

export default Routers