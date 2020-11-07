import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'Black'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // backgroundColor: 'Black'

    },
    paperSecond: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'

    },

    icon: {
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'
    },
    whiteLine: {
        color: "White",
        backgroundColor: "White",
        height: 5,
    },
}));


export default function AboutGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                        <h1 className={classes.paperSecond}>About</h1>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>
                <Grid item xs={12} sm={6}>
 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <h1 className={classes.paperSecond}>Full Stack Web Developer</h1>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
