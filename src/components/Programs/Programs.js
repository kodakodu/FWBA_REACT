import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './Programs.css';
import Layout from '../Layout';

class Programs extends Component {
    render(){
        return(
            <Layout>

                <Grid container spacing={16}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                            <Typography variant="headline" gutterBottom style={{textAlign:'center'}}>
                                Liste des programmes
                            </Typography>

                    <div>
                        <div>
                            <img src="img/VQID.png" alt="VQID" className="img_program"/>
                        </div>
                        <div>
                            <img src="img/VCON.png" alt="VCON" className="img_program"/>
                        </div>
                        <div>
                            <img src="img/VPRE.png" alt="VPRE" className="img_program"/>
                        </div>
                        <div>
                            <img src="img/VFIN.png" alt="VFIN" className="img_program"/>
                        </div>
                        <div>
                            <img src="img/VSAN.png" alt="VSAN" className="img_program"/>
                        </div>
                    </div>                            
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>


                
            </Layout>
        )
    }
}

export default Programs;