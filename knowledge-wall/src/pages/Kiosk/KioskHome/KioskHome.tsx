import React, { Component } from "react";
import KioskLayout from "../../../hoc/KioskLayout/KioskLayout";
import NewBiteForm from "../../../components/NewBiteForm/NewBiteForm";
import { Button, Grid, Typography, withStyles, WithStyles } from "@material-ui/core";
import styles from "./styles";
import NewCommitmentForm from "../../../components/NewCommitmentForm/NewCommitmentForm";


interface MyProps extends WithStyles {}
interface KioskHomeState {
  learnFormOpen: boolean,
  teachFormOpen: boolean,
}
class KioskHome extends Component<MyProps, KioskHomeState> {

  state: KioskHomeState = {
    learnFormOpen: false,
    teachFormOpen: false,
  }

  handleLearnOpen = () => {
    this.setState({ learnFormOpen: true });
  };
  handleLearnClose = () => {
    this.setState({ learnFormOpen: false });
  };

  handleTeachOpen = () => {
    this.setState({ teachFormOpen: true });
  };
  handleTeachClose = () => {
    this.setState({ teachFormOpen: false });
  };


  render() {
    return (
      <KioskLayout>
        <Grid className={this.props.classes.gridContainer} container spacing={40}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2" gutterBottom>
              Knowledge Wall
            </Typography>
            <Typography align="center" variant="h5">
              What are you looking to do today?
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Button onClick={this.handleLearnOpen} fullWidth variant="outlined" className={this.props.classes.button}>
              Learn
            </Button>
            <NewBiteForm open={this.state.learnFormOpen} handleClose={this.handleLearnClose}/>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={this.handleTeachOpen} fullWidth variant="outlined" className={this.props.classes.button}>
              Teach
            </Button>
            <NewCommitmentForm open={this.state.teachFormOpen} handleClose={this.handleTeachClose}/>
          </Grid>
        </Grid>
      </KioskLayout>
    );
  }
}

export default withStyles(styles)(KioskHome);
