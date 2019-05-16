import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
} from "@material-ui/core";
import classes from "./KioskLayout.module.css";

class KioskLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              href="/dashboard"
            >
              <Avatar src="https://media.licdn.com/dms/image/C4E0BAQEzidOHxvXPRQ/company-logo_200_200/0?e=2159024400&v=beta&t=REo20Yxby9OchMNIFNGiBQGNjMUUiGpg2XnqukMmkpk" />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Knowledge Wall
            </Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default KioskLayout;
