import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
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
                            <Typography variant="Headline" gutterBottom style={{textAlign:'center'}}>    
                                Pour vous aider à la découvrir, nous vous invitons à visualiser les documents suivants:
                            </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </Layout>
        );
    }
}
export default Kitacc;