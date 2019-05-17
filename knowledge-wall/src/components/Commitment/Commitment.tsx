import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent
} from "@material-ui/core";
import { formatTypes, commitment } from "../../models/models";
import classes from "./Commitment.module.css";
import { LightenDarkenColor } from "../../utilities/colorManipulator";

interface CommitmentProps {
  commitment: commitment;
  color: string;
}


const Commitment = (props: CommitmentProps) => {
  return (
    <Card
      className={classes.card}
      style={{ backgroundColor: LightenDarkenColor(props.color, 65) }}
    >
      <CardHeader
        title={props.commitment.author}
        subheader={formatTypes[props.commitment.format].displayName}
        avatar={
          <React.Fragment>
            <Avatar src={formatTypes[props.commitment.format].image} />
      
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
