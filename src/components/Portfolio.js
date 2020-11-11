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
import weatherImage from '../Assets/weather.JPG';
import brewerImage from '../Assets/brewerfitness2.jpg';
import workoutImage from '../Assets/ScreenshotFullscreen.png';
import burgersImage from '../Assets/burgers.JPG';
import highcardImage from '../Assets/highcard.jpg';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'Black'
    },
    image: {
        flexGrow: 1,
        backgroundColor: 'Black',
        height: 'auto',
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
        backgroundColor: 'Black',
        marginTop: 15,

    },
    greyProject: {
        textAlign: 'center',
        color: "white",
        backgroundColor: 'Black',
        marginTop: 15,
        // [theme.breakpoints.down("sm")]: { flexDirection: "row-reverse" },
        // [theme.breakpoints.down("sm")]: { direction: "column-reverse" },
        // flexDirection: "row-reverse"

    },

    text: {
        textAlign: 'center',
        color: "white",
        backgroundColor: 'Black',
        padding: 10,
    },
    list: {
        textAlign: 'left',
        color: "white",
        backgroundColor: 'Black',
        listStyleType: 'none'
    },
    listHeader: {
        textAlign: 'left',
        marginLeft: 35,
        color: "white",
        backgroundColor: 'Black',
        listStyleType: 'none',
        textDecoration: 'underline',
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
                        <Image className={classes.root}
                            src={workoutImage}
                        />
                    </Grid>
                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>We Workout</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>An app that helps to decide what type of workout to do.</p>

                        <h4 className={classes.listHeader}> skills used:</h4>
                        <ul className={classes.list}>
                            <li>-Node</li>
                            <li>-passport.js</li>

                            <li>-Heroku</li>
                            <li>-HTML</li>
                            <li>-CSS</li>
                            <li>-Java Script</li>
                        </ul>


                        <a className={classes.paperSecond} href="https://weworkoutapp.herokuapp.com/">View Website</a>
                        <a className={classes.paperSecond} href="https://github.com/achampigny4/we-workout">View Source Code</a>


                    </Grid>


                    <Grid xs={0} sm={1} ></Grid>


                </Grid>
                <Grid container className={classes.greyProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>

                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>Weather app</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>A weather dashboard that makes external API calls to find weather via a zip code. The recent searches are saved in local storage.</p>

                        <h4 className={classes.listHeader}> skills used:</h4>
                        <ul className={classes.list}>
                            <li>-API Calls</li>
                            <li>-HTML</li>
                            <li>-CSS</li>
                            <li>-Java Script</li>
                        </ul>


                        <a className={classes.paperSecond} href="https://boleary1.github.io/Homework-6-server-side_APIs/">View Website</a>
                        <a className={classes.paperSecond} href="https://github.com/boleary1/Homework-6-server-side_APIs">View Source Code</a>


                    </Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.root}
                            src={weatherImage}
                        />
                    </Grid>

                    <Grid xs={0} sm={1} ></Grid>


                </Grid>

                <Grid container className={classes.blackProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.image}
                            src={burgersImage}
                        />
                    </Grid>
                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>Burger App</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>In this project I created a burgers menu to order and delete from a database.  </p>


                        <h4 className={classes.listHeader}> skills used:</h4>
                        <ul className={classes.list}>
                            <li>-database reading/ writing</li>
                            <li>-HTML</li>
                            <li>-CSS</li>
                            <li>-Java Script</li>
                        </ul>
                        <a className={classes.paperSecond} href="https://burger--menu.herokuapp.com/">View Website</a>
                        <a className={classes.paperSecond} href="https://github.com/boleary1/Burgers">View Source Code</a>
                    </Grid>
                    <Grid xs={0} sm={1} ></Grid>


                </Grid>
                <Grid container className={classes.greyProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>
                    <Grid className={classes.text} xs={12} sm={5} >
                        <h2 className={classes.paperSecond}>High Card picks dinner</h2>
                        <hr className={classes.whiteLine}></hr>
                        <p className={classes.paperSecond}>An app to help solve the debate about what to have for dinner and saves recent choices with local storage.</p>

                        <h4 className={classes.listHeader}> skills used:</h4>
                        <ul className={classes.list}>
                            <li>-HTML</li>
                            <li>-CSS</li>
                            <li>-Java Script</li>
                        </ul>
                        <a className={classes.paperSecond} href="https://tiffany-brand.github.io/high-card-picks-dinner/">View Website</a>
                        <a className={classes.paperSecond} href="https://github.com/tiffany-brand/high-card-picks-dinner">View Source Code</a>


                    </Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.root}
                            src={highcardImage}
                        />
                    </Grid>

                    <Grid xs={0} sm={1} ></Grid>


                </Grid>

                <Grid container className={classes.blackProject} spacing={3}>
                    <Grid xs={0} sm={1} ></Grid>
                    <Grid xs={12} sm={5} >
                        <Image className={classes.image}
                            src={rockstarImage}
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
                <Grid container className={classes.greyProject} spacing={3}>
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
