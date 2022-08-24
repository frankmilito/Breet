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
            <p className={classes.title}>Cool feature title</p>
            <h3 className={classes.subtitle}>Learning curve network effects return on investment.</h3>
            <span className={classes.links}>
                <span style={{ marginRight: '10px' }}>Explore Page</span> <ArrowForwardIcon />
            </span>
        </div>
    )
}

export default Cards