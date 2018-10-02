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
import Typography from '@material-ui/core/Typography';
//import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import ExploreIcon from 'material-ui-icons/Explore';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import Layout from './Layout'

class Overview extends React.Component{
    render(){
        return(
               
            <Layout>
             <Router>
                        <div>
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
                        </div>
                </Router>
                {/* <h2>Processus projet</h2> */}
                        <Typography variant="headline" gutterBottom>
                                Processus projet
                        </Typography>
                
<img src="/img/Processus2.png" alt="" usemap="#Map" hidefocus="true" />
<map name="Map" id="Map">
    <Link to="/Pilotage"><area alt="" title="" href="#" shape="poly" coords="111,36,112,93,1336,94,1335,37" /></Link>
    <Link to="Maj_Referentiel"><area alt="" title="" href="#" shape="poly" coords="110,110,110,168,1335,167,1334,110" /></Link>
    <Link to="Conduite_Changement"><area alt="" title="" href="#" shape="poly" coords="111,182,113,243,1335,242,1335,184" /></Link>
    <Link to="/Process1"><area alt="" title="" href="" shape="poly" target="_blank" coords="273,328,237,294,93,294,129,333,97,365,241,367" /></Link>
    <Link to="/Process2"><area alt="" title="" href="" shape="poly" target="_blank" coords="445,331,408,296,266,294,297,331,267,365,409,365" /></Link>
    <Link to="/Process3"><area alt="" title="" href="#" shape="poly" target="_blank" coords="616,329,579,296,437,293,468,330,438,365,581,365" /></Link>
    <Link to="/Process4"><area alt="" title="" href="#" shape="poly" target="_blank" coords="784,331,751,298,608,296,640,332,605,363,751,367" /></Link>
    <Link to="/Process5"><area alt="" title="" href="#" shape="poly" target="_blank" coords="960,329,925,299,778,297,813,331,779,366,922,365" /></Link>
    <Link to="/Process6"><area alt="" title="" href="#" shape="poly" target="_blank" coords="1127,329,1094,295,950,293,983,331,950,365,1092,366" /></Link>
    <Link to="/Process7"><area alt="" title="" href="#" shape="poly" target="_blank" coords="1301,330,1265,294,1113,294,1149,332,1113,369,1266,368" /></Link>
    <area alt="" title="" href="#" shape="poly" coords="266,387,239,389,253,356" />
    <area alt="" title="" href="#" shape="poly" coords="438,389,413,386,422,358" />
    <area alt="" title="" href="#" shape="poly" coords="606,387,579,388,592,359" />
    <area alt="" title="" href="#" shape="poly" coords="775,387,747,387,760,361" />
    <area alt="" title="" href="#" shape="poly" coords="943,386,917,387,932,360" />
    <area alt="" title="" href="#" shape="poly" coords="1114,387,1089,388,1100,361" />
</map>

                {/* <Link to="/Process1">
                        <ListItemText primary="Etude d'opportunité" />
                </Link>
                <Link to="/Process2">
                        <ListItemText primary="Etude de faisabilité" />
                </Link>
                <Link to="/Process3">
                        <ListItemText primary="Cadrage fonctionnel" />
                </Link>
                <Link to="/Process2">
                        <ListItemText primary="Cadrage technique" />
                </Link>
                <Link to="/Process2">
                        <ListItemText primary="Réalisation projet" />
                </Link>
                <Link to="/Process2">
                        <ListItemText primary="Hommologation" />
                </Link>
                <Link to="/Process2">
                        <ListItemText primary="Fonctionnement" />
                </Link> */}
            </Layout>
        );
    }
}
export default Overview;