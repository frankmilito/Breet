import { makeStyles } from '@mui/styles'
import { Button, TextField } from '@mui/material'
import subBackground from '../../assets/subBackground.svg'
const useStyles = makeStyles((theme) => ({
    container: {
        background: `url(${subBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        textAlign: 'center',
        padding: '3em 0'
    },
    title: {
        fontSize: '36px',
        width: '70%',
        color: 'white',
        lineHeight: '72px'
    },
    input: {
        background: '#fff',
        marginRight: '20px',
        borderRadius: '2em'
    },
    cta: {
        display: 'flex',
        alignItems: 'center',
    }
}))

const CallToAction = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>An enterprise template to ramp up your company website</h1>
                <div className={classes.cta}>
                    <TextField fullWidth type="text" className={classes.input} />
                    <Button color='secondary' variant='contained' className='button-contained' style={{
                        width: '400px !important'
                    }}>Start Now</Button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction