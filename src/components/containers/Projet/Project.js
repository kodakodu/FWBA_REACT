import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import "./Project.css"

const Projet = (props) => {
const {projet} = props;

console.log('Log depuis le composant',{projet});

this.projectHandler = () => {
    console.log("CLick ok sur un projet");
}

return(
    <div>
        <Card className="Projet">
            <CardContent className="CardAction">
                <img src="/img/projet_img.png" className="img_projet" alt="img_projet"/>
                <Typography variant="headline" className="titre_projet">{projet.titre}</Typography>
                
                <div>
                    <div className="txt_description"><Typography variant="body2">{projet.description}</Typography></div>
                    <div className="img_description"><img src="/img/ico/type_cyclev.png" alt="img_cyclev"></img></div>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" component={Link} to="/ProjectDetail">
               Détails
                </Button>                
            </CardActions>
        </Card>
        

    </div>
)
}

export default Projet;