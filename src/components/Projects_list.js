import React, {Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//import Layout from './Layout';
import Project from './containers/Projet/Project';


class Projects_list extends Component {
    render(){
        //const projets = props.projets;
        return(
            <div>
                    <Grid container spacing={12}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                                Projets en cours
                            </Typography>                            
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                {this.props.projects.map(projet =>{
                    return <Project key={projet.projetid} projet={projet}/>
                })
            }
            </div>
        )
    }
}

export default Projects_list;