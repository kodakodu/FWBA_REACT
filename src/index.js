import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Drawer from './components/Drawer';
import Appbar from './components/Appbar';
import MiniDrawer from './components/MiniDrawer';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// class About extends Component {
//    render(){
//        return (<h1>About page</h1>);
//    } 
// }

 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
