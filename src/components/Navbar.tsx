import React, { useState, } from "react";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    Grid,
    IconButton,
    Box,
    ListItem,
    Button
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DrawerComponent from "./Drawer";
import { Theme } from "@mui/system";
import logo from '../assets/Logo_shape.svg'

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        // backgroundColor: "transparent",
        color: "#fff",
        width: "100vw",
        padding: '2em 8em',
        paddingBottom: 0

    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& .MuiIconButton-root": {
            padding: 0,
            paddingRight: "8px",
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "space-between",
        },
    },
    logoTitle: {
        fontSize: '2em'
    },
    headerlinks: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100%",
    },
    navlinks: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1em 0",
    },
    logo: {
        display: 'flex'
    },
    links: {
        fontFamily: "Poppins",
        fontWeight: "500",
        textDecoration: "none",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        transition: "200ms ease-in-out",
        "&:hover": {
            fontWeight: "600",
            color: "#000",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
}));

function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', }} className={classes.appBar}>
                <CssBaseline />
                <Toolbar style={{ padding: 0, margin: 0 }}>
                    <Grid
                        container
                        justifyContent={"space-between"}
                        className={classes.container}
                    >

                        <Grid item sm={2} className={classes.logo}>
                            <img
                                src={logo}
                                alt=" logo"
                                style={{ marginRight: '10px' }}
                            />
                            <h3 className={classes.logoTitle}>Boldo</h3>
                        </Grid>
                        {isMobile ? (
                            <>
                                <Box>
                                    <IconButton>
                                    </IconButton>{" "}
                                    <DrawerComponent
                                    />
                                </Box>
                            </>
                        ) : (
                            <Grid item sm={4}>
                                <div className={classes.navlinks}>
                                    <>
                                        <Typography
                                            variant="body1"
                                            className={classes.links}
                                        >
                                            <ListItem>Product</ListItem>
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            className={classes.links}
                                        >
                                            <ListItem>Services</ListItem>
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            className={classes.links}
                                        >
                                            <ListItem>About us</ListItem>
                                        </Typography>
                                        <Button variant='contained' style={{ textTransform: 'capitalize', borderRadius: '2em', background: '#fff', color: '#000', padding: ' .5em 2em ' }}>Login</Button>
                                    </>
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
