import { makeStyles } from '@mui/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Theme } from '@mui/system'
import { CardsProps } from '../../interfaces';
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: '3em 4em',
        textAlign: 'left',
        fontFamily: 'Open sans',
        background: '#fff',
        color: '#000',
        borderRadius: '1em',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            padding: '2em '
        }

    },
    title: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '24px',
        fontWeight: 400,
        marginBottom: '2em',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px'
        }
    },
    subtitle: {
        fontSize: '20px',
        lineHeight: '22px',
        fontWeight: 'bold',
        margin: '10px 0'
    },
    link: { color: 'rgba(10, 38, 64, 1)' },
    links: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    image: {
        maxWidth: '100%',
        borderRadius: '50%',
        marginRight: '20px'
    }
}))


const Testimonials = ({ image, title, content, link }: CardsProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.title}>{content}</p>
            <div className={classes.links}>
                <img src={image} alt="" className={classes.image} />
                <div>
                    <h3 className={classes.subtitle}>{title}</h3>
                    <p className={classes.link}> {link}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials