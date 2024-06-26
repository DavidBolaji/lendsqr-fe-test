
import { useNavigate } from 'react-router-dom'
import classes from './back-nav.module.scss'
import { CgArrowLongLeft } from "react-icons/cg"

const BackNav = () => {
    const navigate = useNavigate()
    return (<div className={classes.cont} onClick={() => navigate(-1)}
    style={{
        cursor: "pointer"
    }}
    >
        <div className={classes.icon}>
        <CgArrowLongLeft  size={25} />
        </div>
        <p className={classes.text}>Back to Users</p>
    </div>)
}

export default BackNav