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
                <img src="/img/projet_img.png"/>
                <Typography variant="headline">projet.titre</Typography>
            </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button  color="primary" className="but" size="small">Ouvrir</Button>                
            </CardActions> */}
        </Card>
        

    </div>
)
}

export default Projet;