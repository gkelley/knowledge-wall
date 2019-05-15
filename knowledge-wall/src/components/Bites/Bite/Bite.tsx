import React from "react";
import { bite, biteType } from "../../../models/models";
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

interface BiteProps {
  bite: bite;
}

const getBackgroundColor = (type: biteType) => {
  switch (type) {
    case biteType.Web:
      return "#ACE9DB";
    case biteType.Mobile:
      return "#B6E4C7";
    case biteType.Cms:
      return "#FDDDAA";
    case biteType.Rp:
      return "#EBBAB4";
    case biteType.Entrepreneurship:
      return "#B3D4EB";
    case biteType.Sharepoint:
      return "#DBBDE5";
    default:
      return "#FDDDAA";
  }
};

const getCardType = (type: biteType) => {
  switch (type) {
    case biteType.Web:
      return "Web";
    case biteType.Mobile:
      return "Mobile";
    case biteType.Cms:
      return "CMS";
    case biteType.Rp:
      return "RP";
    case biteType.Entrepreneurship:
      return "Entr";
    case biteType.Sharepoint:
      return "SharePoint";
    default:
      return "Other";
  }
};

const Bite = (props: BiteProps) => {
  const typeColor = { backgroundColor: getBackgroundColor(props.bite.type) };
  return (
    <Card>
      <CardHeader
        style={typeColor}
        title={props.bite.title}
        action={
          <Chip className={classes.cardBackground} label={getCardType(props.bite.type)}/>
        }
      />
      <CardContent>
        <Typography>
          {props.bite.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.upvoteContainer}>
        <Avatar>
          <span>{props.bite.upvotes}</span>
        </Avatar>
        <IconButton className={classes.upvoteButton}>
          <ArrowUpward />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Bite;
