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
import Layout from './Layout'
import FileIcon from 'material-ui-icons/FileDownload';

class Deliverables extends React.Component{
    render(){
        return(
            <Layout>
                      <Typography variant="headline" gutterBottom>
                                Livrables
                        </Typography>
                    <div>
                        
                         <Typography variant="subheading" gutterBottom>
                               Etude d'opportunités
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Etude de faisabilité
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Plan d'analyse métier
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Dossier d'exigences fonctionnelles
                        </Typography>
                        
                    </div>
            </Layout>
        );
    }
}
export default Deliverables;