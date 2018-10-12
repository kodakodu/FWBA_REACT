import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import Projet from './containers/Projet/Projet';

class Projects extends React.Component{
    state={
        projets:[
            {projetid:1,titre:'Projet 1',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."},
            {projetid:2,titre:'Projet 2',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."},
            {projetid:3,titre:'Projet 3',description:"Lorem ipsum dolor sit amet. Qui optio praesentium sed magni rerum eum illo asperiores vel velit totam est cupiditate totam At dolorum perferendis."}
        ]
    }

    render(){
        return(
            <Layout>
                    <Grid container spacing={12}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                                Projets en cours
                            </Typography>                            
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                {this.state.projets.map(projet =>{
                    return <Projet key={projet.projetid} projet={projet}/>
                })
            }
                        {/* <Projet/>
                        <Projet/>
                        <Projet/>
                <h1>-- En construction --</h1> */}
            </Layout>
        );
    }
}
export default Projects;