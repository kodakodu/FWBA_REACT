import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import StarIcon from 'material-ui-icons/Star';
import ExploreIcon from 'material-ui-icons/Explore';
import WorkIcon from 'material-ui-icons/Work';
import QuestionIcon from 'material-ui-icons/QuestionAnswer';
import ToolIcon from 'material-ui-icons/Build';
import AttachmentIcon from 'material-ui-icons/Attachment';

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
            <img src='/img/ico/kit.png'/>
          </ListItemIcon>
          <ListItemText primary="Kit d'accueil" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Overview">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/processus.png'/>
          </ListItemIcon>
          <ListItemText primary="Liste des projets" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Overview">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/processus.png'/>
          </ListItemIcon>
          <ListItemText primary="Processus projet" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Deliverables">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/livrables.png'/>
          </ListItemIcon>
          <ListItemText primary="Livrables" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Tools">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/outils.png'/>
          </ListItemIcon>
          <ListItemText primary="Outils" />
        </ListItem>
      </Link>
      <Link style={linkStyle} to="/Community">
        <ListItem button>
          <ListItemIcon>
            <img src='/img/ico/communaute.png'/>
          </ListItemIcon>
          <ListItemText primary="Communauté" />
        </ListItem>
      </Link>
    </div>
);