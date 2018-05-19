import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Paper from 'material-ui/Paper';

import { mailFolderListItems } from './tileData';
import Home from '../components/Accueil';
import Kitacc from '../components/Kitacc';
import Overview from '../components/Overview';
import Deliverables from '../components/Deliverables';
import Tools from '../components/Tools';
import Community from '../components/Community';
import NotFound from '../components/notFound';
import Process1 from '../components/process/Process1';
import Process2 from '../components/process/Process2';
import Process3 from '../components/process/Process3';
import Process4 from '../components/process/Process4';
import Process5 from '../components/process/Process5';
import Process6 from '../components/process/Process6';
import Process7 from '../components/process/Process7';
import Conduite_Changement from '../components/Conduite_Changement';
import Pilotage from '../components/Pilotage';
import Maj_Referentiel from '../components/Maj_Referentiel';


const drawerWidth = 240;

const styles = theme => ({
  appFrame: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    zIndex: 1,
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.navDrawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 4,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    minHeight: '63px'
    //...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: '100%',
    overflow: 'scroll',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  stylePaper: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    marginTop: '83px',
    paddingBottom: '23px'
  }
});

class MiniDrawer extends React.Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <Router>
          <div className={classes.appFrame}>
            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, this.state.open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                {/* <img src="https://webprd.mnt.fr/DSLIntegrationSiteMNT_v9/_images/headerMNT/assets/images/mnt-logo.png" width = "30" height = "30" alt="logo"/> */}
                <Typography type="title" color="inherit" noWrap>
                  FrameWork Gestion de projets
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              type="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
            >
              <div className={classes.drawerInner}>
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton> 
                </div>
                <Divider />
                <List className={classes.list}>{mailFolderListItems}</List> 
              </div>
            </Drawer>
            <Paper className={classes.stylePaper}>
            <Route exact path="/" component={Home}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Kitacc" component={Kitacc}/>
                <Route path="/Overview" component={Overview}/>
                <Route path="/Deliverables" component={Deliverables}/>
                <Route path="/Tools" component={Tools}/>
                <Route path="/Community" component={Community}/>
                <Route path="/Process1" component={Process1}/>
                <Route path="/Process2" component={Process2}/>
                <Route path="/Process3" component={Process3}/>
                <Route path="/Process4" component={Process4}/>
                <Route path="/Process5" component={Process5}/>
                <Route path="/Process6" component={Process6}/>
                <Route path="/Process7" component={Process7}/>
                <Route path="/Conduite_Changement" component={Conduite_Changement}/>
                <Route path="/Pilotage" component={Pilotage}/>
                <Route path="/Maj_Referentiel" component={Maj_Referentiel}/>
                <Route path="/NotFound" component={NotFound}/>
            </Paper>
          </div>
      </Router>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);