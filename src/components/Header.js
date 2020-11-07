import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import { SignalWifi1BarLockSharp } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'Black'
    },

    title: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'

    },
    headshot: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: "White",
        // backgroundColor: 'Red'

    },
    icon: {
        textAlign: 'center',
        color: "White",
        fontSize: "63px",
        paddingLeft: "20px"
        // backgroundColor: 'Red'
    },
    iconCtn: {
        display: "flex",
        justifyContent: "Center",
    },
    whiteLine: {
        color: "White",
        backgroundColor: "White",
        height: 5,
        margin: 24,
    },

}));


export default function HeaderGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >

                <Grid item xs={12} sm={6}>
                    <Image
                        src="/Assets/IMG_0442.png"
                    // src="https://lh3.googleusercontent.com/pw/ACtC-3eRmHBHA45H5Eadss1wScnugcOIUQHuPyvK8FIPiAZBTueAaYhlozsTSKthMCjbxnlaGp3Q88y_ax9gl2F7QcQPSGnnpOumQ62HBC6HNHc_bCHW0p5LOwxetQzaWIoRQHwnEqBEEnQdTp2Yed2FiLneqQ=w503-h504-no?authuser=0"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <h1 className={classes.title}>Full Stack Web Developer</h1>
                        <hr className={classes.whiteLine}></hr>

                    </Grid>

                    <Grid container spacing={3} xs={12}>

                        <Grid className={classes.iconCtn} item xs={4}>
                            <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/brianfolanoleary/')}>
                                <LinkedInIcon className={classes.icon} />
                            </IconButton>
                        </Grid>
                        <Grid className={classes.iconCtn} item xs={4}>
                            <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/boleary1')}>
                                <GitHubIcon className={classes.icon} />
                            </IconButton>
                        </Grid>
                        <Grid className={classes.iconCtn} item xs={4}>
                            <IconButton aria-label="Linkedin.com" onClick={() => window.open('/Assets/resume.pdf')}>
                                <AttachFileIcon className={classes.icon} />
                            </IconButton>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}
