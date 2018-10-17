import React, { Component } from 'react';
//import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
//import Project from './containers/Projet/Project';
import Projects_list from './Projects_list';
import Router from '../Router'
import Axios from "axios";

import { NavLink, HashRouter} from "react-router-dom";


//import "./Project.css"


class Projects extends React.Component{
    state={
        projets:[{}],
         projets:[
             {projetid:1,titre:'Projet 1 depuis JSON',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."},
             {projetid:2,titre:'Projet 2 depuis JSON',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."},
             {projetid:3,titre:'Projet 3 depuis JSON',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."}
         ]
    }

getProjects = () =>{
    console.log("recuperation des projets");
    // Axios.get("http://localhost:5000/api/all_projects")
    // .then(response =>{
    //     const projets = response.data;
    //     this.setState({projets});
    // })
}

    componentDidMount(){
        this.getProjects();
    }

    render(){
        return(
            <Layout>
                <Projects_list projects={this.state.projets} />
                {/* <HashRouter>
                    <NavLink to= "/Projects_list" projects={this.state.projets}>qsdqds</NavLink>
                </HashRouter> */}
                
            </Layout>
            
        );
    }
}
export default Projects;