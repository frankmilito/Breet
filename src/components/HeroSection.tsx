import { makeStyles } from '@mui/styles'
import { Box, Button, Grid } from '@mui/material'
import heroImage from '../assets/heroImage.svg'
import brands from '../assets/Logos.svg'
import { Theme } from "@mui/system";
import backgroundImage from '../assets/background.svg'
import Navbar from './Navbar'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '3em 8em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 0,

        [theme.breakpoints.down('md')]: {
            height: '100%',
            flexDirection: 'column',
            padding: '2em 4em'
        }
    },
    wrapper: {
        boxSizing: 'border-box',
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        [theme.breakpoints.down('md')]: {
            height: '100%'
        }
    },
    leftSection: {
        color: '#fff'
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        lineHeight: '72px',
        [theme.breakpoints.down('lg')]: {
            fontSize: '36px',
            lineHeight: '40px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            lineHeight: '30px',
        },
    },
    subTitle: {
        fontSize: '16px',
        padding: '1em 0',
        fontFamily: 'sans-serif',
        letterSpacing: '1px',
        lineHeight: '28px',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'justify'
        },
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    brands: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: '2em',
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear - gradient(90deg, #0A2640 0 %, rgba(10, 38, 64, 0.109375) 31.6 %, rgba(10, 38, 64, 0) 72.89 %, #0A2640 97.87 %)'
    },
    image: {
        maxWidth: '100%',
    }
}))
const HeroSection = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.wrapper}>
                <Navbar />
                <Grid container className={classes.container}>
                    <Grid item md={5} className={classes.leftSection}>
                        <h1 className={classes.title}>Save time by building  fast with Boldo Template </h1>
                        <p className={classes.subTitle}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure. </p>
                        <div>
                            <Button variant='contained' color='secondary' className='button-contained'>Buy Template</Button>
                            <Button variant='outlined' className='button-outlined'>Explore</Button>
                        </div>
                    </Grid>
                    <Grid item md={5} className={classes.rightSection}>
                        <img src={heroImage} alt="" className={classes.image} />
                    </Grid>
                    <div className={classes.brands}>

                        <img src={brands} alt="" style={{ width: '100%' }} />
                        <div className={classes.overlay}></div>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default HeroSection