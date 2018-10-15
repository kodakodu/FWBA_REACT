import React from 'react';
//import PropTypes from 'prop-types';
//import classNames from 'classnames';
//import { withStyles } from 'material-ui/styles';
//import Drawer from 'material-ui/Drawer';
//import AppBar from 'material-ui/AppBar';
//import Toolbar from 'material-ui/Toolbar';
//import Grid from 'material-ui/Grid';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import List from 'material-ui/List';
//import { MenuItem } from 'material-ui/Menu';
//import TextField from 'material-ui/TextField';
import Typography from '@material-ui/core/Typography';
//import Typography from 'material-ui/Typography';
//import Divider from 'material-ui/Divider';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Layout from './Layout'

class Kitacc extends React.Component{
    render(){
        return(
            <Layout>
                {/* <h2>Kit Accueil</h2> */}
                <Grid container spacing={12}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                            Pour mieux connaitre la MNT...
                            </Typography>
                            <Typography variant="Headline" gutterBottom style={{textAlign:'center'}}>
                                Vous êtes nouvellement arrivé à la MNT et vous avez été identifié comme Partie Prenante à un projet...
                            </Typography>
                            <Typography variant="Headline" gutterBottom style={{textAlign:'center', paddingBottom: '20px'}}>    
                                Pour vous aider à la découvrir, nous vous invitons à visualiser les documents suivants:
                            </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Grid container spacing={12}>
                    {/* ========= Première prise contact =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Première prise de contact
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/1-Prise%20de%20contact%20avec%20la%20MNT.pptx?d=w6d60b7b63b924de0ac737e5b891cf691" target="_blank" rel="noopener noreferrer">Prise de contact avec la MNT</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/2-MNT-Pr%C3%A9sentation%202016.pdf" target="_blank" rel="noopener noreferrer">MNT présentation 2016</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="http://www.mnt.fr/" target="_blank" rel="noopener noreferrer">Site Internet MNT</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet" target="_blank" rel="noopener noreferrer">Site Intranet MNT</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ========= Organisation géographique =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Organisation géographique
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Organisation%20g%C3%A9ographique/Carte%20de%20France%20-%2024%20Responsables%20de%20secteur%20MNT%2004.2017.pdf" target="_blank" rel="noopener noreferrer">Carte de France - 24 Responsables de Secteur</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Organisation%20g%C3%A9ographique/Carte%20de%20France%20-%2036%20Responsables%20agence%20MNT%2004.2017.pdf" target="_blank" rel="noopener noreferrer">Carte de France - 36 Responsables d'Agence</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Organisation%20g%C3%A9ographique/Carte%20D%C3%A9l%C3%A9gu%C3%A9s%20R%C3%A9gionaux%2004.2017.docx?d=w46d5849f0bfc4a5ebee960ef18a12370" target="_blank" rel="noopener noreferrer">Carte des Délégués Régionaux</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/OrganisationMNT_LesCentreDeTraitement_20170512.pdf" target="_blank" rel="noopener noreferrer">Centres de traitement</a>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                {/* ========= Organigramme =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Organigramme
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/consultation/HTML/accueil.aspx#/ORGA" target="_blank" rel="noopener noreferrer">Organigramme</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/:b:/r/sites/Intranet/connaitre_la_MNT/_layouts/15/WopiFrame.aspx?sourcedoc=%7B42beac03-adc1-4a62-83a5-ec08a0c60e0b%7D&action=interactivepreview" target="_blank" rel="noopener noreferrer">Communication nouvelle organisation MNT_juillet_2018</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ========= Catalogue de Services et Produits =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Catalogue de Services et Produits
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Autres%20Documents/Fiche%20Groupe_Nos%20r%C3%A9ponses_Offre%20collective_INTRA.pdf" target="_blank" rel="noopener noreferrer">Fiche Groupe_Nos_Réponses_Offre collective_INTRA</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Autres%20Documents/Fiche%20Groupe_Nos%20r%C3%A9ponses_Offre%20individuelle_INTRA.pdf" target="_blank" rel="noopener noreferrer">Fiche Groupe_Nos_Réponses_Offre individuelle_INTRA</a>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                {/* ========= Sa stratégie =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Sa stratégie
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/3-Territoires%20d'avenir%20-%20Projet%20strat%C3%A9gique%20de%20la%20MNT%20-%20Adopt%C3%A9%20par%20le%20CA%2012%20Fevrier%202015.pdf" target="_blank" rel="noopener noreferrer">Territoires d'avenir - Projet stratégique de la MNT (Adopté par le CA le 12 février 2015)</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ========= Référentiel des metiers =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Référentiel des Métiers
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/R%C3%A9f%C3%A9rentiel%20des%20m%C3%A9tiers%20MNT.pdf" target="_blank" rel="noopener noreferrer">Référentiel des Métiers MNT</a>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                {/* ========= Règlement Intérieur =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Règlement Intérieur
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/:b:/r/sites/Intranet/travailler_a_la_MNT/_layouts/15/WopiFrame.aspx?sourcedoc=%7B690ea23f-6725-4995-958e-e7b38d77ea8c%7D&action=interactivepreview" target="_blank" rel="noopener noreferrer">Règlement Intérieur</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ========= Charte Informatique =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Charte Informatique
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/:w:/r/sites/Intranet/travailler_a_la_MNT/_layouts/15/WopiFrame.aspx?sourcedoc=%7B091fe421-60b1-4e09-b779-a84a9744abf1%7D&action=interactivepreview" target="_blank" rel="noopener noreferrer">Charte Informatique</a>
                            </Typography>                            
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                {/* ========= Groupe VVY =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Groupe VVY
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://www.groupe-vyv.fr/" target="_blank" rel="noopener noreferrer">Lien sur le site "https://www.groupe-vyv.fr"</a>
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Autres%20Documents/La%20marque%20VYV.pdf" target="_blank" rel="noopener noreferrer">La marque VYV</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* ========= Contexte normatif =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Contexte normatif
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/5-contexte%20normatif.PPTX?d=w412ad93180f94d1db33dda7dcbcb6e08" target="_blank" rel="noopener noreferrer">Contexte normatif</a>
                            </Typography>                            
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                {/* ========= Dossier de presse =========*/}
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin :'auto'}}>
                            <Typography variant='headline' style={{textAlign: 'center'}}>
                                Dossier de presse
                            </Typography>
                            <Typography variant="subheading" gutterBottom style={{marginLeft: '50px', marginBottom: '20px', paddingBottom: '10px'}}>
                                        <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/BA0-Prise%20de%20contact%20contexte%20MNT/Autres%20Documents/MNT%20DOSSIER%20DE%20PRESSE%20AG%202016.pdf" target="_blank" rel="noopener noreferrer">MNT Dossier de presse AG 2016</a>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={6}>
                        <Paper style={{width:'95%', margin : 'auto'}}>                            
                        </Paper>
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}
export default Kitacc;