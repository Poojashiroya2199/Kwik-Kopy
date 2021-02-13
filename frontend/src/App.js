import React from "react";
import Home from "./Home";
import {Route} from "react-router-dom";
import Head from "./components/Head";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import Ourservices from "./components/Ourservices";
import SeingService from "./components/SingleService";
import Project from "./components/Project";
import SingleProject from "./components/SingleProject";
export default function App(){
  return (
    <div id="bg">
        <div id="layout" className="">
        <Head />
        <Route path="/singleservice" exact component={SeingService} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/" exact component={Home} />
        <Route path="/ourservices" exact component={Ourservices}/>
        <Route path="/project" exact component={Project} />
        <Route path="/singleproject" exact component={SingleProject}/>
    <Footer/>
    </div>
    </div>
  )
}