import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Home from 'components/Accueil';
import Kitacc from 'components/Kitacc';
import Overview from 'components/Overview';
import Deliverables from 'components/Deliverables';
import Tools from 'components/Tools';
import Community from 'components/Community';
import NotFound from 'components/notFound';
import Projects from 'components/Projects';
import Projects_list from 'components/Projects_list';
import Process1 from 'components/process/Process1';
import Process2 from 'components/process/Process2';
import Process3 from 'components/process/Process3';
import Process4 from 'components/process/Process4';
import Process5 from 'components/process/Process5';
import Process6 from 'components/process/Process6';
import Process7 from 'components/process/Process7';
import Project from 'components/containers/Projet/Project';
import Project_detail from 'components/containers/Projet/Project_detail';
import Conduite_Changement from 'components/Conduite_Changement';
import Pilotage from 'components/Pilotage';
import Maj_Referentiel from 'components/Maj_Referentiel';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Kitacc}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Kitacc" component={Kitacc}/>
                <Route path="/Overview" component={Overview}/>
                <Route path="/Deliverables" component={Deliverables}/>
                <Route path="/Tools" component={Tools}/>
                <Route path="/Community" component={Community}/>
                <Route path="/Projects" component={Projects}/>
                <Route path="/Project_detail" component={Project_detail}/>
                <Route exact path="Projects_list" component={Projects_list}/>
                <Route path="Project" component={Project}/>
                <Route path="/Process1" component={Process1}/>
                <Route path="/Process2" component={Process2}/>
                <Route path="/Process3" component={Process3}/>
                <Route path="/Process4" component={Process4}/>
                <Route path="/Process5" component={Process5}/>
                <Route path="/Process6" component={Process6}/>
                <Route path="/Process7" component={Process7}/>
                <Route path="/Conduite_Changement" component={Conduite_Changement}/>
                <Route path="/Pilotage" component={Pilotage}/>
                <Route path="/Maj_Referentiel" component={Maj_Referentiel}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router