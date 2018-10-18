import React from 'react';

import Layout from '../../Layout';
//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import Button from "@material-ui/core/Button";
//import Typography from '@material-ui/core/Typography';
import "./ProjectDetail.css"

const ProjectDetail = (props) => {
//const {projet} = props;
    return(
    <Layout>
        {/* <Card className="Projet">
            <CardActionArea className="CardAction">
            <CardContent>
                <img src="/img/projet_img.png" className="img_projet" alt="img_projet"/>
                <Typography variant="headline" className="titre_projet">{projet.titre}</Typography>
                <div>
                    <div className="txt_description"><Typography variant="body2">{projet.description}</Typography></div>
                    <div className="img_description"><img src="/img/NewCyclev.png" alt="img_cyclev"></img></div>
                </div>
            </CardContent>
            </CardActionArea>
        </Card> */}
        <div className="img_cyclev"><img src="/img/NewCyclev.png" alt="img_cyclev"></img></div>

    </Layout>
)
}

export default ProjectDetail;