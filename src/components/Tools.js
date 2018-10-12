import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';

class Tools extends React.Component{
    render(){
        return(
            <Layout>
                {/* <h2>Outils</h2> */}
                <Grid container spacing={12}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                                Outils
                            </Typography>

                            <div style={{margin: '0,auto'}}>
                                <Typography variant="body2" gutterBottom>
                                        <a href="/doc/outils/25092017 RACI Processus Projet v1.0.xlsx">Lien vers le RACI</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="https://editor.signavio.com/p/login" target="_blank" rel="noopener noreferrer">Modelisation BPMN (Signavio)</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/consultation/HTML/accueil.aspx#/HOME" target="_blank" rel="noopener noreferrer">Intranet MNT</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Techniques%20et%20Outils/MNT%20Workshop%20Brainstorming.pdf" target="_blank" rel="noopener noreferrer" >Brainstorming</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="/doc/outils/20171106-MNT-Workshop BA-Ishikawa Cause effet.pdf" target="_blank" rel="noopener noreferrer">Diagrame Ishikawa -Causes Effets</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="/doc/outils/20171113-MNT-BPMN.pdf" target="_blank" rel="noopener noreferrer">Modélisation BPMN</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                        <a href="/doc/outils/Rédiger une User Story.pdf" target="_blank" rel="noopener noreferrer">Rédaction d’une User Story</a>
                                </Typography>
                            </div>                            
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                        

                <div>
                       
                </div>
            </Layout>
        );
    }
}
export default Tools;