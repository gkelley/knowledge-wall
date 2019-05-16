import React, { Component } from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

class CommitmentForm extends Component {
    render() {
        return (
            <Paper>
                <Grid container spacing={24}>
                    <Grid item>
                        <Typography>Create a "Knowledge Bite"</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default CommitmentForm;