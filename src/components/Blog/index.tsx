import { Box, Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import blog1 from '../../assets/blog1.svg'
import blog2 from '../../assets/blog2.svg'
import blog3 from '../../assets/blog3.svg'
import blogIcon1 from '../../assets/blogIcon1.svg'
import blogIcon2 from '../../assets/blogIcon2.svg'
import blogIcon3 from '../../assets/blogIcon3.svg'
import Blogs from '../Reusable/Blogs';
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '5em 0',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '3em 0'
        },
    },
    titleContainer: {
        width: '50%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
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
        },
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
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
    }
}))

const Blog = () => {
    const cardItems = [
        {
            image: blog1,
            content: 'Pitch termsheet backing validation focus release.',
            date: 'November 22, 2021',
            link: 'Chandler Bing',
            faqIcon: blogIcon1
        },
        {
            image: blog2,
            content: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            date: 'November 22, 2021',
            link: 'Rachel Green',
            faqIcon: blogIcon2
        },
        {
            image: blog3,
            content: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            date: 'November 22, 2021',
            link: 'Monica Geller',
            faqIcon: blogIcon3
        },
    ]
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <div className={classes.titleContainer}>
                <h3 className={classes.title}>Our Blog</h3>
                <h2 className={classes.subtitle}>Value proposition accelerator product management venture</h2>
            </div>
            <Box className={classes.cards}>
                {cardItems.map(cardItem => (
                    <Blogs key={cardItem.link} image={cardItem.image} content={cardItem.content} faqIcon={cardItem.faqIcon} link={cardItem.link} />
                ))}
            </Box>

        </Box>
    )
}

export default Blog