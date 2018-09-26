import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Layout from './Layout'

const NotFound = () =>
<Layout>
{/* <h2>Kit Accueil</h2> */}
        <Grid container spacing={12}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                        {/* <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                        Erreur 404...
                        </Typography> */}
                        <img src='img/404-page.png'></img>                           
                </Grid>
                <Grid item xs={2}></Grid>
        </Grid>
</Layout>

export default NotFound;