import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5em 8em',
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
        </Box>
    )
}

export default Services