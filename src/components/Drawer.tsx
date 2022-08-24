import React, { useState, useEffect } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Typography,
    MenuItem,
    Badge,
    Button,
    ListItemIcon,
    Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Menu, Close } from "@mui/icons-material/";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#FFF1DA",
        color: "#000",
        width: "100vw",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .MuiIconButton-root": {
            padding: "30em",
            paddingRight: "0",
        },
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
        justifyContent: "center",
    },
    logo: {
        maxWidth: "100%",
        height: "60px",
        // width: "120px",
    },
    links: {
        fontFamily: "Poppins",
        fontWeight: "300",
        textDecoration: "none",
        color: "#000",
        fontSize: "16px",
        cursor: "pointer",
        transition: "200ms ease-in-out",
        "&:hover": {
            fontWeight: "600",
        },
    },
    account: {
        marginRight: "10px",
    },
    listItems: {
        padding: "1em 2em",
    },
    menuText: {
        "& .MuiTypography-body1": {
            fontSize: "14px",
        },
    },
    lists: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        "& .MuiIconButton-root": {
            padding: "0",
        },
    },
}));

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const classes = useStyles();

    return (
        <>
            <Drawer
                anchor="top"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                // className={classes.drawer}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <List style={{ margin: "0", padding: "0" }} className={classes.lists}>
                    <Box>
                        <ListItemText>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                    marginRight: "10px",
                                }}
                                onClick={() => setOpenDrawer(false)}
                            >
                                <IconButton>
                                    <Close />
                                </IconButton>
                            </div>
                            <Typography variant="h4" className={classes.logo}>
                                <img
                                    src="/images/Logo.png"
                                    alt=""
                                    className={classes.logo}
                                />
                            </Typography>
                        </ListItemText>
                    </Box>

                    <ListItem
                    >
                        <ListItemText>
                            <Typography variant="body1" className={classes.links}>
                                Product
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem

                        className={classes.listItems}
                    >
                        <ListItemText>
                            <Typography variant="body1" className={classes.links}>
                                Services
                            </Typography>{" "}
                        </ListItemText>
                    </ListItem>

                    <ListItem
                        className={classes.listItems}
                    >
                        <ListItemText>
                            <Typography variant="body1" className={classes.links}>
                                About
                            </Typography>
                        </ListItemText>
                    </ListItem>


                    <ListItem
                        className={classes.listItems}
                    >
                        <ListItemText>
                            <Typography variant="body1" className={`${classes.links} `}>
                                Login
                            </Typography>{" "}
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu style={{ color: '#fff' }} />
            </IconButton>
        </>
    );
};

export default DrawerComponent;
