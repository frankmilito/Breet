import { makeStyles } from '@mui/styles'
import { Box, Button, Grid } from '@mui/material'
import heroImage from '../assets/heroImage.svg'
import brands from '../assets/Logos.svg'
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '3em 8em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    leftSection: {
        color: '#fff'
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        lineHeight: '72px'
    },
    subTitle: {
        fontSize: '16px',
        padding: '1em 0',
        fontFamily: 'sans-serif',
        letterSpacing: '1px',
        lineHeight: '28px'
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))
const HeroSection = () => {
    const classes = useStyles();
    return (
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
                <img src={heroImage} alt="" />
            </Grid>
            <div >

                <img src={brands} alt="" />
            </div>
        </Grid>
    )
}

export default HeroSection