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
    bulletList: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: "White",
        marginLeft: 30,
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
                    <p className={classes.paperSecond}>Brian is a Full Stack developer, activley seeking a career in web development.  He recently finished an intensive 6 month course through the University of New Hampshire.  His background in mechanical engineering gave him time to hone his problem solving and ability to work well in a fast paced enviornment.  </p>
                </Grid>
                <Grid container className={classes.minorHeader} item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <h1 className={classes.paperSecond}>Skills:</h1>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>
                    <Grid item xs={6}>
                        <h4 className={classes.smColumn}>Personal</h4>
                        <hr className={classes.whiteLine}></hr>
                        <ul className={classes.bulletList}>
                            <li>Time managment</li>
                            <li>Collaboration</li>
                            <li>workflow optimization</li>
                            <li>Problem solving</li>
                            <li>Photography</li>

                        </ul>

                    </Grid>
                    <Grid item xs={6}>
                        <h4 className={classes.smColumn}>Technical</h4>
                        <hr className={classes.whiteLine}></hr>
                        <ul className={classes.bulletList}>
                            <li>JavaScript</li>
                            <li>ECMAScript (ES6)</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>Material UI / Bootstrap</li>

                        </ul>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
