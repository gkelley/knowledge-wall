import React from "react";
import { bite, biteTypes } from "../../../models/models";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CardHeader,
  Avatar,
  Chip
} from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import classes from "./Bite.module.css";
import Commitment from "../../Commitment/Commitment";

interface BiteProps {
  bite: bite;
}

const Bite = (props: BiteProps) => {
  return (
    <Card>
      <CardHeader
        style={{ backgroundColor: biteTypes[props.bite.biteData.type].color }}
        title={props.bite.biteData.title}
        action={
          <Chip className={classes.cardBackground} label={biteTypes[props.bite.biteData.type].displayName}/>
        }
      />
      <CardContent>
        <Typography>
          {props.bite.biteData.description}
        </Typography>
        {props.bite.biteData.commitment && <Commitment color={biteTypes[props.bite.biteData.type].color} commitment={props.bite.biteData.commitment}/>}
      </CardContent>
      <CardActions className={classes.upvoteContainer}>
        <Avatar>
          <span>{props.bite.biteData.upvotes}</span>
        </Avatar>
        <IconButton className={classes.upvoteButton}>
          <ArrowUpward />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Bite;
