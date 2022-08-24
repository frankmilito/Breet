
import { makeStyles } from '@mui/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '5em 8em',
        textAlign: 'left',
        fontFamily: 'Open sans',
        [theme.breakpoints.down('md')]: {
            padding: '2em 4em',
            textAlign: 'center'
        }
    },
    title: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '24px',
        fontWeight: 400,
        marginTop: '.5em',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px'
        }
    },
    subtitle: {
        color: 'rgba(119, 119, 119, 1)',
        fontSize: '20px',
        lineHeight: '22px',
        fontWeight: 400,
        margin: '12px 0',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        }
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        alignItems: 'center',
        borderBottom: '1px solid black',
        textUnderlineOffset: '5px',
        [theme.breakpoints.down('md')]: {
            margin: '0 auto'
        }
    }
}))

type CardsProps = {
    image: string,
    title: string,
    content: string,
    link: string,
}
const Cards = ({ image, title, content, link }: CardsProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={image} alt="" />
            <p className={classes.title}>{title}</p>
            <h3 className={classes.subtitle}>{content}</h3>
            <span className={classes.links}>
                <span style={{ marginRight: '10px', marginBottom: '5px' }}>Explore Page</span> <ArrowForwardIcon />
            </span>
        </div>
    )
}

export default Cards