import { makeStyles } from '@mui/styles'
import { Button, TextField } from '@mui/material'
import subBackground from '../../assets/subBackground.svg'
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: '0 8em',
        background: `url(${subBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1em',
        marginBottom: '6em',
        [theme.breakpoints.down('md')]: {
            margin: '0 2em',
            marginBottom: '3em'
        }
    },
    wrapper: {
        textAlign: 'center',
        padding: '3em 0',
    },
    title: {
        fontSize: '48px',
        width: '70%',
        color: 'white',
        lineHeight: '72px',
        margin: '0 auto',
        marginBottom: '1em',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '24px',
            lineHeight: '32px',

        }
    },
    input: {
        background: '#fff',
        marginRight: '20px',
        borderRadius: '2em',
        border: 'none',
        width: '100%',
        padding: '1em 2em'
    },
    cta: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2em',
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            width: '90%',
            gap: '1em'
        }
    }
}))

const CallToAction = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>An enterprise template to ramp up your company website</h1>
                <div className={classes.cta}>
                    <input placeholder='Enter Message' type="text" className={classes.input} />
                    <Button color='secondary' variant='contained' className='button-contained' style={{
                        width: '400px !important'
                    }}>Start Now</Button>
                </div>
            </div>
        </div>
    )
}

export default CallToAction