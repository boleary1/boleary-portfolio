import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "#367FAF"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: { display: "none" },
    },
    otherButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: { display: "none" },
    },
    title: {
        // flexGrow: 1,
        textAlign: "center",
        paddingRight: "2em",
    },
    toolbar: {
        justifyContent: "space-between",
    },
    list: {
        width: 250,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer(true)} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Brian O'Leary
          </Typography>
                    <div>
                        <Button className={classes.otherButton} color="inherit">About Me</Button>
                        <Button className={classes.otherButton} color="inherit">Portfolio</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <div>

                <SwipeableDrawer
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            <h4>Menu</h4>
                            <Divider />

                            <ListItem button >
                                About me
                            </ListItem>
                            <ListItem button >
                                Portfolio
                            </ListItem>

                        </List>

                    </div>
                </SwipeableDrawer>
            </div>
        </div>
    );
}
// export default NavBar;