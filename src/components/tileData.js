import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import {
  Link
} from 'react-router-dom';


var styles = {
  marginLeft:'5px',
  marginTop:'5px',
  color:'black'
}

const linkStyle = {
  textDecoration: 'none'
}

export const mailFolderListItems = (
    <div>
      <Link style={linkStyle} to="/Kitacc">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/kit.png' alt="Accueil"/>
          </ListItemIcon>
          <ListItemText primary="Kit d'accueil" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Projects">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/projets.png' alt="Liste des projets"/>
          </ListItemIcon>
          <ListItemText primary="Liste des projets" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Overview">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/processus.png' alt="Processus projet"/>
          </ListItemIcon>
          <ListItemText primary="Processus projet" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Deliverables">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/livrables.png' alt="Livrables"/>
          </ListItemIcon>
          <ListItemText primary="Livrables" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Tools">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/outils.png' alt="Outils"/>
          </ListItemIcon>
          <ListItemText primary="Outils" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Community">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/communaute.png'alt="Communauté"/>
          </ListItemIcon>
          <ListItemText primary="Communauté" />
        </ListItem>
      </Link>
    </div>
);