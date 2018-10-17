import React from 'react';
//import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Layout from './Layout'

const NotFound = () =>
<Layout>
{/* <h2>Kit Accueil</h2> */}
        <Grid container spacing={12}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>

                        <img src='img/404-page.png' alt="404" style={{justifyContent: 'center', alignItems:'center'}}></img>                           
                </Grid>
                <Grid item xs={4}></Grid>
        </Grid>
</Layout>

export default NotFound;