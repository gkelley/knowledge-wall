import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,  
} from "@material-ui/core";
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
              <Avatar src="https://media.licdn.com/dms/image/C4E0BAQEzidOHxvXPRQ/company-logo_200_200/0?e=2159024400&v=beta&t=REo20Yxby9OchMNIFNGiBQGNjMUUiGpg2XnqukMmkpk" />
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
