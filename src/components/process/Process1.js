/////////////////////////
// Etude d'opportunité //
/////////////////////////

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
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import GradeIcon from 'material-ui-icons/Grade';

const styles = theme => ({
  root: {
    width: '50%',
    marginLeft: '420px', 
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});



class Process1 extends React.Component{
    state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
    render(){
        const { classes } = this.props;
        const { expanded } = this.state;
        return(
            <div>
                <h2>Etude d'opportunité</h2>
                 <div className={classes.root}>
                 <p>Décrire les travaux d'analyse métier qui doivent être effectués pour collaborer avec les parties prenantes afin d'identifier un besoin d'importance stratégique ou tactique (le besoin de l'entreprise), permettre à l'entreprise de répondre à ce besoin et aligner la stratégie résultante pour le changement avec les stratégies de niveau inférieur.</p>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><h3>Business analyste</h3></Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                <h3>Activités</h3>
                <dl>
                    <dt><h4>Décrire l'opportunité</h4></dt>
                    <dt><h4>Analyser l'existant</h4></dt>
                    <dd>Le point de départ de tout changement est une compréhension de la raison pour laquelle la modification est nécessaire. Le changement potentiel est déclenché par des problèmes ou des opportunités qui ne peuvent être résolues sans altérer l'état actuel. Les analystes métiers travaillent pour aider les parties prenantes à changer les choses en explorant et en articulant les besoins de l'entreprise qui stimulent le désir de changer.</dd>
                    <dt><h4>Définir l'état cible</h4></dt>
                    <dd>Définir les buts et les objectifs qui démontreront que les besoins de l'entreprise ont été satisfaits et définir les éléments de l'entreprise qui doivent être modifiés pour atteindre ces buts et objectifs. Les analystes métier travaillent pour s'assurer que l'état futur de l'entreprise est bien défini, qu'il est réalisable avec les ressources disponibles et que les principaux intervenants ont une vision de consensus partagée sur le résultat.</dd>
                    <dt><h4>Analyser les risques</h4></dt>
                    <dd>Comprendre les incertitudes entourant le changement, considérer l'effet que ces incertitudes peuvent avoir sur la capacité à fournir de la valeur grâce à un changement, et recommander des actions pour résoudre les risques le cas échéant. L'évaluation des risques consiste à les analyser et à les gérer. Les risques peuvent être liés à l'état actuel, à un état futur souhaité, à un changement lui-même, à une stratégie de changement ou à toute tâche exécutée par l'entreprise.</dd>
                    <dt><h4>Définir la stratégie de changement</h4></dt>
                    <dd>Effectuer une analyse des écarts entre l'état actuel et cible, évaluer les options pour parvenir à la cible, et recommander l'approche la plus pertinente pour atteindre l'état cible ainsi que les états de transition qui pourraient être nécessaires.</dd>
                </dl>
                <h3>Livrables</h3>
                <dl>
                    <dt><GradeIcon/><a href="doc/EO/LivrableType_Note d'opportunité V2.docx">Etude d'opportunité</a></dt>
                    <dt><GradeIcon/><a href="doc/EO/LivrableType_Note d'opportunités - Synthèse_V2.1.pptx">Etude d'opportunité - Synthèse</a></dt>
                    <dt><GradeIcon/><a href="doc/EO/LivrableType_Plan de Business Analyse V2.docx">Plan d'analyse métier</a></dt>
                    
                </dl>
                {/* <h3>Parties prenantes et leurs rôles</h3> */}
                <h3>Techniques</h3>
                <dl>
                    <dt><a href="http://www.toollity.com/index.php/2016/04/21/conduire-une-interview/" target="_blank">Conduire une interview</a></dt>
                    <dt><a href="http://www.toollity.com/index.php/2016/05/11/le-brainstorming/" target="_blank">Le Brainstorming</a></dt>
                    <dt>Modéliser un processus</dt>
                    <dt><a href="doc/BABOK_Guide_v3_Member.pdf" target="_blank">Lien vers le BABOK</a></dt>
                </dl>
              {/* <ul>
                <li>Décrire l'opportunité</li>
                <li>Analyser l'existant <p>Le point de départ de tout changement est une compréhension de la raison pour laquelle la modification est nécessaire. Le changement potentiel est déclenché par des problèmes ou des opportunités qui ne peuvent être résolues sans altérer l'état actuel. Les analystes métiers travaillent pour aider les parties prenantes à changer les choses en explorant et en articulant les besoins de l'entreprise qui stimulent le désir de changer.</p></li>
              </ul> */}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><h3>Directions métiers</h3></Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Typography>
            <h3>Livrables</h3>
                <dl>
                    <dt><GradeIcon/><a href="doc/LivrableType_Note d'opportunité V2.docx">Etude d'opportunité</a></dt>
                </dl>
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
        {/* <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><h3>Sponsor</h3></Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
        {/* <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><h3>Reponsable programme</h3></Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
      </div>                
    </div>
            
                            
        );
    }
}

Process1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Process1);
//export default Process1;