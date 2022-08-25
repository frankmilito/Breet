import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import { CardsProps } from '../../interfaces';
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '5em 8em',
        textAlign: 'left',
        fontFamily: 'Open sans',
        [theme.breakpoints.down('md')]: {
            padding: '2em 4em'
        }
    },
    title: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '20px',
        fontWeight: 400,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        }
    },
    subtitle: {
        color: 'rgba(119, 119, 119, 1)',
        fontSize: '16px',
        fontWeight: 400,
        [theme.breakpoints.down('md')]: {
            fontSize: '14px'
        }
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        marginTop: '2em '

    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1em 0'
    }
}))


const Blogs = ({ image, content, link, faqIcon }: CardsProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={image} alt="" />
            <div className={classes.details}>
                <p className={classes.title}>Category</p>
                <h3 className={classes.subtitle}>November 22, 2021</h3>
            </div>
            <p >
                {content}
            </p>
            <div className={classes.links}>
                <img src={faqIcon} alt="" style={{ marginRight: '10px' }} />
                <p>{link}</p>
            </div>
        </div>
    )
}

export default Blogs