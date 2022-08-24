import Navbar from './Navbar'
import { makeStyles } from '@mui/styles'
import backgroundImage from '../assets/background.svg'
import HeroSection from './HeroSection'
import Services from './services/Services'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Blog from './Blog'
import CallToAction from './CallToAction'
import Footer from './Footer'
import { Theme } from '@mui/system'
const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        // background: `url(${backgroundImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // height: '100vh',
        // [theme.breakpoints.down('md')]: {
        //     height: '100%',
        // },
    }
}))
const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            {/* <Navbar /> */}
            <HeroSection />
            <Services />
            <Testimonials />
            <Faq />
            <Blog />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home