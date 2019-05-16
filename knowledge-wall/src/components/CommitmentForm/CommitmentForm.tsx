import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import FormikTextField from "../shared/FormikTextFIeld";
import firebaseInstance from "../../axios-firebase";
import { biteData, biteStatus } from "../../models/models";

const ValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(50, "50 character max"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "255 character max"),
//   type: Yup.number().required("Type is required"),
  author: Yup.string().max(50, "50 character max")
});
interface CommitmentFormProps {
  open: boolean;
  handleClose: () => void;
}

class CommitmentForm extends Component<CommitmentFormProps> {
  handleSubmit = (values: any) => {
    let formData : biteData = {
        title: values.title,
        description: values.description,
        author: values.author,
        dateCreated: new Date(),
        type: 0,
        upvotes: 0,
        commitment: null,
        status: biteStatus.Active,
    }

    firebaseInstance
      .post("/bites.json", formData)
      .then(response => {
        this.props.handleClose();
      })
      .catch(error => {
        //Todo
      });
  };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle>Create "Knowledge Bite"</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Post a "Bite" of information that you want to learn!
          </DialogContentText>
          <Formik
            initialValues={{
              title: "",
              description: "",
              type: 0,
              author: ""
            }}
            validationSchema={ValidationSchema}
            onSubmit={values => {
              this.handleSubmit(values);
            }}
            render={props => (
              <Form>
                <Field
                  name="title"
                  label="Topic"
                  component={FormikTextField}
                  fullWidth
                />
                <Field
                  name="description"
                  label="Description"
                  component={FormikTextField}
                  fullWidth
                />
                <Field
                  name="author"
                  label="Name (Optional)"
                  component={FormikTextField}
                  fullWidth
                />
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

export default CommitmentForm;
