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
        fontSize: '20px',
        fontWeight: 400,
    },
    subtitle: {
        color: 'rgba(119, 119, 119, 1)',
        fontSize: '16px',
        fontWeight: 400,
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