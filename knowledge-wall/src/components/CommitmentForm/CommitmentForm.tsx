import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

interface CommitmentFormProps {
  open: boolean;
  handleClose: () => void;
}
class CommitmentForm extends Component<CommitmentFormProps> {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Create "Knowledge Bite"</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default CommitmentForm;
