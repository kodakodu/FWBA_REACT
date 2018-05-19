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


class Kitacc extends React.Component{
    render(){
        return(
            <div>
                {/* <h2>Kit Accueil</h2> */}
                        <Typography type="display2" gutterBottom>
                                Kit Accueil
                        </Typography>
                <h1>-- En construction --</h1>
            </div>
        );
    }
}
export default Kitacc;