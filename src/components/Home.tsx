import Navbar from './Navbar'
import { makeStyles } from '@mui/styles'
import backgroundImage from '../assets/background.svg'
import HeroSection from './HeroSection'
import Services from './services/Services'
const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }
}))
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Navbar />
            <HeroSection />
            <Services />
        </div>
    )
}

export default Home