import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import footerLogo from '../../assets/footerLogo.svg'
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5em 8em',
        marginBottom: '5em'
    },
    wrapper: {
        display: 'grid',
        //  justifyContent: 'space-between' 
        gridTemplateColumns: '2fr 1fr 1fr 1fr'
    },
    footerItems: {
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '2em',
        alignItems: 'start',
        color: 'rgba(119, 119, 119, 1)'

    },
    title: {
        width: '60%',

    }
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box className={classes.wrapper}>
                <Box className={classes.footerItems}>
                    <img src={footerLogo} alt="" style={{ maxWidth: '100%' }} />
                    <p className={classes.title}>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                    <p>All rights reserved.</p>
                </Box>
                <Box className={classes.footerItems}>
                    <h2 style={{ color: '#000' }}>Landings</h2>
                    <p>Home</p>
                    <p>Product</p>
                    <p>Services</p>
                </Box>
                <Box className={classes.footerItems}>
                    <h2 style={{ color: '#000' }}>Company</h2>
                    <p>Home</p>
                    <p>Career</p>
                    <p>Services</p>
                </Box>
                <Box className={classes.footerItems}>
                    <h2 style={{ color: '#000' }}>Resources</h2>
                    <p>Blog</p>
                    <p>Product</p>
                    <p>Services</p>
                </Box >

            </Box >
        </Box >
    )
}

export default Footer