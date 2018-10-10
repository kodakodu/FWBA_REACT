import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from './Layout';

class Community extends React.Component{
    render(){
        return(
            <Layout>
                {/* <h2>Communauté</h2> */}
                        <Typography variant="headline" gutterBottom>
                                Communauté
                        </Typography>
                <h1>-- En construction --</h1>
            </Layout>
        );
    }
}
export default Community;