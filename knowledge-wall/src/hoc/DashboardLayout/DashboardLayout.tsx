import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,  
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./DashboardLayout.module.css";

class DashboardLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              href="/kiosk"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Knowledge Wall
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.contentContainer}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default DashboardLayout;
