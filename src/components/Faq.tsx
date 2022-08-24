import { makeStyles } from '@mui/styles'
import image from '../assets/Image.svg'
import faqIcon from '../assets/faqIcon.svg'
import { Box } from '@mui/material'
import { Theme } from '@mui/system'
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '5em 8em',
        [theme.breakpoints.down('md')]: {
            padding: '2em 4em'
        },
    },
    title: {
        fontSize: '36px',
        fontWeight: 400,
        lineHeight: ' 56px',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'justify'
        },
    },
    subtitle: {
        fontSize: '16px',
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',

        },
    },
    faqSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '5em',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(1,1fr)',
            gap: '1em'
        },


    },
    faqContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid',
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {

        },
    },
    image: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
        }
    }
}))

const Faq = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <div style={{ width: '100%', margin: '3em 0' }}> <img src={image} alt="" className={classes.image} /></div>
            <Box className={classes.faqSection}>
                <Box>
                    <h1 className={classes.title}>We connect our customers with the best, and help them keep up-and stay open.</h1>
                </Box>
                <Box style={{ marginTop: '2em' }}>
                    <div className={classes.faqContainer}>
                        <h1 className={classes.subtitle}>We connect our customers with the best</h1>
                        <img src={faqIcon} alt="" />
                    </div>
                    <div className={classes.faqContainer}>
                        <h1 className={classes.subtitle}>We connect our customers with the best</h1>
                        <img src={faqIcon} alt="" />
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Faq