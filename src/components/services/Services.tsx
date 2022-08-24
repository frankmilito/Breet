import { Box, Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Cards from '../Reusable/Cards';
import ListItem from '../Reusable/ListItem';
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'
import customer1 from '../../assets/customer1.svg'
import customer2 from '../../assets/customer2.svg'
import checkImage from '../../assets/checkImage.svg'
import feather from '../../assets/feather.svg'
import eye from '../../assets/eye.svg'
import star from '../../assets/sun.svg'
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '5em 0',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '2em 0'
        },
    },
    titleContainer: {
        width: '50%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    },
    title: {
        color: '#777777',
        fontSize: '18px',
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '36px',
        lineHeight: '42px',
        fontWeight: 400,
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            lineHeight: '30px',
        },
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1em',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1,1fr)',
            placeContent: 'center',
            alignItems: 'center',
        },
    },
    sectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '0 8em',
        marginTop: '10em',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            padding: ' 0 2em',
            marginTop: '2em'
        }
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
        [theme.breakpoints.down('md')]: {
            maxWidth: "100%",
        }
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
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '24px'
        }
    }
}))

const Services = () => {
    const classes = useStyles();
    const listItems = [
        {
            title: 'We connect our customers with the best.',
            icon: feather,
            color: 'white',
            backgroundColor: 'rgba(10, 38, 64, 1)'
        },
        {
            title: 'Advisor success customer launch party.',
            icon: eye
        },
        {
            title: 'Business-to-consumer long tail.',
            icon: star
        },
    ]

    const cardItems = [
        {
            image: card1,
            title: 'Cool feature title',
            content: 'Learning curve network effects return on investment.'
        },
        {
            image: card2,
            title: 'Even cooler feature',
            content: 'Learning curve network effects return on investment.'
        },
        {
            image: card3,
            title: 'Cool feature title',
            content: 'Learning curve network effects return on investment.'
        },
    ]
    return (
        <Box className={classes.container}>
            <div className={classes.titleContainer}>
                <h3 className={classes.title}>Our Services</h3>
                <h2 className={classes.subtitle}>Handshake infographic mass market crowdfunding iteration.</h2>
            </div>
            <Box className={classes.cards}>
                {cardItems.map(cardItem => (
                    <Cards key={cardItem.title} image={cardItem.image} title={cardItem.title} content={cardItem.content} link={'explore'} />

                ))}
            </Box>
            <Grid container className={classes.sectionContainer}>
                <Grid item md={5} className={classes.leftSection}>
                    <img src={customer1} alt="" className={classes.image} />
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
                        {/* <ListItem background={'rgba(10, 38, 64, 1)'} color='white' />
                        <ListItem /> */}
                        {listItems.map(listItem => (

                            <ListItem image={listItem.icon} title={listItem.title} color={listItem.color} background={listItem.backgroundColor} />
                        ))}
                    </div>

                </Grid>
                <Grid item md={5} className={classes.leftSection}>
                    <img src={customer2} alt="" className={classes.image} />
                </Grid>
            </Grid>

        </Box>
    )
}

export default Services