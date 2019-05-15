import React from 'react';
import { Grid } from "@material-ui/core";
import Bite from './Bite/Bite';
import { bite } from '../../models/models';

interface BiteProps {
 bites: bite[]
}

const Bites = (props: BiteProps) => {
    const bites = props.bites.map( bite => (
        <Grid item xs={4}>
            <Bite bite={bite} />
        </Grid>
    ));
    return (
      <Grid style={{"paddingTop": "30px"}} container spacing={24}>
        {bites}
      </Grid>
    );
};

export default Bites;