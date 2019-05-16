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
import { biteTypes, commitment, commitmentStatus } from "../../models/models";

const ValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(50, "50 character max"),
  description: Yup.string()
    .required("Description is required")
    .max(255, "255 character max"),
  type: Yup.number().required("Type is required"),
  author: Yup.string().max(50, "50 character max")
});
interface NewCommitmentFormProps {
  open: boolean;
  handleClose: () => void;
}

class NewCommitmentForm extends Component<NewCommitmentFormProps> {
  handleSubmit = (values: any) => {
    let formData : {commitment: commitment} = {
        commitment:{
            author: "Griffin",
            description: "I will talk",
            format: 0,
            dateCreated: new Date(),
            expectedDate: undefined,
            status: commitmentStatus.Incomplete 
        }
    }

    firebaseInstance
      .patch("/bites/" +"-Lf1JP0DNfWLsZB-aTWs"+ ".json", formData)
      .then(response => {
        this.props.handleClose();
      })
      .catch(error => {
        //Todo
      });
  };

  render() {
    const biteTypeOptions = biteTypes.map((type, index) => (<option value={index}>{type.displayName}</option>) );
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
                <Field name="type" component="select" placeholder="Category">
                    {biteTypeOptions}
                </Field>
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

export default NewCommitmentForm;
