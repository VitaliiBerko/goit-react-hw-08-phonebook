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
            <img src="https://img.icons8.com/arcade/64/null/rick-sanchez.png" alt="user"/>
            <button className="btn btn-outline-primary ms-3" type="button" onClick={handlLogOut}>Log out</button>
        </div>
    )
}