import { makeStyles } from '@mui/styles'
import feather from '../../assets/feather.svg'

const useStyles = makeStyles((theme) => ({
    listItem: {
        boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        borderRadius: '10px',
        cursor: 'pointer',
        marginBottom: '1em'
    }
}))
const ListItem = () => {
    const classes = useStyles();
    return (
        <div className={classes.listItem}>
            <img src={feather} alt="" style={{ fill: '#000', marginRight: '20px' }} />
            <h3>We connect our customers with the best.</h3>
        </div>
    )
}

export default ListItem