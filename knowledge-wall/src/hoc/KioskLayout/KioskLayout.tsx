import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./KioskLayout.module.css";

class KioskLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Knowledge Wall [Kiosk]
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default KioskLayout;
