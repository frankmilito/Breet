import { makeStyles } from '@mui/styles'
import direction from '../assets/direction.svg'
import Testimonial from './Reusable/Testimonials'
import person1 from '../assets/person1.svg'
import person2 from '../assets/person2.svg'
import person3 from '../assets/person3.svg'
const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5em 8em',
        background: '#0A2640',
        color: '#FFFFFF',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'end',
        marginBottom: '3em'
    },
    image: {
        maxWidth: '100%',

    },
    title: {
        flex: 2,
        fontSize: '48px'
    },
    testimonials: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2em'
    }
}))
const Testimonials = () => {
    const classes = useStyles();
    const testimonialsList = [
        {
            content: "“Buyer buzz partner network disruptive non-disclosure agreement business”", image: person1, title: 'Albus Dumbledore', link: 'Manager @ Howarts'
        },
        {
            content: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”s", image: person2, title: 'Severus Snape', link: 'Manager @ Slytherin'
        },
        {
            content: "“Release facebook responsive web design business model canvas seed money monetization.”", image: person3, title: 'Harry Potter', link: 'Team Leader @ Gryffindor'
        },
    ]
    return (
        <div className={classes.container} >
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>An enterprise template to ramp up your company website</h2>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'end' }}>
                    <img src={direction} alt="" className={classes.image} />
                </div>
            </div>
            <div className={classes.testimonials}>
                {testimonialsList.map(item => (

                    <Testimonial key={item.title} content={item.content} image={item.image} title={item.title} link={item.link} />
                ))}

            </div>
        </div>
    )
}

export default Testimonials