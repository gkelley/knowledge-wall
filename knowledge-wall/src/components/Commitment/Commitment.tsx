import React from "react";
import { Card, CardHeader, Avatar, Typography, CardContent } from "@material-ui/core";
import { formatTypes, commitment } from "../../models/models";
import classes from "./Commitment.module.css";

interface CommitmentProps {
    commitment: commitment;
}

const Commitment = (props: CommitmentProps) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.commitment.author}
        subheader={"12/03/1995"}
        avatar={
            <React.Fragment>
                <Avatar src={formatTypes[props.commitment.format].image}/>
                <Typography align="center">{formatTypes[props.commitment.format].displayName}</Typography>
            </React.Fragment>
        }
      />
      <CardContent className={classes.cardContent}>
        <Typography>{props.commitment.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Commitment;
