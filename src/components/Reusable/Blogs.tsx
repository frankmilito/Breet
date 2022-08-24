import React from 'react'
import { makeStyles } from '@mui/styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5em 8em',
        textAlign: 'left',
        fontFamily: 'Open sans'
    },
    title: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '24px',
        fontWeight: 400,
        marginTop: '.5em'
    },
    subtitle: {
        color: 'rgba(119, 119, 119, 1)',
        fontSize: '20px',
        lineHeight: '22px',
        fontWeight: 400,
        margin: '10px 0'
    },
    links: {
        display: 'inline',
        alignItems: 'center',
        justifyContent: 'start',
        borderBottom: '1px solid black',
        textUnderlineOffset: '5px',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
    }
}))

type CardsProps = {
    image: string,
    content: string,
    link: string,
    faqIcon: string,
}
const Blogs = ({ image, content, link, faqIcon }: CardsProps) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={image} alt="" />
            <div className={classes.details}>
                <p className={classes.title}>Cool feature title</p>
                <h3 className={classes.subtitle}>Learning curve network effects return on investment.</h3>
            </div>
            <h3>
                Pitch termsheet backing validation focus release.
            </h3>
            <div className={classes.links}>
                <img src={faqIcon} alt="" />
                <p></p>
            </div>
        </div>
    )
}

export default Blogs