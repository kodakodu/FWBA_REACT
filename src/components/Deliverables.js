import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from './Layout'

class Deliverables extends React.Component{
    render(){
        return(
            <Layout>
                      <Typography variant="headline" gutterBottom>
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
                        
                    </div>
            </Layout>
        );
    }
}
export default Deliverables;