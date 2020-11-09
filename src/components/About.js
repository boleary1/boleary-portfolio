import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
    sectionHeader: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        backgroundColor: "#367FAF"

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
        margin: 24,
        marginTop: -35,
    },
    minorHeader: {

        marginTop: -50,
    },
    smColumn: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        [theme.breakpoints.down("xs")]: { marginTop: -30 },
        [theme.breakpoints.up("sm")]: { marginTop: -30 },

        // backgroundColor: 'Red'
        // marginTop: -30,

    },
}));


export default function AboutGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 id="About" className={classes.sectionHeader}>About
                    <IconButton aria-label="Linkedin.com" onClick={() => "#top"}>
                            <ArrowUpwardIcon className={classes.icon} />
                        </IconButton></h1>

                </Grid>
                <Grid className={classes.minorHeader} item xs={12} sm={6}>
                    <h1 className={classes.paperSecond}>About Me:</h1>
                    <hr className={classes.whiteLine}></hr>
                    <p className={classes.paperSecond}>Brian is a Full Stack developor in training he is in the process of completing a coding bootcamp through the University of New Hampshire and Trilogy education.  He is coming from a mechanical engineering background where he worked to develop and improve high end fitness equipment.  </p>
                </Grid>
                <Grid container className={classes.minorHeader} item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <h1 className={classes.paperSecond}>Skills:</h1>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>
                    <Grid item xs={6}>
                        <h4 className={classes.smColumn}>Personal</h4>
                        <hr className={classes.whiteLine}></hr>
                        <ul>
                            <li>-Item</li>
                            <li>-Item</li>
                            <li>-Item</li>
                            <li>-Item</li>
                            <li>-Item</li>

                        </ul>

                    </Grid>
                    <Grid item xs={6}>
                        <h4 className={classes.smColumn}>Technical</h4>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
