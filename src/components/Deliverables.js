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

import FileIcon from 'material-ui-icons/FileDownload';

class Deliverables extends React.Component{
    render(){
        return(
            <div>
                      <Typography type="display2" gutterBottom>
                                Livrables
                        </Typography>
                    <div>
                        
                         <Typography type="subheading" gutterBottom>
                               Etude d'opportunités
                        </Typography>
                        <Typography type="subheading" gutterBottom>
                                Etude de faisabilité
                        </Typography>
                        <Typography type="subheading" gutterBottom>
                                Plan d'analyse métier
                        </Typography>
                        <Typography type="subheading" gutterBottom>
                                Dossier d'exigences fonctionnelles
                        </Typography>
                        
                    </div>
            </div>
        );
    }
}
export default Deliverables;