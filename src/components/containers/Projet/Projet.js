import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import "./Projet.css"

const Projet = (props) => {
const {projet} = props;
    return(
    <div>
        <Card className="Projet">
            <CardActionArea className="CardAction">
            <CardContent>
                <img src="/img/projet_img.png" className="img_projet"/>
                <Typography variant="headline" className="titre_projet">{projet.titre}</Typography>
                <div>
                    <div className="txt_description"><Typography variant="body2">{projet.description}</Typography></div>
                    <div className="img_description"><img src="/img/ico/type_cyclev.png"></img></div>
                </div>
            </CardContent>
            </CardActionArea>
        </Card>
        

    </div>
)
}

export default Projet;