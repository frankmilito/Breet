import { makeStyles } from '@mui/styles'
import feather from '../../assets/feather.svg'
import { Theme } from '@mui/system'

const useStyles = makeStyles((theme: Theme) => ({
    listItem: {
        boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        borderRadius: '10px',
        cursor: 'pointer',
        marginBottom: '1em'
    },
    subtitle: {
        [theme.breakpoints.down('md')]: {
            fontSize: '14px'
        }
    }
}))
type ListItemProps = {
    background?: string
    color?: string
    title: string
    image: string
}
const ListItem = ({ background, color, title, image }: ListItemProps) => {
    const classes = useStyles();
    return (
        <div className={classes.listItem} style={{ backgroundColor: `${background}`, color: `${color}` }}>
            <img src={image} alt="" style={{ fill: '#000', marginRight: '20px' }} />
            <h3 className={classes.subtitle}>{title}.</h3>
        </div>
    )
}

export default ListItem