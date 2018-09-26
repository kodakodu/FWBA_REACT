import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Layout from './Layout';

class Tools extends React.Component{
    render(){
        return(
            <Layout>
                {/* <h2>Outils</h2> */}
                        <Typography variant="headline" gutterBottom>
                                Outils
                        </Typography>
                <div>
                        <Typography variant="subheading" gutterBottom>
                                <a href="/doc/outils/25092017 RACI Processus Projet v1.0.xlsx">Lien vers le RACI</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="https://editor.signavio.com/p/login" target="_blank">Modelisation BPMN (Signavio)</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/consultation/HTML/accueil.aspx#/HOME" target="_blank">Intranet MNT</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Techniques%20et%20Outils/MNT%20Workshop%20Brainstorming.pdf" target="_blank">Brainstorming</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="/doc/outils/20171106-MNT-Workshop BA-Ishikawa Cause effet.pdf" target="_blank">Diagrame Ishikawa -Causes Effets</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="/doc/outils/20171113-MNT-BPMN.pdf" target="_blank">Modélisation BPMN</a>
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                <a href="/doc/outils/Rédiger une User Story.pdf" target="_blank">Rédaction d’une User Story</a>
                        </Typography>
                </div>
            </Layout>
        );
    }
}
export default Tools;