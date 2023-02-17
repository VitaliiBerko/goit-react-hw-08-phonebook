import { StyledNavLink } from "components/Layout/layout.styled";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";


export const Navigation =()=> {

    const token = useSelector(selectAuthToken);
    
    return(
        <nav>
             <StyledNavLink
            to="/"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Home
          </StyledNavLink>
          {token && ( <StyledNavLink
            to="/contacts"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Contacts
          </StyledNavLink>)}
        </nav>
    )
}