import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 750
  },
  fullList: {
    width: 'auto',
  },
  linkText: {
    textDecoration: `none`,
    color: `black`
  }
});

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ bottom: false });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("bottom", true)}
      >
        <Typography variant="subtitle1" style={{ color: 'white' }}>
          {'My Pokemon'}
        </Typography>
      </IconButton>

      <Drawer
        anchor="bottom"
        open={state.bottom}
        onOpen={toggleDrawer("bottom", true)}
        onClose={toggleDrawer("bottom", false)}
      >
        {sideDrawerList("bottom")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
