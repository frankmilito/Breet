import { Box, Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Cards from '../Reusable/Cards';
import ListItem from '../Reusable/ListItem';
import card1 from '../../assets/card1.svg'
import customer1 from '../../assets/customer1.svg'
import customer2 from '../../assets/customer2.svg'
import checkImage from '../../assets/checkImage.svg'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5em 0',
        textAlign: 'center'
    },
    titleContainer: {
        width: '50%',
        margin: '0 auto'
    },
    title: {
        color: '#777777',
        fontSize: '18px',
        marginBottom: '1em'
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '36px',
        lineHeight: '42px',
        fontWeight: 400
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1em'
    },
    sectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '0 8em',
        marginTop: '10em',
        textAlign: 'left'
    },
    leftSection: {
        // display: 'flex',
        // justifyContent: 'flex-end'
    },
    rightSection: {

    },
    imageBox: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    image: {
        marginRight: '20px',
        maxWidth: "100%",
    },
    bulletPoints: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: '2em'
    },
    customerTitle: {
        fontSize: '30px',
        marginBottom: '1em',
        width: '80%'
    }
}))

const Services = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <div className={classes.titleContainer}>
                <h3 className={classes.title}>Our Services</h3>
                <h2 className={classes.subtitle}>Handshake infographic mass market crowdfunding iteration.</h2>
            </div>
            <Box className={classes.cards}>
                <Cards image={card1} title={'title one'} content={'content1'} link={'explore'} />
                <Cards image={card1} title={'title one'} content={'content1'} link={'explore'} />
                <Cards image={card1} title={'title one'} content={'content1'} link={'explore'} />
            </Box>
            <Grid container className={classes.sectionContainer}>
                <Grid item md={5} className={classes.leftSection}>
                    <img src={customer1} alt="" />
                </Grid>
                <Grid item md={5} className={classes.rightSection}>
                    <h2 className={classes.customerTitle}>We connect our customers with the best, and help them keep up-and stay open.</h2>
                    <div className={classes.bulletPoints}>
                        <div className={classes.imageBox}> <img src={checkImage} alt="" className={classes.image} /> <p>We connect our customers with the best.</p></div>
                        <div className={classes.imageBox}>
                            <img src={checkImage} alt="" className={classes.image} /> <p>Advisor success customer launch party.</p>
                        </div>
                        <div className={classes.imageBox}>
                            <img src={checkImage} alt="" className={classes.image} /> <p>Business-to-consumer long tail.</p>
                        </div>
                    </div>
                    <Button className='button-contained' variant='contained' color='primary'>Start Now</Button>
                </Grid>
            </Grid>
            <Grid container className={classes.sectionContainer}>

                <Grid item md={5} className={classes.rightSection}>
                    <h2 className={classes.customerTitle}>We connect our customers with the best, and help them keep up-and stay open.</h2>
                    <div className={classes.bulletPoints}>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </div>

                </Grid>
                <Grid item md={5} className={classes.leftSection}>
                    <img src={customer2} alt="" />
                </Grid>
            </Grid>

        </Box>
    )
}

export default Services