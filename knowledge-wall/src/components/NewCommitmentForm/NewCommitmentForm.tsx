import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import FormikTextField from "../shared/FormikTextFIeld";
import firebaseInstance, { GetAllBites, PatchCommitment } from "../../axios-firebase";
import { commitment, commitmentStatus, formatTypes, bite } from "../../models/models";

const ValidationSchema = Yup.object().shape({
  biteId: Yup.string()
  .required("Topic is required"),
  author: Yup.string()
  .required("Name is required")
  .max(50, "50 character max"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "255 character max"),
  format: Yup.number().required("Format is required"),
});
interface NewCommitmentFormProps {
  open: boolean;
  handleClose: () => void;
}

interface NewCommitmentState {
  bites: bite[];
}

class NewCommitmentForm extends Component<NewCommitmentFormProps, NewCommitmentState> {

  state : NewCommitmentState = {
    bites: [],
  }

  
  componentDidMount() {
    GetAllBites().then(response =>{
      this.setState({"bites": response});
    });
  }

  componentWillReceiveProps() {
    GetAllBites().then(response =>{
      this.setState({"bites": response});
    });
  }

  handleSubmit = (values: any) => {
    let formData : {commitment: commitment} = {
        commitment:{
            author: values.author,
            description: values.description,
            format: values.format,
            dateCreated: new Date(),
            expectedDate: undefined,
            status: commitmentStatus.Incomplete 
        }
    }
    PatchCommitment(formData, values.biteId).then(() => {
      this.props.handleClose();
    });
  };

  render() {
    const formatTypeOptions = formatTypes.map((type, index) => (<option value={index}>{type.displayName}</option>) );
    const postOptions = this.state.bites.map((bite) => (<option value={bite.id}>{bite.biteData.title}</option>) );
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Commit to teaching a "Knowledge Bite"</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Teach your colleagues in what ever format you want.
          </DialogContentText>
          <Formik
            initialValues={{
              biteId: "",
              author: "",
              description: "",
              format: 0,
            }}
            validationSchema={ValidationSchema}
            onSubmit={values => {
              this.handleSubmit(values);
            }}
            render={props => (
              <Form>
                <Field 
                  label="Topic" 
                  select="true" 
                  variant="outlined" 
                  name="biteId" 
                  margin="normal" 
                  fullWidth
                  component={FormikTextField} 
                >
                  {postOptions}
                </Field>
                 <Field
                  name="author"
                  label="Name"
                  component={FormikTextField}
                  fullWidth
                  variant="outlined"
                  margin="normal" 
                />
                <Field
                  name="description"
                  label="Description"
                  component={FormikTextField}
                  fullWidth
                  multiline
                  rowsMax="4"
                  variant="outlined"
                  margin="normal" 
                />
                <Field 
                  label="Format" 
                  select="true" 
                  variant="outlined" 
                  margin="normal" 
                  name="format" 
                  component={FormikTextField}
                >
                  {formatTypeOptions}
                </Field>
                <DialogActions>
                  <Button onClick={this.props.handleClose}>Cancel</Button>
                  <Button type="submit">Post</Button>
                </DialogActions>
              </Form>
            )}
          />
        </DialogContent>
      </Dialog>
    );
  }
}

export default NewCommitmentForm;
