import { StyledNavLink } from "components/Layout/layout.styled"

export const AuthNav =()=>{
    return(
        <div>
            <StyledNavLink
            to="/register"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Join
          </StyledNavLink>
          <StyledNavLink
            to="/login"
            // className={css.link}
            // style={({ isActive }) => (isActive ? aciveStyle : null)}
          >
            Login
          </StyledNavLink>
        </div>
    )
}