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


class Accueil extends React.Component{
    render(){
        return(
            <div>
                {/* <h2>Kit Accueil</h2> */}
                        <Typography type="display2" gutterBottom>
                                Home
                        </Typography>
                        <Typography type="" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus risus laoreet libero rutrum tempus et convallis arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque venenatis iaculis sapien, at tempor diam interdum vel. Nullam id porta ante. Suspendisse luctus volutpat luctus. Mauris nibh elit, tincidunt nec tempus varius, tincidunt id nibh. Praesent vehicula scelerisque erat, sit amet convallis nulla vulputate sed.
                        </Typography>
                {/* <h1>-- En construction --</h1> */}
            </div>
        );
    }
}
export default Accueil;