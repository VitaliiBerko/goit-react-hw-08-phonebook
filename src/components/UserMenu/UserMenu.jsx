import { useDispatch, useSelector } from "react-redux"
import { selectName } from "redux/auth/auth.selector";
import { logOut } from "redux/auth/auth.slice";
import styles from '../common.module.css'

export const UserMenu =()=> {

    const dispath = useDispatch();
    const name = useSelector(selectName);

    const handlLogOut =()=>{
        dispath(logOut())
    }

    return (
        <div className={styles.menu}>
            <h2>Welcome, {name}!</h2>
            <button className={styles.btn} type="button" onClick={handlLogOut}>Log out</button>
        </div>
    )
}