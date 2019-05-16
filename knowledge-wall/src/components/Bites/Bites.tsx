import React from "react";
import { Grid } from "@material-ui/core";
import Bite from "./Bite/Bite";
import { bite } from "../../models/models";

interface BiteProps {
  bites: bite[];
}

const sortBites = ( bites: bite[]) => {
  var sorted =  bites.sort(function (biteA, biteB) {
      let biteACommitment =  biteA.biteData.commitment != undefined; 
      let biteBCommitment =  biteB.biteData.commitment != undefined; 
      if (biteACommitment && biteBCommitment) {
        if(biteA.biteData.upvotes >= biteB.biteData.upvotes){
          return -1;
        }
        else{
          return 1;
        }
      }
      else if (!biteACommitment && !biteBCommitment) {
        if(biteA.biteData.upvotes >= biteB.biteData.upvotes){
          return -1;
        }
        else{
          return 1;
        }
      }
      else if(biteACommitment){
        return -1;
      }
      else{
        return 1;
      }
  });
  return sorted;
}

const Bites = (props: BiteProps) => {
  let sortedBites = sortBites(props.bites);
  console.log("Sorted");
  console.log(sortedBites);
  const bites =
  sortedBites && sortedBites.length > 0
      ? props.bites.map(bite => (
          <Grid key={bite.id} item xs={4}>
            <Bite bite={bite} />
          </Grid>
        ))
      : null;
  return (
    <Grid container spacing={40}>
      {bites}
    </Grid>
  );
};

export default Bites;
