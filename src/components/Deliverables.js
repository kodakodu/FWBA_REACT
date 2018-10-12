import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout'

class Deliverables extends React.Component{
    render(){
        return(
            <Layout>
                <Grid container spacing={12}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                                Livrables
                            </Typography>

                            <div style={{margin: '0,auto'}}>
                                
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                        Etude d'opportunités
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/1.Note%20d'Opportunit%C3%A9s/~%24LivrableType_Note%20d'opportunit%C3%A9s%20-%20Synth%C3%A8se_V4.pptx?d=w5de34a53b9aa4d8ebf3d783bf05311d6" target="_blank">Note d'opportunité</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/1.Note%20d'Opportunit%C3%A9s/LivrableType_Note%20d'opportunit%C3%A9s%20-%20Scoring%20V1.xlsx?d=wd8b27e789e9e4daeb4fcfc406e1ec40a" target="_blank">Scoring projet</a>
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                        Plan d'analyse métier
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/2.Plan%20de%20Business%20Analyse/LivrableType_Plan%20de%20Business%20Analyse%20V2.docx?d=wb6bb8cf840ef4904a122a503b6b6060e" target="_blank">Plan d'analyse métier</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/2.Plan%20de%20Business%20Analyse/LivrableType_Plan%20de%20Business%20Analyse_RegistrePartiesPrenantes.xlsx?d=wdaec96b068bf4e6a88051276d59679ce" target="_blank">Registre des parties prenantes</a>
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                        Etude de faisabilité
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/3.Dossier%20de%20faisabilit%C3%A9/LivrableType_Dossier%20de%20faisabilit%C3%A9_V2.docx?d=w0b42a20fabb5463d92806ca0ae7415d5" target="_blank">Dossier de faisabilité</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/3.Dossier%20de%20faisabilit%C3%A9/LivrableType_Dossier%20de%20faisabilit%C3%A9_CQQCOQP.pptx?d=wcdf255f8d7e44a2e9838ef5fa645b7b1" target="_blank">CQQCOQP</a>
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                        Cadrage fonctionnel
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/4.Dossier%20des%20Exigences/LivrableType_Dossier%20des%20Exigences%20M%C3%A9tier%20et%20de%20Conception%20fonctionnelle_V2.1.docx?d=w3cd469d2836248cea6ec1b4e42b941d7" target="_blank">Dossier des exigences métier et de conception fonctionnelle</a>
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/4.Dossier%20des%20Exigences/LivrableType_DEMCF_Annexe_V5.xlsx?d=wc53341a2d7a446c585c661964da8b388" target="_blank">DEMCF Annexe5</a>
                                </Typography>
                                <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
                                        Evaluation de la solution
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign:'center'}}>
                                    <a href="https://mntprod.sharepoint.com/sites/Intranet/BA/Documents%20partages/KIT%20BA/Livrables%20type/5.Evaluation%20de%20Solution/LivrableType_Evaluation%20solution_V2.docx?d=w000c427169b74348ae920fda68846735" target="_blank">Evaluation de la solution</a>
                                </Typography>
                                
                            </div>                            
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>


                      {/* <Typography variant="headline" gutterBottom>
                                Livrables
                        </Typography>
                    <div style={{margin: '0,auto'}}>
                        
                         <Typography variant="subheading" gutterBottom>
                               Etude d'opportunités
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Etude de faisabilité
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Plan d'analyse métier
                        </Typography>
                        <Typography variant="subheading" gutterBottom>
                                Dossier d'exigences fonctionnelles
                        </Typography>
                        
                    </div> */}
            </Layout>
        );
    }
}
export default Deliverables;