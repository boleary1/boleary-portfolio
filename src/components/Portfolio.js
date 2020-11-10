import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Image from 'material-ui-image';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import rockstarImage from '../Assets/rockstar.jpg';
import barneyImage from '../Assets/barney.jpg';
import brewerImage from '../Assets/brewerfitness2.jpg';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'Black'
    },
    image: {
        flexGrow: 1,
        backgroundColor: 'Black',
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
    blackProject: {
        textAlign: 'center',
        color: "white",
        backgroundColor: 'Black'

    },

    text: {
        textAlign: 'center',
        color: "white",
        backgroundColor: 'Black',
        padding: 10,
    },


}));


export default function AboutGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1 id="About" className={classes.sectionHeader}>Portfolio
                    <IconButton aria-label="Linkedin.com" onClick={() => "#top"}>
                            <ArrowUpwardIcon className={classes.icon} />
                        </IconButton></h1>

                </Grid>

                <Grid container className={classes.blackProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.image}
                            src= {rockstarImage}
                        // src="https://lh3.googleusercontent.com/pw/ACtC-3eRmHBHA45H5Eadss1wScnugcOIUQHuPyvK8FIPiAZBTueAaYhlozsTSKthMCjbxnlaGp3Q88y_ax9gl2F7QcQPSGnnpOumQ62HBC6HNHc_bCHW0p5LOwxetQzaWIoRQHwnEqBEEnQdTp2Yed2FiLneqQ=w503-h504-no?authuser=0"
                        />
                    </Grid>
                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>Rockstar Volumes</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>Built and manage online website and store for rockstar volumes using wix.  </p>
                        <a className={classes.paperSecond} href="https://www.rockstarvolumes.com">View Website</a>

                    </Grid>
                    <Grid xs={0} sm={1} ></Grid>


                </Grid>
                <Grid container className={classes.blackProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>
                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>Brewer Fitness</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>I'm responsible for managing and updating the website. In addition to managing the online store.

                        skills used:
                        -Wordpress, WooCommerece
</p>
                        <a className={classes.paperSecond} href="https://brewerfitness.com/">View Website</a>

                    </Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.root}
                            src={brewerImage}
                        />
                    </Grid>

                    <Grid xs={0} sm={1} ></Grid>


                </Grid>
            </Grid>

        </div >
    );
}
