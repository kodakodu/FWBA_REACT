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

class Community extends React.Component{
    render(){
        return(
            <Layout>
                {/* <h2>Communauté</h2> */}
                        <Typography type="display2" gutterBottom>
                                Communauté
                        </Typography>
                <h1>-- En construction --</h1>
            </Layout>
        );
    }
}
export default Community;