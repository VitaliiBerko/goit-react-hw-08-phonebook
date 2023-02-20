import { useDispatch, useSelector } from "react-redux"
import { selectName } from "redux/auth/auth.selector";
import { logOut } from "redux/auth/auth.slice";

export const UserMenu =()=> {

    const dispath = useDispatch();
    const name = useSelector(selectName);

    const handlLogOut =()=>{
        dispath(logOut())
    }

    return (
        <div>
            <h2>Welcome, {name}</h2>
            <button type="button" onClick={handlLogOut}>Log out</button>
        </div>
    )
}