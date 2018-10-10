//////////////////////////////////
//           Pilotage           //
//////////////////////////////////

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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



class Pilotage extends React.Component{
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
                <h2>Pilotage</h2>
                 <div className={classes.root}>
                 <p>Permettre à l'entreprise de répondre à ce besoin et aligner la stratégie résultante pour le changement avec les stratégies de niveau inférieur.</p>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><h3>Architecte</h3></Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                <h3>Activités</h3>
                <dl>
                    <dt><h4>Evaluer la performance de la solution</h4></dt>
                        <dd>Déterminer la méthode la plus appropriée pour évaluer la performance d'une solution, y compris son alignement sur les enjeux et les objectifs de l'entreprise. Et effectuer l'évaluation.</dd>
                    <dt><h4>Analyser les critères de performance évalués</h4></dt>
                        <dd>Examiner les informations de performance d'une solution afin de comprendre la valeur qu'elle fournit à l’entreprise et aux parties prenantes, et déterminer si elle répond aux besoins de l'entreprise.</dd>
                    <dt><h4>Evaluer les limites de la solution</h4></dt>
                        <dd>Etudier les limites de la solution pouvant entraver toute sa potentialité de répondre au besoin de l’entreprise.</dd>
                    <dt><h4>Recommander des actions pour augmenter la valeur de solution</h4></dt>
                        <dd>Identifier et définir les actions que l’entreprise peut réaliser pour augmenter la valeur délivrée par la solution.</dd>                    
                </dl>
                <h3>Livrables</h3>
                <dl>
                    <dt>DAG</dt>
                </dl>
                {/* <h3>Parties prenantes et leurs rôles</h3> */}
                <h3>Techniques</h3>
                <dl>
                    <dt>Conduire une interview</dt>
                    <dt>Le Brainstorming</dt>
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
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
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
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
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

Pilotage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pilotage);
//export default Process1;